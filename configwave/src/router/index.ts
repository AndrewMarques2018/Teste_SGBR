import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'
import Home from '@/pages/Home.vue'
import Profile from '@/pages/Profile.vue'
import Settings from '@/pages/Settings.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', name: 'Home', component: Home },
      { path: 'profile', name: 'Profile', component: Profile },
      { path: 'settings/:section?', name: 'Settings', component: Settings},
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
