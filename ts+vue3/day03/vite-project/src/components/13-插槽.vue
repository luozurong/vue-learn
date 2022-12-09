<template>
  <div >
   匿名插槽和具名插槽，插槽作用域
   <Child>
      <!-- <template v-slot:btn> -->
      <template #btn>
        <p>sds</p>
      </template>

      <!-- <template v-slot:link> -->
      <template #link="scope">
        <a href="">link {{scope.title}} {{scope.mynum}}</a>
      </template>

      <template v-slot:default>
        <p>seeeee</p>
      </template>
    </Child>
  </div>
</template>
<script setup lang="ts">
  import Child from './14-插槽child.vue'
</script>