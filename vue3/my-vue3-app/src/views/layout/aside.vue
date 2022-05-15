<template>
  <div>aside</div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import { menuList } from '../../api/system/index'

const menuListApi = () => {
  menuList().then((res) => {
    console.log(res)
  })
}

onMounted(() => {
  menuListApi()
})
</script>
