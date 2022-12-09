<script setup lang="ts">
  import {reactive, toRefs} from 'vue'
  import { ElMessage } from 'element-plus'
  import { useRouter } from 'vue-router'
  import forget from './forget.vue'
  import { User, Lock, Key } from '@element-plus/icons-vue'
  import { login } from '@/api/system'
  import md5 from 'js-md5'
  import Cookies from 'js-cookie'

  Cookies.set('SESSION', 'MDc0NDAyYmItYTMzMi00Y2ExLWE3NjQtMzNjM2JhY2I3MGU2')

  const getCodeImgUrl = () => {
    return `${import.meta.env.VITE_API_BASE}/cityAdmin/admin/open/img_code?time=${(new Date()).getTime()}`
  }

  const form = reactive({
    dialogboxRef: null,
    userName: '',
    password: '',
    code: '',
    url: getCodeImgUrl()
  })

  const router = useRouter()

  const { dialogboxRef } = toRefs(form)
  
  const changeVerificationCode = () => {
    form.url = getCodeImgUrl()
  }

  const showForgetDialog = () => {
    dialogboxRef.value.showDialog()
  }

  const submit = () => {
    if (!form.userName) {
      ElMessage.warning('请输入用户名')
      return false
    }
    if (!form.password) {
      ElMessage.warning('请输入密码')
      return false
    }
    if (!form.code) {
      ElMessage.warning('请输入验证码')
      return false
    }

    let data = {
      loginNo: form.userName,
      loginPwd: md5(form.password),
      code: form.code,
      projectToken: import.meta.env.VITE_CODE_PROJECT_TOKEN
    }
    
    login(data).then(res => {
      if (res.code !== '0000') {
        router.replace('/')
        ElMessage.error(res.info)
      }
    })
  }
</script>
<template>
  <div class="login">
    <div class="login-box">
      <el-form>
        <el-form-item>
          <div class="login-title">蚂蚁闪电送管理系统</div>
        </el-form-item>

        <el-form-item>
          <el-input
            v-model="form.userName"
            placeholder="用户名"
            :prefix-icon="User"
          />
        </el-form-item>

        <el-form-item>
          <el-input
            v-model="form.password"
            placeholder="密码"
            :prefix-icon="Lock"
          />
        </el-form-item>

        <el-form-item>
          <el-input
            class="login-code"
            v-model="form.code"
            placeholder="验证码"
            :prefix-icon="Key"
          />
          <el-image @click="changeVerificationCode" class="login-img" :src="form.url" fit="contain" />
        </el-form-item>

        <el-form-item>
          <span @click="showForgetDialog" class="login-forget">忘记密码?</span>
        </el-form-item>

        <el-form-item>
          <el-button @click="submit" class="login-btn" type="primary">登 陆</el-button>
        </el-form-item>
      </el-form>
    </div>

    <forget ref="dialogboxRef"/>
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
.login-code{
  width: 60%;
}
.login-img{
  width: 40%;
  box-sizing: border-box;
  padding-left: 5px;
  height: 42px;
}
.login-forget{
  margin-top: -18px;
  font-size: 12px;
  cursor: pointer;
}
.login-btn{
  width: 100%;
}
</style>
