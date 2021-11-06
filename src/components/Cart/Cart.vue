<template>
    <div>
        <div class="cart-dimmer" :class="{ open: showCart }" @click="updateShowCart(false)" />
        <div class="cart" :class="{ open: showCart }">
            <div>
                <CartHeader :updateShowCart="updateShowCart" />
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import CartHeader from './CartHeader.vue';

export default {
    name: "Cart",
    components: {
        CartHeader
    },
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
    .cart-dimmer{
        opacity: 0;
        transition: opacity 0.5s ease;

        &.open{
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #000;
            opacity: 0.7;
        }
    }

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
        transition: transform 0.9s;
        transform: translateX(150%);

        &.open{
            transform: translateX(0);
        }
    }
</style>