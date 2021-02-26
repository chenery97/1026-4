/* 
  定义插件
    1. 对象形式
    2. 函数形式

    全局扩展
    实例扩展
    自定义过滤器
    自定义指令

  使用插件：Vue.use(插件名), 会自动执行对象形式的install方法安装插件，或直接执行函数形式定义的函数插件安装插件
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
