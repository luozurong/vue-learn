<template>
  <div class="home">
    <div class="home-header">header</div>
    <div class="home-menu">
      <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
        :unique-opened="true"
        :router="true"
      >
        <el-sub-menu :index="menu.id + ''" v-for="menu in newMenus" :key="menu.id">
          <template #title>
            <span>{{menu.title}}</span>
          </template>
          <template v-for="submenu in menu?.children" :key="submenu.id" >
            <el-menu-item v-if="(submenu.hidden === 0)" :index="`/${menu.name}/${submenu.name}`" >{{submenu.title}}</el-menu-item>
          </template>
        </el-sub-menu>
      </el-menu>
    </div>
    <div class="home-content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { computed } from '@vue/reactivity';
import {} from 'vue'
  import { useStore } from 'vuex'

  interface MenusObj {
    id: number;
    parentId: number;
    createTime: string;
    title: string;
    level: number;
    sort: number;
    name: string;
    icon: string;
    hidden: number,
    children?: MenusObj[]
  }

  interface newMenus {
    [key: number]: MenusObj
  }

  const store = useStore()
  const newMenus = computed<newMenus>(() => store.getters.getNewMenus)
  console.log(newMenus)

</script>
<style scoped lang="scss">
.home{
  position: relative;
  height: 100%;
  .home-header{
    width: 100%;
    height: 60px;
    background-color: #eee;
  }
  .home-menu{
    width: 200px;
    position: absolute;
    top: 60px;
    height: 100%;
    background-color: #aaa;
    z-index: 1;
  }
  .home-content{
    position: absolute;
    top: 60px;
    height: 100%;
    width: 100%;
    background-color: #f0f0fe;
    box-sizing: border-box;
    padding-left: 200px;
  }
}
</style>