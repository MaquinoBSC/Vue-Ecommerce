<template>
  <div class="cart-header">
      <p>Carrito</p>
      <i class="bi-arrow-right-circle icon" @click="updateShowCart(false)"></i>
  </div>
</template>

<script>
export default {
    name: "CartHeader",
    props: {
        updateShowCart: Function
    }
}
</script>

<style lang="scss" scoped>
    .cart-header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 20px;
        border-bottom: 1px solid #000;
        padding: 10px 20px;

        p, i{
            margin: 0;
        }
    }

    i:hover{
        cursor: pointer;
    }
</style>