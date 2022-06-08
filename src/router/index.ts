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
        name: 'LoginPage',
        component: () => import('@/views/LoginPage.vue')
      },
      {
        path: 'selection',
        name: 'SelectionPage',
        component: () => import('@/views/SelectPage.vue')
      },
      {
        path: 'upload',
        name: 'UploadPage',
        component: () => import('@/views/UploadPage.vue')
      },
      {
        path: 'account',
        name: 'AccountPage',
        component: () => import('@/views/AccountPage.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
