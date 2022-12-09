<script setup lang="ts">
  import { ArrowDownBold, ArrowUpBold } from '@element-plus/icons-vue'
  import { ref } from 'vue'

  const visible = ref(false)
</script>
<template>
  <div class="header-info" @mouseenter="visible = true" @mouseleave="visible = false">
    <span>罗祖榕</span>
    <el-icon v-if="!visible"><ArrowDownBold /></el-icon>
    <el-icon v-if="visible"><ArrowUpBold /></el-icon>
    <div class="header-info-fixed" v-if="visible">
      <div>修改信息</div>
      <div>退出登录</div>
    </div>
  </div>
</template>
<style scoped lang="scss">
  .header-info{
    line-height: 60px;
    display: flex;
    align-items: center;
    color: #fff;
    cursor: pointer;
    font-weight: bold;
    font-size: 14px;
    position: relative;
    span{
      margin-right: 5px;
    }
    .header-info-fixed{
      position: absolute;
      top: 50px;
      right: -5px;
      z-index: 1;
      color: #333;
      background: #fff;
      line-height: 40px;
      width: 120px;
      border-radius: 8px;
      box-shadow: 0 0 3px #eee;
      div{
        border-bottom: 1px solid #eee;
        &:last-child{
          border: none;
        }
      }
    }
  }
</style>