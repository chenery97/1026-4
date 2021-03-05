## 谈谈vuex

#### 什么是vuex

把组件的共享状态抽取出来，以一个全局单例模式管理，在这种模式下，我们的组件树构成了一个巨大的“视图”，不管在树的哪个位置，任何组件都能获取到状态或触发行为。简单来说，就是对vue应用中多个组件的共享状态进行集中式管理。

#### vuex的特点

1. vuex的状态存储是响应式的。当Vue组件从store中读取状态的时候，若store中的状态发生变化，那么相应的组件也会相应地得到高效更新。
2. 不能直接改变store中的状态。改变store中的状态的唯一途径就是显示地提交（commit）mutation。这样使得我们可以方便地跟踪每一个状态的变化，从而让我们能够实现一些工具帮助我们更好地了解我们的应用。

#### vuex的配置

1. Vue.use(Vuex)，安装插件
2. new Vuex.Store({ state: {}, getters: {}, actions: {}, mutations: {} })，配置store
3. new Vue({store}).$mount('#app')，在根vue实例中注入store

#### vuex五个核心概念

- state：包含store中存储的各个状态
- getters：包含n个只读计算属性，getter的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算
- actions：包含n个间接更新state状态的方法对象
- mutations：包含n个直接更新state状态的方法对象
- modules：包含n个局部模块，模块中有自己的state、getters、actions、mutations、甚至是嵌套子模块

## 请画出vuex工作原理图

![vuex流程图](D:\1026\1026-4\day07-vuex\vuex流程图.jpg)