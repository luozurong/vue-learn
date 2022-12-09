<template>
  <div>{{num}}</div>
  <button @click="clickHandler">++</button>
</template>
<script setup lang="ts">
import { reactive, toRefs } from 'vue';

  let obj = {
    num: 20
  }

  // toRefs的作用， 解构reactive 得到响应式
  let {num} = toRefs(reactive(obj))
  
  
  const clickHandler = () => {
    console.log(num.value ++)
  }
  
</script>