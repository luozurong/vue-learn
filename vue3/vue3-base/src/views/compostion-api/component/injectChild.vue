<template>
  <div>inject{{provideDataRef.count}}</div>
</template>
<script setup>
  import {inject, toRefs} from 'vue'
  const provideData = inject('provideData')
  let provideDataRef = toRefs(provideData)
  provideDataRef.modifyCount.value()
</script>