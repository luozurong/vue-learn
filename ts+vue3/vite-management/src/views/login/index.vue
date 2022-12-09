<template>
  <div>
    <el-form ref="ruleFormRef"
      label-position="right"
      label-width="120px"
      :model="ruleForm"
      style="max-width: 460px"
      :rules="rules"
      >
      <el-form-item label="用户名" prop="username">
        <el-input v-model="ruleForm.username" autocomplete="off" placeholder="用户名"/>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm.password" type="password" autocomplete="off" placeholder="密码"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="loginFn">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup lang="ts">
  import {reactive, ref, toRefs} from 'vue'
  import API from '../../request/admin'
  import Cookie from 'js-cookie'
  import {useRouter} from 'vue-router'
  import {useStore} from 'vuex'

  let ruleFormRef = ref()
  let router = useRouter()
  let store = useStore()

  const state = reactive({
    ruleForm: {
      username: 'admin',
      password: '123456'
    }
  })
  const { ruleForm } = toRefs(state)

  const validateUsername = (rule: unknown, value: string | undefined, callback: (msg?: string)=> void) => {
    if (!value) {
      callback('用户名不能为空')
    } else {
      callback()
    }
  }
  const validatePsd = (rule: unknown, value: string | undefined, callback: (msg?: string)=> void) => {
    if (!value) {
      callback('密码不能为空')
    } else {
      callback()
    }
  }
  const rules = reactive({
    username: [
      { required: true, message: 'Please input Activity usename'},
      { validator: validateUsername, trigger: 'blur' }
    ],
    password: [
      { required: true, message: 'Please input Activity password' },
      { validator: validatePsd, trigger: 'blur' }
    ],
  })

  const loginFn = () => {
    console.log(ruleFormRef)
    ruleFormRef.value.validate().then(() => {
      console.log('then')
      loginApi()
    }).catch(() => {
      console.log('catch');
      
    })
  }

  const loginApi = () => {
    API.adminLoginApi({
      username: ruleForm.value.username,
      password: ruleForm.value.password
    }).then(res => {
      if (res.code === 200) {
        // 存储token
        Cookie.set('token', res.data.tokenHead + res.data.token, {expires: 7})
        adminLoginInfoApi()
      }
    })
  }

  const adminLoginInfoApi = () => {
    store.dispatch('getAdminInfo').then(res => {
      router.push('/')
    }).catch(() => {
      router.push('/')
    })
  }
</script>