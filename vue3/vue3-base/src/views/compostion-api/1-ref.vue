<template>
  <div>
    {{count}}
    <button @click="addCount">add</button>
    <button @click="subCount">sub</button>
  </div>
</template>
<script setup>
  import {ref} from 'vue'
  let count = ref(0)
  console.log(count.value)

  const addCount = () => {
    count.value += 1
  }

  const subCount = () => {
    count.value -= 1
  }


</script>