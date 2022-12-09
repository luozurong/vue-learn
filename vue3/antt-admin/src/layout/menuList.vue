<script lang="ts" setup>
  import { reactive, toRefs, watch } from 'vue'
  import subMenu from './subMenu.vue'
  interface IProps {
    menuItem: Array<any>,
    isCollapse: Boolean
  }

  const propsData = defineProps<IProps>()
  const props = reactive(propsData)
  const {menuItem, isCollapse} = toRefs(props)

  watch(() => props.isCollapse, (nVal) => {
    console.log(nVal)
  })

  const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
  const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
</script>
<template>
  <div class="logo"></div>
  <div style="height: 60px;"></div>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
  >
    <sub-menu :menuItem="menuItem"></sub-menu>
  </el-menu>
</template>

<style scoped>
.logo{
  min-width: 200px;
  height: 60px;
  background-color: #5f5f5f;
  background-image: url('https://qn.kemean.cn/citydemo/202106/25/1624621714659jfq5c5pf.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 2px 2px;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 1;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
:deep(.el-menu){
  border-right: none;
  background-color: #303133 !important;
}
.el-menu-vertical-demo{
  height: calc(100vh - 60px) !important;
  overflow-y: auto;
  background-color: #303133 !important;
}
</style>
