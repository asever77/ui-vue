import { createRouter, createWebHistory } from 'vue-router'
import IntroductionView from '@/views/convention/IntroductionView'

const routes = [
  {
    path: '/',
    name: 'introduction',
    component: IntroductionView
  },
  {
    path: '/naming',
    name: 'naming',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "convention" */ '@/views/convention/NamingView.vue')
  },
  {
    path: '/tab',
    name: 'tab',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "convention" */ '@/views/components/TabView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
