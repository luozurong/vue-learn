<script setup lang="ts">
  import { reactive } from 'vue'
  import { ElMessage } from 'element-plus'
  import { useRouter } from 'vue-router'
  import { User, Lock } from '@element-plus/icons-vue'

  import { login } from '../../api/system'

  interface LoginData {
    username: string,
    password: string
  }
  const form: LoginData = reactive({
    username: '',
    password: ''
  })

  const router = useRouter()
  
  const submit = () => {
    if (!form.username) {
      ElMessage.warning('请输入用户名')
      return false
    }
    if (!form.password) {
      ElMessage.warning('请输入密码')
      return false
    }

    let data = {
      username: form.username,
      password: form.password,
    }

    login(data).then(res => {
      console.log(res.data)
      if (res.data.code === 200 && res.data.data.token) {
        localStorage.setItem('token', res.data.data.token)
        router.push('/')
      } else {
        ElMessage.warning(res.data.msg)
      }
    }) 
  }
</script>
<template>
  <div class="login">
    <div class="login-box">
      <el-form>
        <el-form-item>
          <div class="login-title">素材管理系统</div>
        </el-form-item>

        <el-form-item>
          <el-input
            size="default"
            v-model="form.username"
            placeholder="用户名"
            :prefix-icon="User"
          />
        </el-form-item>

        <el-form-item>
          <el-input
            size="default"
            v-model="form.password"
            placeholder="密码"
            :prefix-icon="Lock"
          />
        </el-form-item>
        <el-form-item>
          <el-button @click="submit"
            class="login-btn" 
            size="default"
            type="primary">
            登 陆
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<style scoped>
.login{
  width: 100vw;
  height: 100vh;
  background-image: url('https://qn.kemean.cn/upload/202009/08/login_bg_2020-09-08.png');
  background-size: content;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.login-box{
  width: 320px;
  margin-right: 15%;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 5px;
  padding: 14px 20px;
  box-shadow: 0 0 8px #eeeeee;
}
.login-title{
  width: 100%;
  color: #707070;
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  display: block;
  margin-top: 15px;
  margin-bottom: 5px;
}
.login-btn{
  width: 100%;
}
</style>