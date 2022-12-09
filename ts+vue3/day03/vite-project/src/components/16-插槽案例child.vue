<template>
  <div >
    <table border>
      <tr>
        <td>姓名</td>
        <td>年龄</td>
        <td>操作</td>
      </tr>
      <!-- <tr v-for="item,index in arr" :key="index">
        <td>{{item.name}}</td>
        <td>{{(item as {age:number}).age}}</td>
        <td>
          <slot name="btns" :index="index"></slot>
        </td>
      </tr> -->
      <tr v-for="item,index in arr2" :key="index">
        <td>{{item.name}}</td>
        <td>{{item.age}}</td>
        <td>
          <slot name="btns" :index="index"></slot>
        </td>
      </tr>
    </table>
  </div>
</template>
<script setup lang="ts">
  import {UserType} from '#/table'
  let props = defineProps({
    arr: {
      type: Array,
      default: () => []
    }
  })

  let arr2 = props.arr as UserType[]
</script>