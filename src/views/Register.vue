<template>
    <BasicLayout>
        <div class="register">
            <h2>Registro de usuarios</h2>
            <b-form class="ui form" @submit.prevent="register()">
                <div class="field">
                    <b-form-input
                        placeholder="Nombre del usuario"
                        v-model="formData.username"
                        :class="{error: formError.username}"
                    ></b-form-input>
                </div>
                <div class="field">
                    <b-form-input
                        placeholder="Correo electronico"
                        v-model="formData.email"
                        :class="{error: formError.email}"
                    ></b-form-input>
                </div>
                <div class="field">
                    <b-form-input
                        type="password"
                        placeholder="Contraseña"
                        v-model="formData.password"
                        :class="{error: formError.password}"
                    ></b-form-input>
                </div>
                <b-button
                    block
                    type="submit"
                    variant="primary"
                >
                    Crear cuenta
                </b-button>
                <b-spinner 
                    v-if="loading"
                    variant="primary"
                    class="my-3"
                ></b-spinner>
            </b-form>
            <router-link to="/login">
                Iniciar Sesion
            </router-link>
        </div>
    </BasicLayout>
</template>

<script>
import BasicLayout from '../layouts/BasicLayout';
import * as Yup from 'yup';
import {registerAPI} from '../api/user';

export default {
    name: "Register",
    components: {
        BasicLayout,
    },
    data(){
        return{
            formData: {},
            formError: {
                username: false,
                email: false,
                password: false
            },
            schemaForm: Yup.object().shape({
                username: Yup.string().required(true),
                email: Yup.string().email(true).required(true),
                password: Yup.string().required(true),
            }),
            loading: false,
        }
    },
    methods:{
        async register(){
            this.loading= true;
            this.formError= {
                username: false,
                email: false,
                password: false
            };

            try {
                await this.schemaForm.validate(this.formData, {abortEarly: false})
                try {
                    const response= await registerAPI(this.formData);
                    this.$router.push({path: '/login'})
                } catch (error) {
                    console.log(error);
                }
            } catch (error) {
                console.log(error);
                error.inner.forEach((err)=> {
                    this.formError[err.path]= err.message;
                })
            }
            this.loading= false;
        },
    }
}
</script>

<style lang="scss" scoped>
    .register{
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