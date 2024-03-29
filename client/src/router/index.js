import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/index';
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
    component: () => import(/* webpackChunkName: "about" */ '../views/Main.vue'),
    beforeEnter: (to, from, next) => {
      if (store.state.common.loginFlag === false) {
        next('/login');
      } else {
        next();
      }
    },
    beforeRouteLeave: (to, from, next) => {
      if (store.state.common.loginFlag === false) {
        next('/login');
      } else {
        next();
      }
    },
  },
  {
    path: '/graphs',
    name: 'graphs',
    component: () => import(/* webpackChunkName: "about" */ '../views/Graphs.vue'),
    beforeEnter: (to, from, next) => {
      if (store.state.common.loginFlag === false) {
        next('/login');
      } else {
        next();
      }
    },
    beforeRouteLeave: (to, from, next) => {
      if (store.state.common.loginFlag === false) {
        next('/login');
      } else {
        next();
      }
    },
  },
  {
    path: '/sign_up',
    name: 'signup',
    component: () => import('../views/SignUp.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
