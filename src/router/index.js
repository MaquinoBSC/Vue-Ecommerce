import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ()=> import('../views/Home.vue'),
  },
  {
    path: '/login',
    name: "Login",
    component: ()=> import('../views/Login.vue'),
  },
  {
    path: '/register',
    name: "Register",
    component: ()=> import('../views/Register.vue'),
  },
  {
    path:"/cart",
    name: "Cart",
    component: ()=> import('../views/Cart.vue'),
  },
  {
    path:"/orders",
    name: "Orders",
    component: ()=> import('../views/Orders.vue'),
  },
  {
    path:"/:category",
    component: ()=> import('../views/Category.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
