<template>
  <div>
    <div>{{num}}</div>
    <div>{{count}}</div>
    <button @click="num ++">add template</button>
    <button @click="hdClick">add</button>
  </div>
</template>
<script lang="ts">
import {defineComponent, ref, Ref} from 'vue'
export default defineComponent({
  setup() {
    let num = ref<number>(20)
    let count: Ref<number> = ref(10)

    const hdClick = () => {
      num.value ++
      count.value ++
      console.log(num.value)
    }
    return {
      num: num,
      count,
      hdClick
    }
  }
})
</script>