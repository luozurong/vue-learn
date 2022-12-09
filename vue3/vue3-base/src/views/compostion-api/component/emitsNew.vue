<script setup>
  import { toRefs } from "@vue/reactivity"
  import { watch } from "@vue/runtime-core"
  const $emit = defineEmits(['numChange'])

  const props = defineProps({
    count: String
  })
  const {count} = toRefs(props)

  watch(count, () => {
    $emit('numChange', count)
  })
</script>
<template>
  <div>emit的新使用3--{{count}}</div>
</template>
