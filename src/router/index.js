import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RestaurantView from '@/views/RestaurantView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    // You choose what to name the parameter, but make sure you are fetching the name you chose
    path: '/restaurant/:restaurantId',
    name: 'restaurant',
    component: RestaurantView
  }
]

const router = new VueRouter({
  routes
})

export default router
