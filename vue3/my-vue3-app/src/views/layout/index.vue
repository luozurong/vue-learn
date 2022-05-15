<template>
  <el-container>
    <el-aside width="200px" class="aside">
      <asides></asides>
    </el-aside>
    <el-container>
      <el-header class="header">Header</el-header>
      <el-main class="main">Main</el-main>
    </el-container>
  </el-container>
</template>
<script setup lang="ts">
import asides from './aside.vue'

</script>
<style scoped>
.aside{
  background: #ccc;
  height: 100vh;
}
.header{
  background: red;
}
.main{
  background: #f8f9fa;
}
</style>
