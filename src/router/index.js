import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../views/Home.vue'
import Pgn from '../views/Pgn.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HelloWorld
  },

  {
    path: '/:name',
    name: 'Pgn',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Pgn,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
