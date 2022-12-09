import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../views/layout/index.vue'),
    children: [
      {
        path: '/',
        component: () => import('../views/index.vue')
      },
      {
        path: '/userManagement',
        component: () => import('../views/systemManagement/usermanagement/index.vue')
      },
      {
        path: '/menuManagement',
        component: () => import('../views/systemManagement/menuManagement/index.vue')
      },
      {
        path: '/roleManagement',
        component: () => import('../views/systemManagement/roleManagement/index.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('../views/login/login.vue')
  },
  {
    path: '/404',
    component: () => import('../views/404.vue')
  },
  {
    path: '/:pathMath(.*)',
    redirect: '/404'
  }
]

export default routes