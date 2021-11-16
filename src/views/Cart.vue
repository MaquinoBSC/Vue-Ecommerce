<template>
    <BasicLayout>
        <h1 class="my-3 text-center">Carrito</h1>
        <table class="table table-dark table-striped" v-if="products">
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th class="text-center">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in products" :key="product.id">
                    <td>{{ product.name }}</td>
                    <td>{{ product.quantity }}</td>
                    <td>${{ product.price }}</td>
                    <td style="text-align: center;">
                        <button class="btn btn-danger">Delete</button>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>Total: </td>
                    <td colspan="2"> $ {{ getTotal() }} </td>
                </tr>
            </tbody>
        </table>
        <button class="btn btn-info btn-block mb-4" v-if="products"> Generar Pedido</button>
        <h3 v-else>No tienes productos en el carrito</h3>
    </BasicLayout>
</template>

<script>
import BasicLayout from '../layouts/BasicLayout.vue';
import { getProductsCartApi } from '../api/cart';


export default {
    name: "Cart",
    components: {
        BasicLayout,
    },
    async created(){
        const response= await getProductsCartApi();
        this.products= response;
    },
    data() {
        return {
            products: null,
        }
    },
    methods: {
        getTotal(){
            let totalTemp= 0;

            this.products.forEach((product)=> {
                totalTemp+= product.price * product.quantity
            });
            return totalTemp.toFixed(2);
        }
    }
}
</script>

<style>

</style>