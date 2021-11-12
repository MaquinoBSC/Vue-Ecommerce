<template>
    <div class="cart-footer">
        <p>Total: ${{ total }} </p>

        <router-link to="/cart">
            <button class="btn btn-success btn-block btn-buy" @click="updateShowCart()">Comprar</button>
        </router-link>
    </div>
</template>

<script>
export default {
    name: "CartFooter",
    props: {
        products: Array,
        updateShowCart: Function
    },
    data() {
        return {
            total: 0,      
        }
    },
    watch: {
        products(){
           let totalTemp= 0;
           
           this.$props.products.forEach((product)=> {
               totalTemp+= product.price * product.quantity;
           });
           this.total= totalTemp.toFixed(2);
        }
    }
}
</script>

<style lang="scss" scoped>
    .cart-footer{
        padding: 10px;
    }

</style>