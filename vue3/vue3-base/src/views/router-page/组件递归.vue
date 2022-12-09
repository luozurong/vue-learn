<script setup>
  import { reactive,toRefs } from '@vue/reactivity'
  import Lists from './commpont/Lists.vue'
  const data = reactive({
    dataItem: [
      {value: 1, name: '高中课本', children: [{value: 2, name: '英语'}]},
      {value: 3, name: '大学课本', children: [{value: 4, name: '高数'}]}
    ]
  })
  const {dataItem} = toRefs(data)
</script>
<template>
  <div><Lists :data="dataItem"/></div>
</template>
