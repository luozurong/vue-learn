<template>
  <div>
    {{count}}
    <injectChild/>
    <button @click="modifyCount">改变count</button>
  </div>
</template>
<script setup>
  import {ref, provide} from 'vue'
  import injectChild from './component/injectChild.vue'
  const count = ref(0)
  const modifyCount = () => {
    count.value = Math.random()
  }

  provide('provideData', {
    count,
    modifyCount
  })
</script>