<template>
  <!-- watch的写法 -->
  <p>{{num}}</p>
  <button @click="num ++;">++</button>
</template>
<script setup lang="ts">
import { reactive, ref, toRefs, watch, watchEffect } from 'vue';

  // let num = ref(20)
  // watch(num, (nval, oval) => {
  //   console.log(nval, oval)
  // })


  let obj = reactive({
    num: 30
  })
  let  {num} = toRefs(obj)
  watch(num, (nval, oval) => {
    console.log(nval, oval)
  })


  // let obj = reactive({
  //   num: 30
  // })
  // watch(() => obj.num, (nval, oval) => {
  //   console.log(nval, oval)
  // })


  // let obj = reactive({
  //   num: 30
  // })
  // let s = reactive({
  //   a: 1
  // })
  // watch([() => obj.num, () => s.a], (nval, oval) => {
  //   console.log(nval, oval)
  // })


  // 页面刷新的时候立即监听
  // let obj = reactive({
  //   num: 30
  // })
  // watchEffect((val) => {
  //   console.log(val)
  //   // 凡是写在这里的数据，只要发生变化，都会在治理被执行
  //   console.log('watchEffect', obj.num)
  // })
</script>