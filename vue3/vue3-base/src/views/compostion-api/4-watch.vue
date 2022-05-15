<template>
  <div>
    <span>{{count}}</span>
    <button @click="modifyCount">modify</button>
  </div>
</template>
<script setup>
  import {ref, watch, reactive} from 'vue'
  let count = ref(0)
  const arr = reactive([])
  const obj = reactive({
    count: 0
  })

  const modifyCount = () => {
    count.value = Math.floor(Math.random() * 100)
    arr.push(count.value)
    obj.count = count.value
  }
  // 监听基本类型变化
  watch(count, (nVal, oVal) => {
    console.log(nVal, oVal)
  })
  // 监听数组变化
  watch(arr, (nVal, oVal) => {
    // 返回的结果nVal, oVal是一样的
    console.log(nVal, oVal)
  })

  // 监听对象变化(只要obj有所改变就会立即执行)
  watch(obj, (nVal, oVal) => {
    // 返回的结果nVal, oVal是一样的
    console.log('obj对象监听改变', nVal, oVal)
  })

  watch(() => obj, (nVal, oVal) => {
    console.log('obj对象监听改变（函数形式）', nVal, oVal)
  }, {deep: true})


  // 只有obj.count 发生改变后才会执行
  watch(() => obj.count, (nVal, oVal) => {
    console.log('obj对象属性count监听改变', nVal, oVal)
  })

  // 组合监听
  watch([() => obj, count], ([nValObj, oValObj], [nValCount, oValCount]) => {
    console.log('obj变化组合', nValObj, oValObj)
    console.log('count变化组合', nValCount, oValCount)
  }, {depp: true})
</script>