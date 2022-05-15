<template>
  <div>
    <div>{{count}}</div>
    <button @click="getCount">nextTick</button>
  </div>
</template>
<script setup>
  import {ref, onMounted, nextTick} from 'vue'
  let count = ref(0)
  
  onMounted(() => {
    nextTick(() => {
      console.log('nextTick' + count.value)
    })
    console.log('mounted' + count.value)
  })

  
</script>