<template>
    <BasicLayout>
        <h1>Estamos en la categoria</h1>
        {{ products }}
    </BasicLayout>
</template>

<script>
import BasicLayout from '../layouts/BasicLayout.vue';
import { getProductCategory } from '../api/products';
import Products from '../components/Products.vue';

export default {
    name: "Category",
    components: {
        BasicLayout,
        Products
    }, 
    watch: {
        //De esta manera podemos acceder al parametro que se envia en una ruta dinamica
        $route(to, from){
            this.getProducts(to.params.category);
        }
    },
    created(){
    },
    data(){
        return{
            products: [],
        }
    },
    methods: {
        async getProducts(category){
            this. products= await getProductCategory(category);
            console.log(this.products);
        }
    }
}
</script>

<style>

</style>