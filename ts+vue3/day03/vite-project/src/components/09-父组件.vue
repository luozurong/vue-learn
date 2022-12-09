<template>
  <div>父组件</div>
  <Child :num="num" @fn="emitNum"/>
</template>
<script setup lang="ts">
  import Child from './10-子组件.vue'
  import { ref } from 'vue'

  let num = ref(20)

  const emitNum = (value: number) => {
    console.log(value)
    num.value ++
  }
  
</script>