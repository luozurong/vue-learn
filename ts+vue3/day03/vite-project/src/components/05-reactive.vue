<template>
  <div>
      <p>{{obj.num}}</p>
      <button @click="hdClick">num++</button>
  </div>
</template>
<script lang="ts">
import {defineComponent, reactive} from 'vue'
export default defineComponent({
  setup() {
    let obj =  reactive({
      num: 20
    })

    const hdClick = () => {
      obj.num ++
    }
    console.log(obj)
    return {
      obj,
      hdClick
    }
  }
})
</script>