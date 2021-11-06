<template>
  <div class="cart" :class="{ open: showCart }">
      <h2>Esto es el carrito</h2>
      <button @click="updateShowCart(false)">Cerrar</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    name: "Cart",
    data(){
        return{

        }
    },
    methods: {
        ...mapActions(['updateShowCart']),
    },
    computed: {
        ...mapState(['showCart'])
    }
}
</script>

<style lang="scss" scoped>
    .cart{
        position: fixed;
        right: 0;
        top: 0;
        width: 400px;
        height: 100vh;
        background-color: white;
        box-shadow: 0px 0px 26px 5px rgba(0, 0, 0, 0.75);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        transform: translateX(150%);

        &.open{
            transform: translateX(0);
        }
    }
</style>