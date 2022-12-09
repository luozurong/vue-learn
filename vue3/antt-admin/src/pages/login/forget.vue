<script setup lang="ts">
  import { reactive, defineExpose, toRefs } from 'vue'
  import { sendCerification } from '@/api/system'
  import { ElMessage } from 'element-plus'

  interface IDialogBox {
    dialogTableVisible: boolean,
    form: Object,
    disabled: boolean,
    seconds: number,
    secondsFlag: any,
    formLabelWidth: number
  }
  const dialogbox: IDialogBox = reactive({
    dialogTableVisible: false,
    form: {
      phone: '',
      code: '',
      password: '',
      confirmPassword: ''
    },
    disabled: false,
    seconds: 59,
    secondsFlag: null,
    formLabelWidth: 80
  })

  const {dialogTableVisible, form, disabled, seconds, formLabelWidth} = toRefs(dialogbox)

  const getCode = () => {
    let reg = new RegExp('^1\\d{10}$');
    if (!reg.test(dialogbox.form.phone)) {
        ElMessage.warning('手机号码格式不正确');
        return false;
    }
    sendCerificationApi()
  }

  const sendCerificationApi = () => {
    if (dialogbox.disabled) return false

    let data = {
      phone: dialogbox.form.phone,
      type: 3102,
      projectToken: import.meta.env.VITE_CODE_PROJECT_TOKEN
    }

    sendCerification(data).then(res => {
      if (res.code !== '0000') {
        dialogbox.disabled = true
        dialogbox.secondsFlag = setInterval(()=> {
          dialogbox.seconds -= 1
          if (dialogbox.seconds === 0) {
            dialogbox.disabled = false
            clearInterval(dialogbox.secondsFlag)
          }
        }, 1000)
        ElMessage.error(res.info)
      }
    })
  }

  const submit = () => {
    dialogbox.dialogTableVisible = false
  }

  const showDialog = () => {
    dialogbox.dialogTableVisible = true
  }

  defineExpose({
    showDialog
  })
  
</script>
<template>
  <el-dialog v-model="dialogTableVisible" title="找回密码" width="500px">
    <el-form :model="form">
      <el-form-item label="手机号码" :label-width="formLabelWidth">
        <el-input v-model="form.phone" autocomplete="off" />
      </el-form-item>
      <el-form-item label="验证码" :label-width="formLabelWidth">
        <el-row :gutter="5">
          <el-col :span="16"><el-input v-model="form.code" autocomplete="off"/></el-col>
          <el-col :span="7">
            <el-button @click="getCode" :disabled="disabled" type="primary">
              <span v-if="disabled">{{seconds}}后重新</span>
              <span>获取验证码</span>
            </el-button>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item label="新密码" :label-width="formLabelWidth">
        <el-input v-model="form.password" autocomplete="off" />
      </el-form-item>
      <el-form-item label="确认密码" :label-width="formLabelWidth">
        <el-input v-model="form.confirmPassword" autocomplete="off" />
      </el-form-item>
    </el-form>

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogbox.dialogTableVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit">确 认</el-button>
      </span>
    </template>
  </el-dialog>
</template>
<style scoped>

</style>