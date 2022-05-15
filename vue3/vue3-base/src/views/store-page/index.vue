<template>
  <div>
     <div>state值：{{count}}</div>
     <div>getter值: {{countGetter}}</div>
     <button @click="modify">更改count值</button>
     <button @click="modifyAsync">异步改变count值</button>
  </div>
</template>
<script setup>
  import {computed, reactive} from 'vue'
  import {useStore} from 'vuex'
  

  const store = useStore()
  const count = computed(() => store.state.count)
  const countGetter = computed(() => store.getters.countGetter)

  const modify = () => {
    store.commit('changeCount', count.value + 1)
  }

  const modifyAsync = () => {
    store.dispatch('countActions', count.value + 1)
  }
</script>