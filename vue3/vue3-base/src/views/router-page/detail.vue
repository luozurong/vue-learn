<template>
  <div> detail的路由参数为 {{route.params.id}}</div>
</template>
<script setup>
  import {useRoute} from 'vue-router'

  const route = useRoute()

  route.params.id
</script>
