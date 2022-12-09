<script name="subMenu" lang="ts" setup>
  import { reactive, toRefs } from 'vue'
  import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
    Grid
  } from '@element-plus/icons-vue'
  const props = defineProps({
    menuItem: Array
  })
  const propsData = reactive(props)
  const { menuItem } = toRefs(propsData)
</script>
<template>
  <template v-for="item in menuItem">
    <el-sub-menu :index="item.objId + ''" v-if="item.child" :key="item.objId">
      <template #title>
        <el-icon><Location /></el-icon>
        <span>{{item.title}}</span>
      </template>
      <sub-menu :menuItem="item.child"></sub-menu>
    </el-sub-menu>
    <el-menu-item v-else :key="item.objId" :index="item.objId + ''">
       <el-icon><Location /></el-icon>
      <template #title>
        <span>{{item.title}}</span>
      </template>
    </el-menu-item>
  </template>
</template>
<style lang="scss" scoped>
.el-menu-item{
  color: #f7f8f9 !important;
}
:deep(.el-sub-menu__title){
  color: #f7f8f9 !important;
}
.el-menu-item:hover{
  background-color: #303133 !important;
}
:deep(.el-sub-menu__title:hover){
  background-color: #303133 !important;
}
</style>