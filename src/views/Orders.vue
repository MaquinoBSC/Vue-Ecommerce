<template>
    <BasicLayout>
        <h1>Mis pedidos</h1>
    </BasicLayout>
</template>

<script>
import jwtDecode from 'jwt-decode';
import BasicLayout from '../layouts/BasicLayout.vue';
import { getOrders } from '../api/order';
import { getTokenAPI } from '../api/token';

export default {
    name: "Orders",
    components: {
        BasicLayout,
    },
    async created(){
        const token= getTokenAPI();
        const { id }= jwtDecode(token);
        this.orders= await getOrders(id);
    },
    data(){
        return{
            orders: [],
        }
    }
}
</script>

<style>

</style>