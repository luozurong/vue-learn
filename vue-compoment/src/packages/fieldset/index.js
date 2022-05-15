import filedSets from './field-sets.vue'

// vue的插件模式需要暴露install的方法
// Vue.use()
let com = [
  filedSets
]
const install = (Vue) => {
  com.forEach((com) => {
    Vue.component(com.name, com)
  })
}
export default install