<template>
    <BasicLayout>
        <div class="login">
            <h2>Inicio de Sesion</h2>
            <b-form class="ui form" @submit.prevent="login()">
                <div class="field">
                    <b-form-input
                        placeholder="Email"
                        v-model="formData.identifier"
                        :class="{error: formError.identifier}"
                    ></b-form-input>
                </div>
                <div class="field">
                    <b-form-input
                        placeholder="Password"
                        v-model="formData.password"
                        type="password"
                        :class="{error: formError.password}"
                    ></b-form-input>
                </div>
                <b-button
                    block
                    type="submit"
                    variant="primary"
                >
                    Iniciar Sesion
                </b-button>
                <b-spinner 
                    v-if="loading"
                    variant="primary"
                    class="my-3"
                ></b-spinner>
            </b-form>
            <router-link to="/register">
                Crear cuenta
            </router-link>
        </div>
    </BasicLayout>
</template>

<script>
import * as Yup from 'yup';
import BasicLayout from '../layouts/BasicLayout';
import {loginAPI} from '../api/user';
import {setTokenAPI, getTokenAPI} from '../api/token';

export default {
    name: "login",
    components: {
        BasicLayout
    },
    created(){
        this.token= getTokenAPI();
        if(this.token){
            this.$router.push('/');
        }
    },
    data(){
        return{
            formData: {
                identifier: "",
                password: "",
            },
            formError: {
                identifier: false,
                password: false
            },
            schemaForm: Yup.object().shape({
                identifier: Yup.string().required(true),
                password: Yup.string().required(true),
            }),
            loading: false,
            token: null,
        }
    },
    methods: {
        async login(){
            this.loading= true;
            this.formError= {
                identifier: false,
                password: false
            }

            try {
                await this.schemaForm.validate(this.formData, {abortEarly: false});
                try {
                    const response= await loginAPI(this.formData);
                    this.loading= false;
                    if(!response?.jwt) throw "EL usuario o contraseña no son validos";
                    setTokenAPI(response.jwt);
                    this.$router.push("/");
                } catch (error) {
                    console.log(error);
                }
            } catch (error) {
                console.log(error);
                error.inner.forEach((err)=> {
                    this.formError[err.path]= err.message;
                })
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .login{
        text-align: center;

        >h2{
            margin-top: 20px;
            margin-bottom: 20px;
        }
    }

    .field {
        margin-bottom: 15px;
    }

    .ui.form{
        max-width: 400px !important;
        margin: 0 auto;
        margin-bottom: 10px;
    }

    .error {
        border-color: #faa;
        background-color: #ffeded;
    }
</style>