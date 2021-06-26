<template>
  <div class="menu">
      <div class="container">
          <b-row>
              <b-col>
                  <div class="left-menu">
                    <router-link class="row categories item" to="/">
                        <b-img 
                            :src="require('../assets/logo.jpg')" 
                            fluid 
                            alt="fluid image"
                            class="image mx-1"
                        ></b-img>
                        <p class="text-menu mx-1">Categorias</p>
                    </router-link>
                </div>
              </b-col>
              <b-col>
                    <div class="right-menu">
                        <router-link class="item" to="/login" v-if="!token">
                            <p class="text-menu">Iniciar Sesion</p>
                        </router-link>
                        <template v-if="token" class="item">
                            <router-link class="item" to="/orders">
                                <p class="text-menu px-3">Pedidos</p>
                            </router-link>
                            <span class="text-menu px-3">
                                <i class="bi-cart4" style="font-size: 30px; color: white;"></i>
                            </span>
                            <span class="text-menu px-3" @click="logout()">
                                <i class="bi-door-closed" style="font-size: 30px; color: white;"></i>
                            </span>
                        </template>
                    </div>
              </b-col>
          </b-row>
      </div>
  </div>
</template>

<script>
import {getTokenAPI, deleteTokenAPI} from '../api/token';

export default {
    name: "Menu",
    data(){
        return{
            token: getTokenAPI(),
        }
    },
    methods: {
        logout(){
            deleteTokenAPI();
            location.replace("/");
        }
    }
}
</script>

<style lang="scss" scoped>
    .menu{
        background-color: #16202b;
    }
    .left-menu, .right-menu {
        display: flex;
        justify-content: center;
        align-items: center;

        .item {
            color: #fff;
            &:hover {
                color: #1fa1fa;
            }

            .text-menu{
                padding-top: 20px;
            }
        }
    }

    .image {
        width: 100px;
        border-radius: 15px;
    }

    .text-menu {

    }
</style>