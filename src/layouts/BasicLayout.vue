<template>
  <div>
      <div class="basic-layout">
        <Menu />
        <div class="container">
            <slot />
        </div>
    </div>

    <Cart />
  </div>
</template>

<script>
import Menu from '../components/Menu';
import Cart from '../components/Cart/Cart.vue';

export default {
    name:"BasicLayout",
    components: {
        Menu,
        Cart,
    }
}
</script>

<style>

</style>