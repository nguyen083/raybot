import type { RouteRecordRaw } from 'vue-router'
import { useNProgress } from '@/lib/nprogress'
import { createRouter, createWebHistory } from 'vue-router'
import 'nprogress/nprogress.css'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

const nprogress = useNProgress()

router.beforeEach((to, _, next) => {
  document.title = `${to?.meta.name ?? ''} | ${import.meta.env.VITE_APP_NAME}`
  nprogress.start()

  next()
})

router.afterEach(() => {
  nprogress.done()
})
export default router
