## 总结所有指令
- v-model：双向数据绑定
- v-bind：单向数据绑定
- v-on：绑定DOM事件
- v-if：切换渲染
- v-show：切换渲染
- v-for：列表渲染
- v-text：渲染数据到绑定该指令的dom元素下的文本节点，跟原生的textContent、innerText功能相同
- v-html：渲染数据到绑定该指令的dom元素下的元素节点或文本节点或注释节点，跟原生的innerHTML功能相同
- v-pre：跳过编译
- v-cloak：跟display:none配合，可以避免出现闪现效果，在模板语法编译完成前不显示dom元素
- v-once：只会编译渲染一次，后续数据发生变化，也不会重新渲染

## 谈谈生命周期函数
生命周期包含三个阶段：
- 挂载阶段：触发时机>>>一上来就触发，只会触发一次
  - beforeCreate：数据代理前执行，在此函数中无法使用this身上的data数据，在new Vue()后执行，已经绑定了this
  - created：数据代理完成，在此及之后可以正常使用data数据
  - beforeMount：在这里不能操作dom
  - mounted：挂载完成，通常在这做一些发送请求，设置定时器等操作，在此及之后可以正常操作dom
- 更新阶段：触发时机>>>响应式数据更新就会触发
  - beforeUpdate：更新前，在这里获取的data数据也是最新的，数据更新后才会执行，只是这里的视图是数据更新前的视图
  - updated：更新后，这里的视图是数据更新后的视图
- 卸载阶段：触发时机>>>调用Vue实例的$destroy()方法，只会触发一次
  - beforeDestroy：卸载前，通常在这做一些清除定时器等收尾工作
  - destroy：卸载后

## 请自定义一个指令（定义和使用）
```html
<h2 v-inner-html="htmlStr"></h2>
data: {
  htmlStr: '<a href="https://cn.vuejs.org/">Hello Vue</a>',
},
directives: {
  ['inner-html'] (el, binding) {
    el.innerHTML = binding.value
  }
}
```

## 请自定义一个过滤器（定义和使用）
```html
<p>{{date | formatDate}}</p>
data: {
  date: Date.now()
}
filters: {
  formatDate (value) {
    return dayjs(value).format('YYYY-MM-DD HH:mm:ss')
  }
}
```

## 谈谈闭包
- 函数嵌套，内部函数引用了外部函数中的变量，外部函数执行就产生了闭包
- 另一个理解就是内部函数有一个closure对象引用了外部函数的变量
- 闭包的生命周期
  - 产生：外部函数执行
  - 销毁：内部函数没有被引用
- 闭包的作用
  - 延长局部变量的生命周期
  - 外部可以间接操作内部的数据
- 闭包的缺点
  - 延长局部变量的生命周期也就意味着长期占用内存空间，容易导致内存泄漏