<template>
  <div >
    子组件的值{{num}}
    <input type="text" v-model="info.a" @input="changeInfo">
   <button @click="hdClick">添加</button>
  </div>
</template>
<script setup lang="ts">
  const props = defineProps({
    num: {
      type: Number,
      default: 20,
    },
    info: {
      type: Object,
      default: () => {}
    }
  })
  let n = props.num
  let info = props.info

  const emit = defineEmits<{
    // update： 固定写法, 后面的变量是父组件v-model后面的这个变量
    (event: 'update:num', n: number): void,
    (event: 'update:info', data: any): void
  }>()
  const hdClick = () => {
    console.log('点击事件')
    n++
    emit('update:num', n)
  }
  
  const changeInfo = () => {
    console.log('修改')
    emit('update:info', info)
  }
</script>