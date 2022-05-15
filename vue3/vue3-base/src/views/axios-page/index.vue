<template>
  <div>axiosPage</div>
</template>
<script setup>
import { onMounted } from 'vue'
import { login } from '../../api/login'
import axios from 'axios'

const loginAPi = () => {
  login({}).then(res => {
    console.log(res)
  })
}

onMounted(() => {
  loginAPi()
})
</script>
