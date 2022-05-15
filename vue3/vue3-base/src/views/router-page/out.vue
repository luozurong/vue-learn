<template>
  <div>out页面参数：{{route.query.id}}
    <div>count: {{count}}</div>
    <div>
      <button @click="jumpPage">跳转其他详情</button>
    </div>
  </div>
</template>
<script setup>
import { watch, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
let count = ref(0)

const pageData = () => {
  count.value += 1
}

watch(() => route.query.id, (nVal, oVal) => {
  pageData()
})

onMounted(() => {
  pageData()
})

const jumpPage = () => {
  router.push({
    path: 'out',
    query: {
      id: Math.ceil(Math.random() * 20)
    }
  })
}
</script>