import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/',
    component: TabsPage,
    children: [
      // {
      //   path: '',
      //   redirect: '/tabs/tab1'
      // },
      {
        path: 'login',
        component: () => import('@/views/LoginPage.vue')
      },
      {
        path: 'selection',
        component: () => import('@/views/SelectPage.vue')
      },
      {
        path: 'upload',
        component: () => import('@/views/UploadPage.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
