<script setup lang="ts">
  import { onMounted, reactive, toRefs, ref } from 'vue'
  import { getUserList, deletUser } from '@api/system'
  import { ElMessageBox,ElMessage } from 'element-plus'

  import eidt from './edit.vue'
  const state = reactive({
    form: {
      userName: '',
      mobile: ''
    },
    tableData: [],
    pageSize: 10,
    pageNum: 1,
    total: 0,
  })
  const editRef = ref(null)
  const { form, tableData, pageSize, pageNum, total} = toRefs(state)

  onMounted(() => {
    getDataList()
  })

  const reset = () => {
    state.form.userName = '',
    state.form.mobile = ''
    state.pageNum = 1
    state.pageSize = 10
    getDataList()
  }

  const getDataList = () => {
    let params = {
      userName: state.form.userName,
      mobile: state.form.mobile,
      pageSize: state.pageSize,
      pageNum: state.pageNum
    }
    getUserList(params).then((res: any) => {
      console.log(res)
      if (res.data.code === 200) {
        state.tableData = res.data.data.list || []
        state.total = res.data.data.total || 0
      }
    })
  }

  const editHandler = (data: any) => {
    (editRef.value as any).getInitData(data)
  }

  const deleteHandler = (data: any) => {
    ElMessageBox.confirm('是否删除该角色?', '提示', {
      distinguishCancelAndClose: true,
      confirmButtonText: '确定',
      cancelButtonText: '取消',
    }).then(() => {
      console.log('取消')
      let params = {
        id: data.id
      }
      deletUser(params).then((res: any) => {
        if (res.data.code === 200) {
          ElMessage({
            message: '删除成功',
            type: 'success',
          })
          getDataList()
        } else {
          ElMessage({
            message: '删除失败',
            type: 'error',
          })
        }
      })
    })
    
  }

  const add = () => {
    (editRef.value as any).getInitData({})
  }

  // 改变条数
  const handleSizeChange = (value: number) => {
    state.pageSize = value
    getDataList()
  }
  // 当前页面
  const handleCurrentChange = (value: number) => {
    state.pageNum = value
    getDataList()
  }

  const eidtSucess = () => {
    getDataList()
  }
</script>

<template>
  <div class="content-box">
    <el-form class="form-box" inline>
      <el-form-item label="用户名：">
        <el-input v-model="form.userName" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="用户手机号：">
        <el-input maxlength="11" type="number" v-model="form.mobile" placeholder="请输入手机号码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="getDataList">确定</el-button>
        <el-button type="primary" @click="reset">重置</el-button>
        <el-button type="primary" @click="add">新增</el-button>
      </el-form-item>
    </el-form>

    <div class="table-box">
      <el-table :data="tableData">
        <el-table-column align="center" prop="id" label="id"></el-table-column>
        <el-table-column align="center" prop="username" label="用户名"></el-table-column>
        <el-table-column align="center" prop="name" label="用户姓名"></el-table-column>
        <el-table-column align="center" prop="mobile" label="用户手机"></el-table-column>
        <el-table-column align="center" prop="create_time" label="创建时间"></el-table-column>
        <el-table-column align="center" label="操作">
          <template #default="scope">
            <div>
              <el-button type="primary" link @click="editHandler(scope.row)">编辑</el-button>
              <el-button type="danger" link danger @click="deleteHandler(scope.row)">删除</el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div>
      <el-pagination background
        class="pagination-box"
        :currentPage="pageNum"
        :page-size="pageSize"
        :page-sizes="[10, 20, 50, 100]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      ></el-pagination>
    </div>

    <eidt ref="editRef" @eidtSucess="eidtSucess"/>
  </div>
</template>