<template>
  <div >child
    {{num}}
    <button @click="hdHander">emit</button>
  </div>
</template>
<script setup lang="ts">
  const props = defineProps({
    num: {
      type: Number,
      default: 0
    }
  })

  const emit = defineEmits<{
    (event: 'fn', data: number): void
  }>()

  const hdHander = () => {
    emit('fn', props.num)
  }


</script>