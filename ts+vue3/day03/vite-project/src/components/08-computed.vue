<template>
  <!-- 计算属性 -->
  <p>{{dbNum}}</p>
  <p>{{dbNum2}}</p>
  <p>{{checkAll}}</p>
  <button @click="(objRet.num ++)">add 2</button>
  <button @click="computedHandler">check</button>
</template>
<script setup lang="ts">
  import { computed, reactive } from '@vue/reactivity';
import { ref } from 'vue';
  let num = ref(10)
  let dbNum = computed(() => {
    return num.value * 2
  })

  let objRet = reactive({
    num: 30
  })
  let dbNum2 = computed(() => {
    return objRet.num * 2
  })

  let checkAll = computed({
    get () {
      return objRet.num + 1
    },
    set (value) {
      objRet.num = value - 10
    }
  })

  const computedHandler = () => {
    checkAll.value = 100
  }
</script>