<template>
  <div class="content-box">
    <el-form class="form-box" inline :model="form">
      <el-form-item lable="角色名称">
        <el-input v-model="form.queryName" placeholder="请输入角色名称"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">查询</el-button>
        <el-button type="primary">重置</el-button>
        <el-button type="primary" @click="editHandler">新增</el-button>
      </el-form-item>
    </el-form>

    <div class="table-box">
      <el-table :data="tableData">
        <el-table-column align="center" prop="id" label="id"></el-table-column>
        <el-table-column align="center" prop="role_name" label="角色名称"></el-table-column>
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

    <edit ref="editRef" @addSuccess="addSuccess" :row="row"></edit>
  </div>
</template>
<script setup lang="ts">
  import { ref, reactive, toRefs, onMounted } from 'vue'
  import { ElMessageBox } from 'element-plus'
  import { getRole, deleteRole } from '@api/system'
  import edit from './edit.vue'

  const state = reactive({
    form: {
      queryName: ''
    },
    tableData: [],
    pageNum: 1,
    pageSize: 10,
    total: 0,
    row: ''
  })
  const editRef = ref(null)
  const { form, tableData, pageNum, pageSize, total, row} = toRefs(state)

  onMounted(() => {
    getRoleData()
  })

  // 获取列表数据
  const getRoleData = () => {
    let params = {
      queryName: state.form.queryName
    }
    getRole(params).then((res: any) => {
      if (res.data.code === 200) {
        state.tableData = res.data.data.list
        state.total = res.data.data.total
      }
    })
  }
  
  // 编辑
  const editHandler = (row: any) => {
    (editRef.value as any).changeDialogVisible()
    state.row = row
  }

  // 添加角色成功回调
  const addSuccess = () => {
    getRoleData()
  }

  // 删除角色
  const deleteHandler = (row: Object) => {
    ElMessageBox.confirm('是否删除该角色?', '提示', {
      distinguishCancelAndClose: true,
      confirmButtonText: '确定',
      cancelButtonText: '取消',
    }).then(() => {
      console.log('取消')
      deleteRoleApi(row)
    })
  }
  // 伤处角色接口
  const deleteRoleApi = (row: Object) => {
    let params = {
      id: (row as any).id
    }
    deleteRole(params).then((res: any) => {
      if (res.data.code === 200) {
        getRoleData()
      }
    })
  }
  // 改变条数
  const handleSizeChange = (value: number) => {
    state.pageSize = value
    getRoleData()
  }
  // 当前页面
  const handleCurrentChange = (value: number) => {
    state.pageNum = value
    getRoleData()
  }
</script>