<template>
  <div>
    <span>{{obj.count}}</span>
    <button @click="modifyCount">改变值</button>
    <button @click="$router.push('cart')">跳转到cart</button>
  </div>
</template>
<script setup>
  import {reactive, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted} from 'vue'
  
  const obj = reactive({
    count: 0
  })
  

  const modifyCount = () => {
    obj.count = Math.floor(Math.random() * 10)
  }

  onMounted(() => {
    console.log("onMounted:count=" + obj.count)
  })

  onBeforeMount(() => {
    console.log("onBeforeMount:count=" + obj.count)
  })

  onBeforeUpdate(() => {
    console.log("onBeforeUpdate:count=" + obj.count)
  })

  onUpdated(() => {
    console.log("onUpdated:count=" + obj.count)
  })

  onBeforeUnmount(() => {
    console.log("onBeforeUnmount:count=" + obj.count)
  })

  onUnmounted(() => {
    console.log("onUnmounted:count=" + obj.count)
  })
</script>