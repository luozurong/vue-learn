<script setup lang="ts">
  import {reactive, toRefs} from 'vue'
  import {updateUser, addUser} from '@api/system'

  const emits = defineEmits(['eidtSucess'])

  const state = reactive({
    form: {
      id: '',
      username: '',
      name: '',
      mobile: '',
      password: ''
    },
    dialogVisible: false,
    title: '新增'
  })
  const {form, dialogVisible, title} = toRefs(state)

  const getInitData = (data: any) => {
    state.dialogVisible = true
    state.title = data.id ? '编辑' : '新增'
    state.form =  {
      id: data.id || '',
      username: data.username || '',
      name: data.name || '',
      mobile: data.mobile || '',
      password: data.password || ''
    }
  }
  defineExpose({
    getInitData
  })

  const addRoleHandler = () => {
    addOrUpdateUser()
  }

  const addOrUpdateUser = () => {
    let params = {
      id: state.form.id,
      username: state.form.username || '',
      name: state.form.name || '',
      mobile: state.form.mobile || '',
      password: state.form.password || ''
    }
    if (!params.id) {
      addUser(params).then((res: any) => {
        console.log('成功添加')
        if (res.data.code === 200) {
          state.dialogVisible = false
          emits('eidtSucess')
        }
      })
    } else {
      updateUser(params).then((res: any) => {
        if (res.data.code === 200) {
          state.dialogVisible = false
          emits('eidtSucess')
        }
      })
    }
  }
</script>

<template>
  <el-dialog v-model="dialogVisible" :title="title">
    <el-form>
      <el-form-item label="用户名" label-width="150px">
        <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码" label-width="150px">
        <el-input v-model="form.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item label="用户姓名" label-width="150px">
        <el-input v-model="form.name" placeholder="请输入用户姓名"></el-input>
      </el-form-item>
      <el-form-item label="手机号" label-width="150px">
        <el-input v-model="form.mobile" placeholder="请输入手机号"></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="addRoleHandler">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>
