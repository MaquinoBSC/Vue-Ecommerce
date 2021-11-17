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
                        <button class="btn btn-danger" @click="deleteAllProductCart(product.id)">Delete</button>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>Total: </td>
                    <td colspan="2"> $ {{ getTotal() }} </td>
                </tr>
            </tbody>
        </table>
        <button class="btn btn-info btn-block mb-4" v-if="products" @click="createOrder()"> Generar Pedido</button>
        <h3 v-else>No tienes productos en el carrito</h3>
    </BasicLayout>
</template>

<script>
import jwtDecode from 'jwt-decode';
import BasicLayout from '../layouts/BasicLayout.vue';
import { getProductsCartApi, deleteProductCartApi, deleteCartApi } from '../api/cart';
import { createOrderAPi } from '../api/order';
import { getTokenAPI } from '../api/token';


export default {
    name: "Cart",
    components: {
        BasicLayout,
    },
    created(){
        this.reloadCart= true;
    },
    watch: {
        async reloadCart(){
            const response= await getProductsCartApi();
            this.products= response;
        }
    },
    data() {
        return {
            products: null,
            reloadCart: false,
        }
    },
    methods: {
        getTotal(){
            let totalTemp= 0;

            this.products.forEach((product)=> {
                totalTemp+= product.price * product.quantity
            });
            return totalTemp.toFixed(2);
        },
        deleteAllProductCart(id){
            deleteProductCartApi(id);
            this.reloadCart= !this.reloadCart;
        },
        async createOrder(){
            const token= getTokenAPI();
            const { id }= jwtDecode(token);

            const data={
                user: id,
                totalPayment: this.getTotal(),
                data: this.products,
            }

            try {
                const response= await createOrderAPi(data);
                deleteCartApi();
                this.$router.push('/orders');
            } catch (error) {
                console.log(error);
            }
        }
    }
}
</script>

<style>

</style>