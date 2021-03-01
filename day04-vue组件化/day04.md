# day04

## 谈谈自定义事件

自定义事件是一种组件间通信的方案，适用于子组件向父组件传递数据。

父组件绑定自定义事件，子组件触发事件，给哪个组件绑定，就只有哪个组件可以触发

使用：

- 绑定事件
  - `<Child @事件名称="事件回调函数" />`
  - `<Child ref="xxx" />
    mounted() {
     	// 绑定持续性事件   
        this.$refs.xxx.$on(事件名称, 事件回调函数)
        // 绑定一次性事件，事件被触发了一次，就不再触发
        this.$refs.xxx.$once(事件名称, 事件回调函数)
    }
    beforeDestroy() {
        // 解绑事件
        this.$refs.xxx.$off(事件名称, 事件回调函数)
    }`
- 触发事件
  - `this.$emit(事件名称, 参数1, 参数2, ...)`
  - `this.$linsteners.事件名称(参数1, 参数2, ...)`，用ref的方式绑定的事件，无法通过这种方式触发



## 谈谈全局事件总线

全局事件总线是一种组件间通信的方案，可以在任意组件间通信，通常用于兄弟组件、爷孙组件之间进行通信，父子组件还是用props

使用：

- 给Vue的原型上添加全局事件总线对象
  - `Vue.prototype.$globalEventBus = new Vue()
    new Vue({
        render: h => h(App)
    }).$mount('#app')`
  - `new Vue({
        beforeCreate() {
    		Vue.prototype.$globalEventBus = this
    	}
        render: h => h(App)
    }).$mount('#app')`
- 绑定事件（接收数据方）
  - `mounted() {
        this.$globalEventBus.$on(事件名称, 事件回调函数)
    }`
- 触发事件（发送数据方）
  - `this.$globalEventBus.$emit(事件名称, 参数1...)`



## 谈谈 Promise

Promise是一个异步编程的解决方案，可以将异步操作以同步的流程表达出来，避免了层层嵌套的回调函数（俗称回调地狱）

Promise是一个构造函数，自己身上有all、reject、resolve、allSettled、race、any这几个方法，原型上有then、catch等方法

Promise的构造函数接收一个参数，这个参数是个函数，函数中传入两个参数：resolve，reject，分别代表异步操作执行成功后的回调函数和异步操作执行失败后的回调函数。

Promise对象有三种状态：代表异步执行的状态，对象的状态只能改变一次

- pending：初始化状态（异步代码还在执行中）
- resolved/fulfilled：成功状态（异步代码执行成功了），调用resolve函数，可以将promise对象的状态由pending变成resolved
- rejected：失败状态（异步代码执行失败了），调用reject函数，可以将promise对象的状态由pending变成rejected

new Promise()函数是同步执行的，Promise的回调是异步的，而且是属于微任务

## 请写出打印结果（明天出题目，和 promise 相关）
