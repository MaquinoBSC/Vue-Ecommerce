<template>
  <div class="menu">
      <div class="container">
          <b-row>
              <b-col>
                  <div class="left-menu">
                    <router-link class="row categories item mx-2" to="/">
                        <b-img 
                            :src="require('../assets/logo.jpg')" 
                            fluid 
                            alt="fluid image"
                            class="image mx-1"
                        ></b-img>
                    </router-link>
                    <template v-for="category in categories">
                        <router-link class="item mx-3" :to="category.slug" :key="category.id">
                            <p class="text-menu">{{category.title}}</p>
                        </router-link>
                    </template>
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
                            <span class="text-menu px-3" @click="updateShowCart(true)">
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
import {getCategoriesAPI} from '../api/category';
import { mapActions } from 'vuex';

export default {
    name: "Menu",
    async created(){
        await this.getCategories();
    },
    data(){
        return{
            token: getTokenAPI(),
            categories: null,
        }
    },
    methods: {
        ...mapActions(['updateShowCart']),
        logout(){
            deleteTokenAPI();
            location.replace("/");
        },
        async getCategories(){
            this.categories= await getCategoriesAPI();
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
</style>