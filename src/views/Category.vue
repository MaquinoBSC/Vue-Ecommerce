<template>
    <BasicLayout>
        <div class="row">
            <div class="col-xl-2 col-lg-4 col-md-6 col-sm-8" v-for="product in products" :key="product.id">
                <Products :product="product" />
            </div>
        </div>        
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
    created(){
        this.getProducts(this.$route.params.category);
    },
    watch: {
        //De esta manera podemos acceder al parametro que se envia en una ruta dinamica
        $route(to, from){
            this.getProducts(to.params.category);
        }
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