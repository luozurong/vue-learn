import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/store-page/userInfo.vue')
  },
  {
    path: '/routerPage',
    name: 'routerPage',
    component: () => import('../views/router-page/layout.vue'),
    children: [
      {
        path: '/routerPage',
        name: 'routerPage',
        component: () => import('../views/router-page/home.vue')
      },
      {
        path: '/routerPage/my',
        name: 'routerMy',
        component: () => import('../views/router-page/my.vue')
      }
    ]
  },
  {
    path: '/out',
    name: 'out',
    component: () => import('../views/router-page/out.vue')
  },
  {
    path: '/axiosPage',
    name: 'axiosPage',
    component: () => import('../views/axios-page/index.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/cart.vue')
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: () => import('../views/router-page/detail.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/:pathMatch(.*)',
    name: 'error',
    component: () => import('../views/notFound.vue'),
    meta: { title: '404' },
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to)
  if (['out', 'my'].includes(to.name)) {
    let token = localStorage.getItem('token')
    if (!token) {
      next('login')
      return
    }
  }
  next()
})

export default router