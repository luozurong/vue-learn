<template>
  <div >
   v-model传值
   <Child v-model:num="num" v-model:info="info"/>
  </div>
</template>
<script setup lang="ts">
  import Child from './12-vmodel-child.vue'
  import {reactive, ref} from 'vue'

  let num = ref(20)
  let info = reactive({
    a: 1
  })
</script>