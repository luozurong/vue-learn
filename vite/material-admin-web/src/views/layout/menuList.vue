<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    background-color="#222"
    text-color="#f8f9fa"
    :router="true"
    @open="handleOpen"
    @close="handleClose"
  >
    <template v-for="item in memuList" :key="item.id">
      <el-menu-item :index="item.url">
        <el-icon><IconMenu /></el-icon>
        <template #title>{{item.menu_name}}</template>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script lang="ts" setup>
  import { reactive, toRefs, onMounted } from 'vue'
  import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
  } from '@element-plus/icons-vue'
  import { getMenuList } from '../../api/system'

  interface IProps {
    isCollapse: false
  }

  const propsData = defineProps<IProps>()
  const props = reactive(propsData)
  const { isCollapse } = toRefs(props)

  const menuListState = reactive({
    memuList: []
  })
  const { memuList } = toRefs(menuListState)


  const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
  const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }

  const getMenuListApi = () => {
    getMenuList().then(res => {
      console.log(res)
      if (res.data.code === 200) {
        console.log(res.data)
        menuListState.memuList = res.data.data
      }
    })
  }

  onMounted(() => {
    getMenuListApi()
  })
</script>

<style>
.el-menu{
  border-right: none;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
