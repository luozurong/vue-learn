<template>
  <div>
      <p>{{obj.num}}</p>
      <button @click="hdClick">num++</button>
  </div>
</template>
<script lang="ts">
import {defineComponent, ref} from 'vue'
export default defineComponent({
  setup() {
    let obj =  ref({
      num: 20
    })

    const hdClick = () => {
      obj.value.num ++
    }
    console.log(obj)
    return {
      obj,
      hdClick
    }
  }
})
</script>