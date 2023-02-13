import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Basket from '../views/Basket.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: Home
  },
  {
    path: '/basket',
    name: 'BasketPage',
    component: Basket
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
