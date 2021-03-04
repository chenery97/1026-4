import Vue from 'vue'
import App from './App.vue'
import store from './store'

import './assets/css/index.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 注入store，使得当前应用所有组件都可以使用store集中管理的共享数据
  store
}).$mount('#app')
