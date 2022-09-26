import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../views/Landing.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'landing',
    component: Landing,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import(/* webpackChunkName: "about" */ '../views/Main.vue')
  },
  {
    path: '/graphs',
    name: 'graphs',
    component: () => import(/* webpackChunkName: "about" */ '../views/Graphs.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
