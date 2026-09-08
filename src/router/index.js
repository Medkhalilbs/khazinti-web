import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Privacy from '../views/Privacy.vue'
import Changelog from '../views/Changelog.vue'
import Support from '../views/Support.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: Privacy
  },
  {
    path: '/changelog',
    name: 'Changelog',
    component: Changelog
  },
  {
    path: '/support',
    name: 'Support',
    component: Support
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
