<template>
  <div>
      <!-- 通过ref获取元素 -->
      <p ref="op">这是p标签</p>
      <button @click="hdClick">num++</button>
  </div>
</template>
<script lang="ts">
import {defineComponent, nextTick, onMounted, ref} from 'vue'
export default defineComponent({
  setup() {
    let op =  ref()
    console.log(op); // undefined
    
    onMounted(() => {
      console.log(op)
    })

    nextTick(() => { // 下一个dom更新的时候执行
      console.log(op)
      
    })

    const hdClick = () => {
      console.log(op.value)
    }
    
    return {
      op,
      hdClick
    }
  }
})
</script>