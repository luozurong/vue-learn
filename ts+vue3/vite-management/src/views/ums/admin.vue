<template>
  <div>
    <div><el-button type="primary">添加</el-button></div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="编号" width="100" />
      <el-table-column prop="username" label="账号" width="180" />
      <el-table-column prop="nickName" label="姓名" width="180" />
      <el-table-column prop="email" label="邮箱" width="180" />
      <el-table-column prop="createTime" label="添加时间" width="180">
        <template v-slot="scope">
          <span>{{formatDate(scope.row.createTime)}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="loginTime" label="最后登录" width="180">
        <template v-slot="scope">
          <span>{{formatDate(scope.row.loginTime)}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="status" label="是否启用" width="180">
        <template v-slot="scope">
          <el-switch :active-value="1" :inactive-value="0" v-model="scope.row.status"></el-switch>
        </template>
      </el-table-column>
      <el-table-column prop="date" label="操作" width="180">
        <template v-slot="scope">
          <el-button type="text">分配角色</el-button>
          <el-button type="text" @click="editAdmin(scope.row)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>

    <editAdminVue :form="rowData" :visible="visible" @close="close" @modifyEdit="modifyEdit"/>
  </div>
</template>
<script setup lang="ts">
  import { reactive, toRefs } from 'vue'
  import { adminList } from '../../request/api'
  import editAdminVue from './compontents/editAdmin.vue';

  const state = reactive<{
    tableData: {}[],
    visible: boolean,
    rowData: AdminObjItf
  }>({
    tableData: [],
    visible: false,
    rowData: {}
  })
  const { tableData,  visible, rowData} = toRefs(state)

  // 获取列表数据
  adminList({
    keyword: '',
    pageSize: 10,
    pageNum: 1
  }).then(res => {
    if (res.code === 200) {
      console.log(res)
      tableData.value = res.data.list
    }
  })

  // 时间过滤
  const formatDate = (time: string | undefined) => {
    if (!time) return '-'
    const data = new Date(time)
    let year = addZero(data.getFullYear())
    let month = addZero(data.getMonth() + 1)
    let day = addZero(data.getDate())
    let hour = addZero(data.getHours())
    let min = addZero(data.getMinutes())
    let sec =addZero(data.getSeconds())
    return `${year}-${month}-${day} ${hour}:${min}:${sec}`
  }
  const addZero = (num: number) => {
    return num > 9 ? num : '0' + num
  }

  // 点击编辑按钮
  const editAdmin = (row: {}) => {
    visible.value = true
    rowData.value = row
  }

  const close = () => {
    visible.value = false
  }

  const modifyEdit = () => {
    visible.value = false
  }

</script>