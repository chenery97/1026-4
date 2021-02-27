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
     - 简写：`:属性名`
       
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
         - 简写：`@事件名="事件回调函数"`，当事件回调函数中只有一条语句时，可以不在methods中定义回调函数，直接简写成`@事件名="本来在回调函数中书写的语句"`，但注意不能在语句中书写this，自己会自动去this上寻找对应使用的数据
         
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
         <!-- 其他绑定事件方式 -->    
         <h2>1. 绑定监听</h2>
         <!-- 如果不需要传参时，会自动传递event事件对象 -->
         <button v-on:click="clickHandle">按钮</button>
         <button @click="clickHandle1">按钮1</button>
         <!-- 如果需要传参时，可以直接传参，并不会直接调用函数，但event事件对象则不存在了 -->
         <button @click="clickHandle2('xxx')">按钮2</button>
         <!-- 当需要传参并且需要event对象时，在参数中传递$event，事件回调函数中就可以接收到这个事件对象了 -->
         <button @click="clickHandle3('xxx', $event, 'yyy')">按钮3</button>
         <!-- 但事件回调函数中只有一条语句时，可以直接简写成以下形式 -->
         <button @click="msg = '按钮4'">按钮4</button>
         ```
         
         - v-if和v-show：条件渲染
         
           - v-if
             - v-if
             - v-else-if
             - v-else
         
           - v-show
         
           > v-if和v-show
           >
           > - 相同点：都能切换显示
           > - 不同点：
           >   - v-if隐藏元素时会删除对应的dom元素
           >   - v-show隐藏元素时是通过display:none隐藏的，不会删除dom元素
           >
           > v-show的性能比v-if更好，当频繁切换时使用v-show较好
         
           ```html
       <body>
         <div id="app">
           <h1>今晚看那部电视剧？v-if</h1>
           <p v-if="tvName === 'guigu'">《硅谷》</p>
           <p v-else-if="tvName === 'pochanjiemei'">《破产姐妹》</p>
           <p v-else>《生活大爆炸》</p>
           <button @click="changeTV">按钮</button>
       
           <h1>今晚看不看电视剧？v-show</h1>
           <p v-show="isShow">看！！！</p>
           <button @click="isShow = !isShow">按钮</button>
         </div>
       
         <script src="../js/vue.js"></script>
         <script>
           new Vue({
             el: '#app',
             data: {
               tvName: 'guigu',
               isShow: true
             },
             methods: {
               changeTV() {
                 const num = Math.floor(Math.random() * 3 + 1)
                 switch (num) {
                   case 1:
                     this.tvName = 'guigu'
                     break
               case 2:
                     this.tvName = 'pochanjiemei'
                 break
                   default:
                     this.tvName = 'shenghuodabaozha'
             }
               }
         }
           })
         </script>
       </body>
         ```
       
       - v-for：列表渲染
     
         - 数组：`v-for="(item[,index]) in items"`必须有一个参数，即代表当前项，支持第二个可选参数，即代表当前项的索引，可以省略小括号
         - 对象：`v-for="value[,key,index] in obj"`必须有一个测试，即代表当前项的值，支持第二个可选参数，即代表当前项的键名，支持第三个可选参数，即代表当前项的索引。在遍历对象时，会按`Object.keys()`的结果遍历，但是不能保证它的结果在不同的JavaScript引擎下都一致
           
     
         __注__：v-for语法中的`in`可以使用`of`代替，因为它更接近JavaScript迭代器的语法，建议尽可能在使用`v-for`时提供`key`attribute，除非遍历输出的DOM非常简单，或者是刻意依赖默认行为获取性能上的提升。
     
         ```html
         <div id="app">
             <h1>v-for列表渲染 数组</h1>
             <ul>
                 <li v-for="person in persons" :key="person.id">
                     {{person.id}} -- {{person.name}} -- {{person.age}}
                 </li>
             </ul>
             <h1>v-for列表渲染 对象</h1>
             <ul>
                 <li v-for="value, key in animal" :key="key">
                     {{key}} -- {{value}}
                 </li>
             </ul>
             <h1>v-for语法中可以使用of替代in</h1>
             <ul>
                 <li v-for="value, key of animal" :key="key">
                     {{key}} -- {{value}}
                 </li>
             </ul>
         </div>
         ```
     
       - v-text：将数据渲染到绑定该指令的子节点上，与innerText、textContent功能相同
     
       - v-html：将数据渲染到绑定该指令的子节点上，如果数据是html标签字符串，会解析成html标签，与innerHTML功能相同
     
       - v-pre：跳过编译
     
       - v-cloak：避免闪现的效果，配合display:none使用，编译完成前不渲染
     
       - v-once：只编译渲染一次，后续数据发生变化都不会重新渲染

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
       - View视图的数据发生修改可以流向Model层（ViewModel负责绑定事件，从事件中读取View层修改的数据，再去修改Model的数据）

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

5. 计算属性

   当需要通过原属性计算得到一个新数据，那么使用计算属性，计算属性里面不能做异步操作

   使用场景：计算总价、总数等

   特点：

   1. 只读的计算属性和可读可写的计算属性
   2. 计算属性有缓存，如果依赖的数据没有发生变化，是不会重新计算的，只有依赖的数据发生了变化，才会重新计算（依赖的数据指的是读取方法中使用的this上的数据）

   ```js
   computed: {
       // 只读，当修改该计算属性时会报错
       // Computed property "fullName" was assigned to but it has no setter.
       fullName() {
           return this.firstName + ' ' + this.lastName
       },
       // 可读可写
       fullName1: {
           get() {
               console.log('run get()')
               return this.firstName + ' ' + this.lastName
           },
       // set方法中接收最新的数据，当调用了set方法后由于View层绑定了对应的数据所以会调用get方法重新获取数据进行渲染
           set(newValue) {
               console.log('run set()')
               const [firstName, lastName] = newValue.split(' ')
               this.firstName = firstName
               this.lastName = lastName
           }
       }
   }
   ```

6. 监视属性

   当需要通过原属性的变化来干一些事，就用监视属性

   使用场景：涉及到发送请求等

   ```js
   watch: {
       firstName (newValue, oldValue) {
           console.log('run firstName()')
           this.fullName2 = newValue + ' ' + this.lastName
       },
       lastName (newValue, oldValue) {
           console.log('run lastName()')
           this.fullName2 = this.firstName + ' ' + newValue
       },
       fullName2 (newValue) {
           console.log('run fullName2()')
           const [firstName, lastName] = newValue.split(' ')
           this.firstName = firstName
           this.lastName = lastName
       }
   }
   ```

   > 计算属性和监视属性的异同点
   >
   > 1. 能用计算属性做的，都可以使用监视属性，但是推荐使用计算属性
   > 2. 涉及到异步操作只能使用监视属性

7. class和style绑定

   静态样式：用class

   动态样式（样式会发生变化）：

   - 样式如果是有限几种变化则使用class
   - 样式如果是无穷中变化则使用style

   - class
     - 字符串形式：`<p :class="color">我是一段会变化样式的文字 class绑定 字符串形式</p>`
     - 对象形式：`<p :class="{red: isRed, skyblue: !isRed}">我是一段会变化样式的文字 class绑定 对象形式</p>`
     - 数组形式：`<p :class="['red', 'xxx']">我是一段会变化样式的文字 class绑定 数组形式</p>`
   - style
     - `<p :style="{color:'pink', fontSize: fontSize + 'px'}">我是一段会变化样式的文字 style绑定</p>`

8. 修饰符

   - 事件修饰符

     ```html
     <h2>2. 事件修饰符</h2>
     <!-- .prevent：阻止默认行为 -->
     <a href="http://www.baidu.com" @click.prevent="clickHandle">go to www.baidu.com</a>
     <div @click="clickHandle4('外层div')">
         外层div
         <!-- .stop：阻止冒泡 -->
         <div @click.stop="clickHandle4('内层div')">
             内层div
             <!-- 支持串联使用 -->
             <a href="http://www.baidu.com" @click.prevent.stop="clickHandle">go to www.baidu.com</a>
         </div>
     </div>
     ```

   - 按键修饰符

     ```js
     <h2>3. 按键修饰符</h2>
     <!-- 支持串联使用 -->
     <!-- 支持所有按键 -->
     <input type="text" @keyup.13.delete="keyupHandle">
     <!-- 只支持部分按键 -->
     <input type="text" @keyup.enter.space.z="keyupHandle">
     ```

9. 过渡&动画

   - 过渡

     ```html
     <style>
         .v-leave{
             transform: translateX(0) scale(1);
         }
         .v-leave-active{
             transition: all 2s;
         }
         .v-leave-to{
             transform: translateX(100px) scale(0.8);
         }
         .v-enter{
             transform: translateX(100px) scale(0.8);
         }
         .v-enter-active{
             transition: all 2s;
         }
         .v-enter-to{
             transform: translateX(0) scale(1);
         }
     </style>
     
     <div id="app">
         <button @click="isShow = !isShow">按钮</button>
         <!-- 需要过渡效果的dom元素，使用内置transition组件包裹 -->
         <!-- 
             当插入或删除包含在 transition 组件中的元素时，Vue 将会做以下处理：
             自动嗅探目标元素是否应用了 CSS 过渡或动画，如果是，在恰当的时机添加/删除 CSS 类名。
             如果过渡组件提供了 JavaScript 钩子函数，这些钩子函数将在恰当的时机被调用。
             如果没有找到 JavaScript 钩子并且也没有检测到 CSS 过渡/动画，DOM 操作 (插入/删除) 在下一帧中立即执行。
             (注意：此指浏览器逐帧动画机制，和 Vue 的 nextTick 概念不同)
     	-->
         <transition>
             <p v-show="isShow">Let's me see!!!</p>
         </transition>
     </div>
     ```

   - 动画

     ```html
     <style>
         .v-leave-active{
             animation: move 5s linear 1s;
         }
         .v-enter-active{
             animation: move 5s linear 1s reverse;
         }
         @keyframes move {
             from{
                 opacity: 1;
                 transform: translateX(0);
             }
             50%{
                 opacity: 0.5;
                 transform: translateX(200px);
             }
             to{
                 opacity: 0;
                 transform: translateX(100px);
             }
         }
     </style>
     
     <div id="app">
         <button @click="isShow = !isShow">按钮</button>
         <transition>
             <p v-show="isShow">Let's me see!!!</p>
         </transition>
     </div>
     ```

10. 过滤器：用于常见的文本格式化，过滤器可以用在两个地方：双大括号插值和v-bind表达式

    ```html
    <div id="app">
        <h2>实例上的过滤器，当前时间</h2>
        <!-- 语法，第一个参数是管道符前面的数据，可以额外传参 -->
        <p>{{date | formatDate('YYYY-MM-DD HH:mm:ss')}}</p>
        <p>{{date | formatDate('HH:mm:ss')}}</p>
        <h2>Vue对象上的过滤器，当前时间</h2>
        <p>{{date | formatDate1('YYYY-MM-DD HH:mm:ss')}}</p>
        <p>{{date | formatDate1('HH:mm:ss')}}</p>
    </div>
    
    <script src="https://cdn.bootcdn.net/ajax/libs/dayjs/1.10.3/dayjs.min.js"></script>
    <script src="../js/vue.js"></script>
    <script>
        // 全局过滤器，所有组件都可以使用
        Vue.filter('formatDate1', function (value, formatDate) {
            return dayjs(value).format(formatDate)
        })
        new Vue({
            el: '#app',
            data: {
                date: Date.now()
            },
        	// 实例上的过滤器，只能作用于当前实例   
            filters: {
                formatDate(value, formatStr) {
                    return dayjs(value).format(formatStr)
                }
            },
            mounted () {
                this.timer = setInterval(() => {
                    console.log(111)
                    this.date = Date.now()
                }, 1000)
            },
            beforeDestroy() {
                clearInterval(this.timer)
            }
        })
    </script>
    ```

11. 自定义指令：需要对普通 DOM 元素进行底层操作，这时候就会用到自定义指令

    ```html
    <div id="app">
        <p v-inner-text="msg"></p>
        <div v-inner-html="htmlStr"></div>
    </div>
    
    <script src="../js/vue.js"></script>
    <script>
        // 全局自定义指令
        Vue.directive('inner-html', function (el, binding) {
            el.innerHTML = binding.value
        })
        new Vue({
            el: '#app',
            data: {
                msg: '感觉Vue比React难，语法太多，要注重原生语法！！！',
                htmlStr: '<h2>感觉Vue比React难，语法太多，要注重原生语法！！！</h2>'
            },
            directives: {
                /* 
              局部自定义指令
              函数名就是定义的指令名，最终会自动在指令名前面加v-
              函数名不能大写，因为浏览器会将大写的属性名都转成小写进行解析，写成大写指令就匹配不上了
              el：绑定指令的那个dom元素
              binding：包含绑定的表达式、指令名、数据等属性的对象
            */
                ['inner-text'](el, binding) {
                    console.log(el, binding)
                    el.innerText = binding.value
                }
            }
        })
    </script>
    ```

12. 自定义插件

    ```js
    /* 
      定义插件
        1. 对象形式
        2. 函数形式
    
        全局扩展	Vue.xxx = function() {}
        实例扩展	Vue.prototype.$xxx = function() {}
        自定义过滤器 Vue.filter('xxx', function(value) {})
        自定义指令	Vue.directive('xxx', function(el, binding) {})
    
      使用插件：Vue.use(插件名), 会自动执行对象形式的install方法安装插件，或直接执行函数形式定义的函数插件安装插件，注意要先使用插件再new Vue()
    */
    
    const objPlugin = {};
    objPlugin.install = function (Vue) {
      Vue.objGlobalMethod = function () {
        console.log("objGlobalMethod");
      };
      Vue.prototype.$objLocalMethod = function () {
        console.log("objLocalMethod");
      };
      Vue.filter("upperCase", function (value) {
        return value.toUpperCase();
      });
      Vue.directive("lower-case", function (el, binding) {
        el.innerText = binding.value.toLowerCase();
      });
    };
    
    function funPlugin(Vue) {
      Vue.funGlobalMethod = function () {
        console.log("funGlobalMethod");
      };
      Vue.prototype.$funLocalMethod = function () {
        console.log("funLocalMethod");
      };
      Vue.filter("reverse", function (value) {
        return value.split('').reverse().join('');
      });
      Vue.directive("to-string", function (el, binding) {
        el.innerText = binding.value.toString();
      });
    }
    
    // 使用插件
    Vue.use(objPlugin)
    Vue.use(funPlugin)
    new Vue({
        ...
    })
    ```

    

### Vue生命周期

#### 挂载阶段（初始化阶段）：一上来自动触发，只会触发一次

- beforeCreate
  - 在数据代理之前触发的，数据代理：把data、methods、computed、watch等数据代理在this身上
  - 此时还不能通过this访问数据（data）
- created
  - 数据代理之后触发，在此及之后都可以正常使用数据
- beforeMount
  - 此阶段不能操作DOM，在此及之后都可以正常操作DOM
- mounted
  - 页面渲染完毕，此时才能操作DOM
  - 发送请求、设置定时器、绑定事件等一次性任务

#### 更新阶段：每次更新响应式数据都会触发

- beforeUpdate

- updated

  __注__：数据更新后才会执行这两个钩子函数，updated是数据更新后的视图，beforeUpdate是数据更新前的视图

#### 卸载阶段：调用Vue实例的$destroy()才会触发，只会触发一次

- beforeDestroy
  - 做一些收尾工作：清除定时器、解绑事件
- destroyed



### Vue组件

#### 模块与组件和模块化与组件化的理解

1. 模块
   - 理解：向外提供特定功能的js程序，一般就是一个js文件
   - 作用：复用js代码，简化js的编写，提高js运行效率
2. 组件
   - 理解：用来实现特定（局部）界面功能效果的代码集合（html、css、js）
   - 作用：复用代码，简化项目编码，提高应用运行效率
3. 模块化
   - 当应用的js都以模块来编写的，这个应用就是一个模块化的应用
4. 组件化
   - 当应用是以多组件的方式实现的，这个应用就是一个组件化的应用

#### 组件定义和使用

1. 定义组件
   1. 方式一：`Vue.extend({组件的配置对象})`，返回一个组件
   2. 方式二：`Vue.component('组件名', {组件的配置对象})`，返回一个组件
   3. 方式三：`new Vue({el:'#app', components:{myComponent:{组件的配置对象}}})`
2. 注册组件：`new Vue({el: '#app', components: {组件名: 定义好的组件}})`
3. 使用组件：`<组件名></组件名>`
   - 在没有使用脚手架的情况下，方式一和方式二定义的组件不支持单标签写法
   - 在没有使用脚手架的情况下，以上三种方式定义的组件在使用组件的时候组件名不支持大驼峰写法，必须使用连接符`-`

```html
<body>
    <div id="app">
        <!-- 3. 使用组件 -->
        <Test-Component></Test-Component>
        <My-Component></My-Component>
        <Vue-Component>
    </div>
    <script src="../js/vue.js"></script>
    <script>
         // 1. 定义组件 方式一
         const TestComponent = Vue.extend({
             // name: '',
             data () {
                 return {
                     msg: 'Vue.extend的方式定义的组件'
                 }
             },
             template: '<h1>{{msg}}</h1>'
         })
         // 定义组件 方式二
         const MyComponent = Vue.component('MyComponent', {
             data () {
                 return {
                     data: 'Vue.component的方式定义的组件'
                 }
             },
             template: '<h1>{{data}}</h1>'
         })
         // 2. 注册组件
         new Vue({
             el: '#app',
             components: {
                 TestComponent,
                 MyComponent,
                 // 定义组件 方式三
                 VueComponent: {
                     name: 'VueComponent',
                     data () {
                         return {
                             re: 'components的方式定义的组件'
                         }
                  	 },
                  	 template: '<h1>{{re}}</h1>'
                 }
             }
         })
     </script>
</body>
```

### Vue组件通信

#### props方案

适用于：父子组件通信

- 父传子

  - 直接传递普通数据（非函数数据）
  - 子组件声明接收可以直接使用

  __注意__：props通信数据是只读的，不可直接修改（数据源在哪，更新数据的方法就在哪）

- 子传父

  - 父组件给子组件传递函数
  - 子组件通过调用函数，来修改父组件的数据

#### 自定义事件

适用于：子组件向父组件通信

注意：父组件绑定自定义事件，子组件触发事件，给哪个组件绑定，就只有那个组件可以触发

使用：

1. 绑定事件

   ```js
   // 第一种绑定方式
   <Child @事件名称="事件回调函数" />
   // 第二种绑定方式，这种绑定方式不能使用$listeners触发事件
   <Child ref="xxx" />
   mounted() {
    	// 绑定持续性事件   
       this.$refs.xxx.$on(事件名称, 事件回调函数)
       // 绑定一次性事件，事件被触发了一次，就不再触发
       this.$refs.xxx.$once(事件名称, 事件回调函数)
   }
   beforeDestroy() {
       // 解绑事件
       this.$refs.xxx.$off(事件名称, 事件回调函数)
   }
   ```

2. 触发事件

   ```js
   this.$emit(事件名称, 参数1, 参数2, ...)
   this.$linsteners.事件名称(参数1, 参数2, ...)
   ```

### 全局事件总线

适用于：任意组件间通信，通常用于兄弟组件、爷孙组件之间进行通信父子还是用props

使用：

1. 给Vue的原型上添加全局事件总线对象

   ```js
   // 第一种方法
   Vue.prototype.$globalEventBus = new Vue()
   new Vue({
       render: h => h(App)
   }).$mount('#app')
   
   //第二种方法
   new Vue({
       beforeCreate() {
   		Vue.prototype.$globalEventBus = this
   	}
       render: h => h(App)
   }).$mount('#app')
   ```

2. 绑定事件（接受数据方）

   ```js
   mounted() {
       this.$globalEventBus.$on(事件名称, 事件回调函数)
   }
   ```

3. 触发事件（发送数据方）

   ```js
   this.$globalEventBus.$emit(事件名称, 参数1...)
   ```

   