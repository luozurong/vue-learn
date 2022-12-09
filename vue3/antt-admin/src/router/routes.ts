import {RouteRecordRaw} from 'vue-router'

const routes: RouteRecordRaw[] = [{
  path: '/',
  redirect: '/',
  component: () => import('@/layout/index.vue'),
  children: [{
    path: '/',
    name: 'layout',
    component: () => import('@/pages/home/index.vue'),
  }]
}, {
  path: '/404',
  name: '404',
  component: () => import('@/pages/error/404.vue'),
}, {
  path: '/login',
  name: 'login',
  component: () => import('@/pages/login/login.vue')
}, {
  path: '/:pathMatch(.*)',
  redirect: '/404',
}]

export default routes