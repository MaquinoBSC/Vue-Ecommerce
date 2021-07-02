<template>
  <BasicLayout>
    <h1>Ultimos porductos</h1>
    <div class="container">
      <div class="row">
        <div 
          class="col-xl-2 col-lg-4 col-md-6 col-sm-8"
          v-for="(product) in products" 
          :key="product.id"
        >
          <Products :product="product" />
        </div>
      </div>
    </div>
  </BasicLayout>
</template>

<script>
import BasicLayout from '../layouts/BasicLayout';
import {getProductsAPI} from '../api/products';
import Products from '../components/Products.vue';

export default {
  name: 'Home',
  components: {
    BasicLayout,
    Products
  },
  created(){
    this.getProducts();
  },
  data(){
    return{
      products: null
    }
  },
  methods: {
    async getProducts(){
      this.products= await getProductsAPI(20);
      console.log(this.products);
    }
  }
}
</script>
