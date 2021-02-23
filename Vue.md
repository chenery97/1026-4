## Vue

### Vue简介

​		Vue是一套用于构建用户界面的__渐进式框架__。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与[现代化的工具链](https://cn.vuejs.org/v2/guide/single-file-components.html)以及各种[支持类库](https://github.com/vuejs/awesome-vue#libraries--plugins)结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。

### Vue基础

#### Vue特点

- 遵循MVVM模式
- 编码简洁，体积小，运行效率高，适合移动、PC端开发
- 它本身只关注UI，可以轻松引入vue插件或其它第三方库开发项目

#### 与其他前端JS框架的关联

- 借鉴angular的模板和数据绑定技术
- 借鉴react的组件化和虚拟DOM技术

#### Vue扩展插件

- vue-cli：vue脚手架
- vue-resource（axios）：ajax请求
- vue-router：路由
- vuex：状态管理
- vue-lazyload：图片懒加载
- vue-scroller：页面滑动相关
- mint-ui：基于vue的UI组件库（移动端）
- element-ui：基于vue的UI组件库（PC端）

#### Vue基本使用

1. 引入vue.js文件（引入成功，会在全局中多一个Vue构造函数）

2. 模板

   - 模板页面：HTML+CSS+JS

   - 模板语法

     - 插值语法（双大括号表达式）：{{JS表达式}}

       - 作用：动态渲染（显示）JS数据，当HTML需要显示js中的数据时就用插值语法
       - 注意：不能用于标签属性，只能用于标签的子节点中

     - 指令语法：v-xxx="JS表达式"，（以v-开头的自定义标签属性）

       - v-model：双向数据绑定

         - 绑定input标签的value值（所以一上来input就有内容显示）
         - 绑定input标签的input事件（当input输入的值发生变化，会自动修改绑定的data数据）
         - 只能用于表单项：input、select、textarea

         ```html
         <!-- 双向数据绑定 -->
         <input type='text' v-model='msg' />
         <p>{{msg}}</p>
         <script>
             new Vue({
                 el: '#app',
                 data: {
                     msg: 'hello vue'
                 }
             })
         </script>
         ```

         

       - v-bind：强制数据绑定（单向数据绑定，Model的数据流向View）

         - 功能：给标签属性绑定某个动态数据

         ```html
         <!-- 单向数据绑定 -->
         <input type='text' v-bind:value='msg' />
         <!-- 简写模式 -->
         <input type='text' :value='msg' />
         <p>{{msg}}</p>
         <script>
             new Vue({
                 el: '#app',
                 data: {
                     msg: 'hello vue'
                 }
             })
         </script>
         ```

       - v-on：绑定事件监听

         - 功能：用于绑定DOM事件
         - 事件回调函数定义在配置对象中的methods中

         ```html
         <button v-on:click='clickHandle'><button/>
         <!-- 简写模式 -->
         <button @click='clickHandle'><button/>
         <p>{{msg}}</p>
         <script>
             new Vue({
                 el: '#app',
                 data: {
                     msg: 'hello vue'
                 },
                 methods: {
                     clickHandle(e) {
                         console.log(e) // 事件对象
                         console.log(this) // this指向Vue的实例对象vm
                     }
                 }
             })
         </script>
         ```

         

3. 表达式和语句的区别

   - 表达式：有返回值，没有分号结尾
   - 语句：没有返回值，有分号结尾，但是分号可以省略

4. MVVM

   - MVC：数据单向
     - M：Model，数据层（数据库）
     - V：View，视图层（页面）
     - C：Controller，控制层（路由：接收请求，查询数据，返回给页面）
   - MVVM：数据双向
     - M：Model，数据层（data、计算属性等）
     - V：View，视图层（HTML）
     - VM：ViewModel，视图模型层。
       - Model的数据可以流向View视图（ViewModel负责从Model读取数据渲染到View层）
       - View视图的数据发生修改可以流向Model层（ViewModel负责绑定事件，从事件从读取View层修改的数据，再去修改Model的数据）

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
     <meta charset="UTF-8">
     <meta http-equiv="X-UA-Compatible" content="IE=edge">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Document</title>
   </head>
   <body>
     <div id="root">
       <!-- 使用v-model指令绑定data中的msg数据 -->
       <input type="text" v-model='msg'>
       <!-- 使用大括号插值表达式渲染data中的msg数据 -->
       <p>{{msg}}</p>
     </div>
     <script src="../js/vue.js"></script>
     <script>
       const msg = 'hello Vue'
       /* 得到一个Vue实例对象 */
       const vm = new Vue({
         // 配置对象：属性名固定的对象
         // el:内部通过querySelector获取dom元素
         el: '#root',
         // data:内部ViewModel层控制的数据
         data: {
           msg
         }
       })
     </script>
   </body>
   </html>
   ```

   