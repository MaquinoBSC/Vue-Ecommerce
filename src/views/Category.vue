<template>
    <BasicLayout>
        <h1>Estamos en la categoria</h1>
    </BasicLayout>
</template>

<script>
import BasicLayout from '../layouts/BasicLayout.vue';
import { getProductCategory } from '../api/products';

export default {
    name: "Category",
    components: {
        BasicLayout
    }, 
    watch: {
        //De esta manera podemos acceder al parametro que se envia en una ruta dinamica
        $route(to, from){
            console.log(to);
        }
    },
    async created(){
        const products= await getProductCategory("golosinas");
        console.log(products);
    }
}
</script>

<style>

</style>