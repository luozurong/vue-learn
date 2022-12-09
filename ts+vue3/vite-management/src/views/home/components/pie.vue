<template>
  <el-radio-group style="margin-left: 50px;"  v-model="selectLable" class="ml-4" @change="radioChange">
    <el-radio-button label="sale_">销量</el-radio-button>
    <el-radio-button label="_money">销售额</el-radio-button>
  </el-radio-group>
  <el-select v-model="selectDay" style="margin-left: 50px;margin-top:6px" placeholder="please select your zone" @change="selectChange">
    <el-option v-for="item in options" :label="item.name" :value="item.value" :key="item.value"/>
  </el-select>
  <div id="pie" style="width: 100%; height: 600px;">pie</div>
</template>
<script setup lang="ts">
  import {onMounted, reactive, toRefs, watch} from 'vue'
  import * as echarts from 'echarts'

  const props = defineProps<{
    data: {
      today_money?: string,
      name?: string
    }[]
  }>()

  const state = reactive({
    selectLable: '_money',
    selectDay: 'today',
    options: [
      {name: '今天', value: 'today'},
      {name: '昨天', value: 'yesterday'},
      {name: '前三天', value: 'three_days'},
      {name: '前七天', value: 'seven_days'},
    ]
  })
  const {selectLable, selectDay, options} = toRefs(state)
  let mychart: echarts.ECharts

  const radioChange = () => {
    initPie()
  }

  const selectChange = () => {
    initPie()
  }

  watch(() => props.data, () => {
    initPie()
  })

  const initPie = () => {
    // 初始化
    if (!mychart) mychart = echarts.init(document.getElementById('pie') as HTMLElement)

    let key = ''
    if (selectLable.value === '_money') {
      key = selectDay.value + selectLable.value
    } else {
      key = selectLable.value + selectDay.value
    }

    // let arr = props.data.map((item: {[key: string]: string}) => ({value: item[key], name: item.name}))
    let arr = props.data.map((item: Record<string, string>) => ({value: item[key], name: item.name}))
      // let arr = props.data.map((item) => ({value: item.today_money, name: item.name}))

    // 数据
    let option = {
      legend: {
        top: 'bottom'
      },
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },  
      series: [
        {
          name: 'Nightingale Chart',
          type: 'pie',
          radius: [50, 250],
          center: ['50%', '50%'],
          roseType: 'area',
          itemStyle: {
            borderRadius: 8
          },
          data: arr
        }
      ]
      };
      mychart.setOption(option)
  }
  
</script>