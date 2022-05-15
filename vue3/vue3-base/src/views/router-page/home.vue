<template>
  <div>home

    <button @click="jumpPage">点击跳转到detail</button>
    <button @click="jumpOutPage">点击跳转到out</button>
  </div>
</template>
<script setup>
import {useRoute, useRouter} from 'vue-router'
// 路由参数等params、query等
const route = useRoute()
// 路由方法等forward,go,push
const router = useRouter()
console.log(route, router)



const jumpPage = () => {
  router.push({
    name: 'detail',
    params: {
      id: 1
    }
  })
}

const jumpOutPage = () => {
  router.push({
    path: 'out',
    query: {
      id: 1
    }
  })
}
</script>