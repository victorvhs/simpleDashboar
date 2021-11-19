import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/Home/index.vue')
const Feedbacks = () => import('../views/Feedbacks/index.vue')
const Credential = () => import('../views/Credential/index.vue')
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/feedbacks',
    name: 'Feedbacks',
    component: Feedbacks,
    meta: {
      hasAuth: true
    }
  },
  {
    path: '/credential',
    name: 'Credential',
    component: Credential,
    meta: {
      hasAuth: true
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'Home' }
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
