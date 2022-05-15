import Vue from 'vue'
import App from './App.vue'
import fieldsetLzr from 'fieldset-lzr'
import 'fieldset-lzr/fieldset.css'
Vue.use(fieldsetLzr)

import './mock/index'

// import filed from './packages/fieldset/index'
// Vue.use(filed)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
