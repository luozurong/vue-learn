<template>
  <div>
    <div>直接引用用户id:{{$store.state.userInfo.userInfo.id}}</div>
    <div>用户id: {{userInfo.id}}</div>
    <button @click="modify">修改用户id</button>
    <button @click="modifyAsync">异步修改用户id</button>
  </div>
</template>
<script setup>
  import { computed, reactive } from 'vue'
  import { useStore } from 'vuex'

  const store = useStore()

  const userInfo = reactive(computed(() => store.state.userInfo.userInfo))

  const modify = () => {
    console.log(userInfo)
    store.commit('changeUserInfo', {
      id: userInfo.value.id + Math.ceil((Math.random() * 10))
    })
  }


  const modifyAsync = () => {
    store.dispatch('userInfoAction', {
      id: userInfo.value.id + Math.ceil((Math.random() * 10))
    })
  }
</script>