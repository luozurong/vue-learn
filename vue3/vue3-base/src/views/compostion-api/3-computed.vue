<template>
  <div>
    <span>{{count}}</span>
    <div>{{countedComputed}}</div>
    <div>{{countedComputedParams(10)}}</div>
    <div>{{countObj}}</div>
    <ul>
      <li v-for="item in obj.list" :key="item">{{countedComputedParams(item)}}</li>
    </ul>
    <button @click="modifyCount">改变counted的值</button>
  </div>
</template>
<script setup>
  import {computed, ref, reactive} from 'vue'

  let count = ref(0)
  let obj = reactive({
    num: 0,
    list: [1, 3, 5]
  })
  // computed基本使用
  let countedComputed = computed(()=> {
    console.log(count.value + 1)
    return count.value + 1
  })

  // computed 传参使用
  let countedComputedParams = computed(() => {
    return(val) => {
      console.log(count.value, val, count.value * val)
      return count.value * val
    }
  })

  // computed get set使用
  let countObj = computed({
    get: () => obj.num + 1,
    set: val => {
      console.log(val)
    }
  })

  const modifyCount = () => {
    count.value = Math.ceil(Math.random() * 10)
    obj.num ++
    countObj.value += 1
  }
</script>