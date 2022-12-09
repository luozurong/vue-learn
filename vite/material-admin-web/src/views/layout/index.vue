<script setup lang="ts">
  import menuList from './menuList.vue'
  import headerMsg from './header.vue'
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside class="aside" width="200">
        <menu-list :isCollapse="false" ></menu-list>
      </el-aside>
      <el-container>
        <el-header class="header">
          <header-msg></header-msg>
        </el-header>
        <el-main class="main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style scoped lang="scss">
.aside {
  background-color: #222;
  height: 100vh;
}
.header {
  background-color: #f8f9fa;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.main {
  background-color: #f8f9fa;
}
</style>