import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { useStore } from 'vuex'
import { App } from 'vue'
import Cookies from 'js-cookie'
import store from '../store'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../views/index.vue'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import('../views/home/index.vue'),
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index.vue')
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const genRouter = () => {
  const menus = store.getters.getNewMenus
  for(let key in menus) {
    const newRoutes: RouteRecordRaw = {
      path: `/${menus[key].name}`,
      name: menus[key].name,
      component: () => import('../views/index.vue'),
      children: []
    }
    for(let i = 0; i < menus[key].children.length; i++) {
      var url = `../views/${menus[key].name}/${menus[key].children[i].name}.vue`
      newRoutes.children?.push({
        path: menus[key].children[i].name,
        name: menus[key].children[i].name,
        component: () => import(`../views/${menus[key].name}/${menus[key].children[i].name}.vue`)
      })  
    }
    router.addRoute(newRoutes)
  }
}
router.beforeEach((to, from, next) => {
  const token = Cookies.get('token')
  if (token && store.state.menus.length === 0) {
    store.dispatch('getAdminInfo').then(() => {
      genRouter()
      next(to.path)
    }).catch(() => {
      next(to.path)
    })
    
  } else if (token && to.path === '/login') {
    next('/')
  } else if (!token && to.path !== '/login'){
    console.log('去登录')
    next('/login')
  } else {
    next()
  }
})

export const initRouter = (app: App<Element>) => {
  app.use(router)
}




