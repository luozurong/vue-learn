<script setup name="Lists">
  import { toRefs } from "@vue/reactivity"
  const props = defineProps({
    data: Array
  })
  const {data} = toRefs(props)
  /**
   * 组件递归
   * 1.script name名称命名与组件名称一样
   * 2.组件内部直接引用
   */
</script>

<template>
  <div style="margin-left: 20px;">
    <div v-for="item in data" :key="item.value">
      <span>{{item.value}}级 - {{item.name}}</span>
      <div v-if="item.children && item.children.length > 0">
        <Lists :data="item.children"/>
      </div>
    </div>
  </div>
</template>