<template>
  <div>
    <div>登录页</div>
    <form>
      用户名<input v-model="userData.username"/>
      密码<input v-model="userData.password"/>
      <button @click="submit">登录</button>
    </form>
  </div>
</template>
<script setup>
import {reactive}  from 'vue'
import {useRouter} from 'vue-router'

const router = useRouter()

const userData = reactive({
  username: '',
  password: ''
})

const submit = () => {
  if (!userData.username) {
    alert('请题写用户名')
    return
  }
  if (!userData.password) {
    alert('请题写用户密码')
    return
  }

  localStorage.setItem('token', Math.random())

  router.push('/')
}
</script>