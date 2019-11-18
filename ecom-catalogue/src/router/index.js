import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Wishlist from '../views/Wishlist.vue'
import Cart from '../views/Cart.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: 'My Collection',
    }
  },
  {
    path: '/wishlist',
    name: 'wishlist',
    component: Wishlist,
    meta: {
      title: 'My Wishlist',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam fuga molestias rem. Necessitatibus, corporis voluptatibus.'
    }
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart,
    meta: {
      title: 'My Bag',
    }
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router