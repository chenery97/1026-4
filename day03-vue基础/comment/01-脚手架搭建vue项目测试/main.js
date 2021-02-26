// import Vue from 'vue/dist/vue.esm'
import Vue from "vue";
import App from "./App";

// 在控制台中会默认打印一下信息，将Vue中的config对象的productionTip属性设置为false则不会在打印显示这些信息
Vue.config.productionTip = false

/* 
  使用方法一：注册App组件的方式，需要在index.html文件中使用App组件，
  并且引入的vue的版本需要是vue.esm的版本，才能够正常运行
  import Vue from 'vue' 默认引入的是vue.runtime.esm.js，这个版本没有模板编译功能
*/
/* new Vue({
  el: '#app',
  components: {
    App
  }
}) */

/* 
  使用方法二：直接通过render渲染App组件，不需要在index.html中使用App组件，
  并且可以直接引入vue.runtime.esm.js版本的vue，脚手架会自动进行模板编译
*/

/* new Vue({
  el: '#app',
  render: h => h(App)
}) */
// 也可以这样写↓
new Vue({
  render: (h) => h(App),
}).$mount("#app");

