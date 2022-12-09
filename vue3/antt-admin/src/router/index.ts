import {createRouter, createWebHashHistory} from 'vue-router'
import routes from './routes'

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

router.beforeEach((to, from, next) => {
  let userInfo: string | undefined = localStorage.userInfo
  
  // if (!userInfo) {
  //   if (to.name !== 'login') {
  //     next('/login')
  //     return
  //   }
  // }
  next()
})

export default router