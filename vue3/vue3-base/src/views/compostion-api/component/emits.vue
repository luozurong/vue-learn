<template>
  <div>
    <p>emit的使用1--{{count}}</p>
    <p>emit的使用2--{{msg}}</p>
  </div>
</template>
<script setup>
  import {getCurrentInstance, defineProps, defineEmits, toRefs, toRef, watch} from 'vue'

  const instance = getCurrentInstance()
  console.log(instance)

  const props = defineProps({
    count: {
      type: Number,
      default: 1
    }
  })

  // 注意toRef与toRefs的区别
  let msg = toRef(props, 'count')
  const {count} = toRefs(props)

  const emit = defineEmits()
  watch(count, () => {
    if (count.value > 20) {
      emit('numChange', {count})
    }
  })
  

</script>