<template>
  <Teleport to="body">
    <p>传送门</p>
  </Teleport>
  <div >

    <Table :arr="state.arr">
      <template #btns="{index}">
        <!-- 点击按钮获取当前行数据 -->
        <button @click="hdClik(index)">编辑</button>
      </template>
    </Table>
    <Table :arr="state.arr">
      <template #btns>
        <button>编辑</button>
        <button>删除</button>
      </template>
    </Table>
  </div>
</template>
<script setup lang="ts">
  import { reactive } from 'vue';
  import Table from '@/components/16-插槽案例child.vue'

  let state = reactive({
    arr: [{
      name: '小明',
      age: 18,
    }, {
      name: '小红',
      age: 20
    }]
  })

  const hdClik = (index: number) => {
    console.log(state.arr[index]);
    
  }
  // 类型增强
  console.log(globalvar, globaleObj)
  globalefn('')

  $('#app')
  $.ajax()

</script>