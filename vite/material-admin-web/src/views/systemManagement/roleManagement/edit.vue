<script setup lang="ts">
  import { reactive, toRefs, defineEmits, watch, PropType } from 'vue'
  import { addRole, updateRole } from '@api/system'
  import { ElMessage } from 'element-plus'

  interface Rows {
    id: number,
    role_name: string
  }
  const emits = defineEmits(['addSuccess'])
  const propsData = defineProps({
    row: {
      type: Object as PropType<Rows>,
      default: () => {}
    }
  })

  const state = reactive({
    form: {
      roleName: ''
    },
    title: '编辑',
    dialogVisible: false
  })
  const {form, dialogVisible, title} = toRefs(state)

  watch(() => propsData.row?.role_name, (value) => {
    (state.form as any).roleName = value
  })
  
  const changeDialogVisible = () => {
    state.dialogVisible = !state.dialogVisible
  }

  const addRoleHandler = () => {
    if (!state.form.roleName) {
      ElMessage({
        message: '请输入角色名称',
        type: 'warning',
      })
      return
    }
    let params: {
      roleName: string,
      id?: number
    } = {
      roleName: state.form.roleName
    }
    if (propsData.row?.id) {
      params.id = propsData.row.id
      // 修改角色
      updateRole(params).then((res:any) => {
        if (res.data.code === 200) {
          ElMessage({
            message: '修改成功',
            type: 'success',
          })
          state.dialogVisible = false
          emits('addSuccess')
        }
      })
    } else {
      // 新增角色
      addRole(params).then((res:any) => {
        if (res.data.code === 200) {
          ElMessage({
            message: '添加成功',
            type: 'success',
          })
          state.dialogVisible = false
          emits('addSuccess')
        }
      })
    } 
  }

  defineExpose({
    changeDialogVisible
  })
</script>

<template>
  <el-dialog v-model="dialogVisible"
    :title="title">
    <el-form>
      <el-form-item label="角色名称">
        <el-input v-model="form.roleName"></el-input>
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