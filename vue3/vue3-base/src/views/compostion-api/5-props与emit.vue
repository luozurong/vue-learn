<template>
  <div>
    getCurrentInstall
    <emits :count="count" @numChange="numChange" ></emits>
    <emits-new :count="count" @numChange="numChangeNew"></emits-new>
    <button  @click="modifyCount">改变count值</button>
  </div>
</template>
<script setup>
  import {getCurrentInstance, ref} from 'vue'
  import emits from './component/emits.vue'
  import emitsNew from './component/emitsNew.vue'
  
  let count = ref(0)

  // 获取当前实例(只能在开发环境使用)
  const { ctx }  = getCurrentInstance();
  // 获取当前实例(开发与生产都可用)
  const { proxy }  = getCurrentInstance();
  // 获取全局属性
  const  {appContext} = getCurrentInstance();


  const modifyCount = () => {
    count.value = Math.ceil(Math.random() * 100)
    console.log(count.value)
  }
  const numChange = (data) => {
    console.log(data.count)
  }

  const numChangeNew = (data) => {
    console.log('emit改变了',data)
  }
</script>