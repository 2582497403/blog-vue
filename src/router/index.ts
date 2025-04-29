import { createRouter, createWebHistory } from 'vue-router'
import AdminLayout from '@/views/AdminLayout.vue'
import Dashboard from '@/views/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AdminLayout,
      children: [{ path: '', component: Dashboard }],
    },
  ],
})

export default router
