<template>
  <div >
    <slot></slot>
    <slot name="btn"></slot>
    <slot name="link" title="哈哈哈" :mynum="num"></slot>
  </div>
</template>
<script setup lang="ts">
  import {ref} from 'vue'
  let num = ref(30)
</script>