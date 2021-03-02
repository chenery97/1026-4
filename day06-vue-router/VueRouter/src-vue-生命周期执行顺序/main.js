import Vue from "vue";
import router from "./router";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  // 注入路由，让整个页面应用都有路由功能
  router,
}).$mount("#app");
