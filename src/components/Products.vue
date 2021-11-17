<template>
  <div class="card product">
      <div class="image">
        <img :src="API_URL + product.image.url" :alt="product.name" height="150">
      </div>
      <div class="content">
          <div class="header">{{ product.name }}</div>
          <div class="description">$ {{ product.price }}</div>
      </div>
      <div class="button" @click="addProductCart(product.id)">
          Comprar
      </div>
      <!-- <button @click="displayProd()">AQUI</button> -->
  </div>
</template>

<script>
import { API_URL } from "../utils/constants";
import { addProductCartApi } from '../api/cart';


export default {
    name: "Product",
    props: {
        product: Object
    },
    data(props){
        return{
           prod: props.product,
           API_URL,
        }
    },
    methods: {
        displayProd(){
            console.log(this.prod);
        },
        addProductCart(idProduct){
            addProductCartApi(idProduct);
        }
    },
}
</script>

<style lang="scss" scoped>
    .product{
        margin: 10px 0px;

        &:hover{
            .button{
                min-height: 36px;

                &:hover{
                    cursor: pointer;
                }
            }
        }
    }

    .image{
        margin: 4px 0px;
        display: flex;
        justify-self: center;
        align-self: center;
    }

    .button{
        background-color: springgreen;
        color: white;
        text-align: center;
        max-height: 0;
        min-height: 0;
        overflow: hidden;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: min-height 0.6s ease;
    }

    .header{
        text-align: center;
        font-weight: bold;
    }

    .description{
        text-align: center;
        color: #969696;
    }
</style>