<template>
  <div>
    <Pie :data="salePie"/>
  </div>
</template>
<script setup lang="ts">
  import { watch } from 'fs';
import {reactive, toRefs} from 'vue'
  import Api from '../../request/home'
  import Pie from './components/pie.vue'

  const state = reactive<{
    salePie: {}[]
  }>({
    salePie: []
  })
  const { salePie } = toRefs(state)

  Api.getAdminStat().then(res => {
    console.log(res)
    if (res.errno === 0) {
      salePie.value = res.data.salePie
    }
  })
</script>