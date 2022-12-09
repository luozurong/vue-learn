<script setup lang="ts">
  import { reactive, toRefs } from 'vue'
  
  import { Fold, Expand } from '@element-plus/icons-vue'
  import memuList from './menuList.vue'
  import tabs from './tabs.vue'
  import userInfo from './userInfo.vue'
  import menuJSON from '@/assets/menu.json'

  const menuData = reactive({
    isCollapse: false,
    menu: menuJSON,
    menuItem: menuJSON.menuInfo['用户管理']?.child || []
  })

  let a: string = '1'
  a = 1 + ''

  const { menu, menuItem, isCollapse } = toRefs(menuData)

  const changeTabs = (value: string) => {
    menuData.menuItem = menuData?.menu?.menuInfo[value]?.child || []
    console.log(menuData.menuItem)
  }

  const menuShowHandler = () => {
    menuData.isCollapse = !menuData.isCollapse
    console.log( menuData.isCollapse)
  }
</script>
<template>
  <div class="common-layout">
    <el-container class="layout-container">
      <el-aside class="aside">
        <memu-list :menuItem="menuData.menuItem" :isCollapse="isCollapse"></memu-list>
      </el-aside>
      <el-container>
        <el-header class="header">
          <div class="menu-show-flag" @click="menuShowHandler">
            <el-icon
              v-if="!isCollapse" 
              class="header-menu-flag" 
              color="#f7f8f9">
              <Expand />
            </el-icon>
            <el-icon
              v-if="isCollapse" 
              class="header-menu-flag" 
              color="#f7f8f9">
              <Fold />
            </el-icon>
          </div>
          <div class="header-wrap">
            <tabs class="header-wrap-tab" :data="menuData.menu.menuInfo" @changeTabs="changeTabs"/>
            <user-info class="header-wrap-userInfo"></user-info>
          </div>
        </el-header>
        <el-main class="main"><router-view></router-view></el-main>
        <el-footer class="footer">Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>
<style lang="scss" scoped>
.layout-container{
  display: flex;
}
.aside{
  background-color: #303133;
  height: 100vh;
  flex-shrink: 0;
  overflow-x: hidden;
  position: relative;
}
:deep(.el-aside) {
  width: inherit;
}
.header{
  background: #409eff;
  position: reactive;
  .header-wrap{
   position: reactive;
   .header-wrap-tab{
     margin-right: 100px;
   }
   .header-wrap-userInfo{
     position: absolute;
     right: 14px;
     top: 0;
   }
  }
}
:deep(.el-tabs__header){
  margin: 0px;
}
.menu-show-flag{
  position: absolute;
  top: 21px;
  margin-left: -20px;
  margin-right: 10px;
  display: flex;
}
</style>