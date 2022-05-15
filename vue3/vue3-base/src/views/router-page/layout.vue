<template>
  <div>
    <router-link to="/routerPage">home</router-link>
    <router-link to="/routerPage/my">my</router-link>
    <router-view></router-view>
  </div>
</template>
<script setup>

</script>
<style scoped>
.router-link-active{
  margin-right: 20px;
}
.router-link-exact-active{
  color: red;
}
</style>