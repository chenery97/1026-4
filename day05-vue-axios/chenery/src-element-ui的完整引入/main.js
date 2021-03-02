import Vue from "vue";
// 完整引入，会把所有的样式、组件加载进来，体积比较大
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.use(ElementUI)

new Vue({
  render: (h) => h(App),
}).$mount("#app");
