## 谈谈vuex

#### 什么是vuex

对vue应用中多个组件的共享状态进行集中式的管理

#### vuex的配置

1. Vue.use(Vuex)，安装插件
2. new Vuex.Store({ state: {}, getters: {}, actions: {}, mutations: {} })，配置store
3. new Vue({store}).$mount('#app')，在根vue实例中注入store

## 请画出vuex工作原理图

![vuex流程图](D:\1026\1026-4\day07-vuex\vuex流程图.jpg)