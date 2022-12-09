<script setup lang="ts">
  import { ref, toRefs } from 'vue'
  import type { TabsPaneContext } from 'element-plus'

  const activeName = ref('first')

  const props = defineProps({
    data: Object
  })

  const $emit = defineEmits(['changeTabs'])

  const { data } = toRefs(props)

  const handleClick = (tab: TabsPaneContext, event: Event) => {
    $emit('changeTabs', tab.props.label)
  }
</script>
<template>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane v-for="(value, name) in data" :key="name" :label="name"></el-tab-pane>
  </el-tabs>
</template>
<style lang="scss" scoped>
:deep(.el-tabs__item){
  height: 60px;
  line-height: 60px;
  color: #fff;
  font-weight: bold;
}
:deep(.el-tabs__nav-wrap::after){
  width: 0px;
}
:deep(.is-active){
  background-color: rgba(0,0,0,0.2)
}
:deep(.el-tabs__nav-wrap){
  display: flex;
  align-items: center;
  .el-tabs__nav-next{
    font-size: 20px;
    color: #fff;
    display: flex;
    align-items: center;
  }
  .el-tabs__nav-prev{
    font-size: 20px;
    color: #fff;
    display: flex;
    align-items: center;
  }
}
.el-tabs__item:first{
  padding-left: none;
}
.el-tabs--top .el-tabs__item.is-top:nth-child(2){
  padding: 0 20px !important;
}
.el-tabs--top .el-tabs__item.is-top:last-child{
  padding: 0 20px !important;
}
</style>