<script lang="ts" setup>
import { onMounted, toRefs, reactive, ref } from 'vue'
import { Plus,Edit, Delete } from '@element-plus/icons-vue'
import { getMenuList, addMenuList, modifyMenuList, deleteMenuList} from '../../../api/system'

interface Tree {
  id: number | null,
  menu_name: string | null,
  icon: string | null,
  menu_type: number | null,
  order_num: number | null,
  parent_id: number | null,
  remark: string | null,
  url: string | null
}

// 菜单树形state
const treeState = reactive({
  treeData: [],
  treeProps: {
    label: 'menu_name',
    children: 'children',
  },
  treeCheckId: null
})
const {treeData, treeProps} = toRefs(treeState)

// 获取菜单列表数据
const loadNodeApi = () => {
  getMenuList().then(res => {
    console.log(res)
    if (res.data.code === 200) {
      treeState.treeData = res.data.data
    }
  })
}

//获取某个菜单数据
const handleCheckChange = ( data: Tree, checked: boolean, indeterminate: boolean ) => {
  (treeState as any).treeCheckId= checked ? data.id : null
  formState.id = data.id
  formState.parent_id = data.parent_id
  formState.menu_name = data.menu_name
  formState.menu_type = data.menu_type
  formState.url = data.url
  formState.icon = data.icon
  formState.order_num = data.order_num
  formState.remark = data.remark
  editMenu()
}

// 新增菜单
const addMenu = () => {
  formState.id = null
  formState.parent_id = null
  formState.menu_name = null
  formState.menu_type = null
  formState.url = null
  formState.icon = null
  formState.order_num = null
  formState.remark = null
  editMenu(false)
}

onMounted(() => {
  loadNodeApi()
})

const labelPosition = ref('right')
const isEdit = ref(true)
const formState: Tree = reactive({
  id: null,
  parent_id: null,
  menu_name: null,
  menu_type: null,
  url: null,
  icon: null,
  order_num: null,
  remark: null,
})

const editMenu = (flag = true) => {
  isEdit.value = flag
}

// 提交
const submit = () => {
  let params = {
    id: formState.id,
    parent_id: formState.parent_id,
    menu_name: formState.menu_name,
    menu_type: formState.menu_type,
    url: formState.url,
    order_num: formState.order_num,
    remark: formState.remark,
  }

  if (!params.id) {
    addMenuList(params).then(res => {
      if (res.data.code === 200) {
        editMenu()
        loadNodeApi()
      }
    })
  } else {
    modifyMenuList(params).then(res => {
      if (res.data.code === 200) {
        editMenu()
        loadNodeApi()
      }
    })
  }
}

// 删除菜单
const deleteBtn = () => {
  let params = {
    id: formState.id
  }
  deleteMenuList(params).then(res => {
    if (res.data.code === 200) {
      editMenu()
      loadNodeApi()
    }
  })
}
</script>
<template>
  <div class="menu-box">
    <div class="menu-tree">
      <el-button-group class="menu-tree-btn">
        <el-button type="primary" @click="addMenu" :icon="Plus">新增</el-button>
        <el-button type="primary" @click="editMenu(false)" :icon="Edit">编辑</el-button>
        <el-button type="danger" :icon="Delete" @click="deleteBtn">删除</el-button>
      </el-button-group>
      <el-tree
        :data="treeData"
        :props="treeProps"
        :check-on-click-node="true"
        @check-change="handleCheckChange"
      />
    </div>
    
    <div class="menu-form">
      <el-form
        :label-position="labelPosition"
        label-width="100px"
        :model="formState"
        style="max-width: 460px"
      >
        <el-form-item label="父级id">
          <el-input disabled v-model="formState.parent_id" />
        </el-form-item>
        <el-form-item label="菜单id">
          <el-input disabled v-model="formState.id" />
        </el-form-item>
        <el-form-item label="菜单名称">
          <el-input :disabled="isEdit" v-model="formState.menu_name" />
        </el-form-item>
        <el-form-item label="菜单图标">
          <el-input :disabled="isEdit" v-model="formState.icon" />
        </el-form-item>
        <el-form-item label="菜单URL">
          <el-input :disabled="isEdit" v-model="formState.url" />
        </el-form-item>
         <el-form-item label="菜单顺序">
          <el-input :disabled="isEdit" v-model="formState.order_num" />
        </el-form-item>
        <el-form-item label="菜单类型">
          <el-radio-group :disabled="isEdit" v-model="formState.menu_type" class="ml-4">
            <el-radio :label="1" size="small">菜单</el-radio>
            <el-radio :label="0" size="small">按钮</el-radio>
          </el-radio-group>
        </el-form-item>
         <el-form-item label="菜单描述">
          <el-input :disabled="isEdit" v-model="formState.remark" />
        </el-form-item>
        <el-form-item label=" ">
          <el-button type="primary" @click="submit">确 认</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<style scoped lang="scss">
.menu-box{
  display: flex;
  .menu-tree{
    width: 300px;
    height: 600px;
    border: 1px solid #eee;
    background: #fff;
  }
  .menu-tree-btn{
    margin: 5px 5px 0;
  }
  .menu-form{
    padding-top: 20px;
    flex-grow: 1;
    margin-left: 30px;
  }
}
</style>
