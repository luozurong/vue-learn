<template>
  <div>
    <span>{{obj.count}}</span>
    <button @click="modifyCount">改变count值</button>
  </div>
</template>
<script setup>
  import {reactive} from 'vue'
  const obj = reactive({
    count: 0
  })

  const modifyCount = () => {
    obj.count = Math.ceil(Math.random() * 100)
  }

</script>