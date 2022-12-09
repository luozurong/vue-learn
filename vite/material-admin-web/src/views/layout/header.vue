<script setup lang="ts">
  import { User } from '@element-plus/icons-vue'
</script>
<template>
  <div class="header-box">
    <div class="header-user">
      <el-icon><User /></el-icon>
      <span class="header-username">罗祖榕</span>
    </div>
  </div>
</template>
<style scoped lang="scss">
.header-box{
  line-height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  .header-user{
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .header-username {
    margin-left: 5px;
  }
}
</style>