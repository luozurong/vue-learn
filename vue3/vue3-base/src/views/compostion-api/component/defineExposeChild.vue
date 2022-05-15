<template>
  <div>
    <div>count值--{{count}}</div>
    <button @click="modify">子组件点击改变count值</button>
  </div>
</template>
<script setup>
  import {ref, defineExpose} from 'vue'

  let count = ref(0)

  const modify = () => {
    count.value = Math.ceil(Math.random() * 100)
  }

  defineExpose({
    count,
    modify
  })
</script>