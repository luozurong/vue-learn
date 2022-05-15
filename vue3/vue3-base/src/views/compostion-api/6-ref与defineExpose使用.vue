<template>
  <div>
    <defineExposeChild ref="exposeq"/>
    <button @click="modifyParent">父组件点击改变count值</button>
  </div>
</template>
<script setup>
  import {ref, onMounted} from 'vue'
  import defineExposeChild from './component/defineExposeChild.vue'
  // 注意名称不要用expose，被坑的死死的
  let exposeq = ref(null)
  
  const modifyParent = () => {
    console.log(exposeq.value.count)
    exposeq.value.modify()
  }
</script>