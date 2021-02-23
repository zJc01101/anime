import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../views/Layout.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/bookcase',
        name: 'Bookcase',
        component: () => import('../views/Bookcase')
      },
      {
        path: '/select',
        name: 'Select',
        component: () => import('../views/Select')
      },
      {
        path: '/community',
        name: 'Community',
        component: () => import('../views/Community')
      },
      {
        path: '/mine',
        name: 'Mine',
        component: () => import('../views/Mine')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: 'active'
})

export default router
