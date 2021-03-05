function Compile(el, vm) {
  this.$vm = vm;
  // 获取节点
  this.$el = this.isElementNode(el) ? el : document.querySelector(el);

  if (this.$el) {
    // 将节点转为文档碎片节点
    this.$fragment = this.node2Fragment(this.$el);
    // 初始化
    this.init();
    // 将文档碎片节点插入dom中
    this.$el.appendChild(this.$fragment);
  }
}

Compile.prototype = {
  // 将节点转为文档碎片节点
  node2Fragment: function (el) {
    var fragment = document.createDocumentFragment(),
      firstChild;
    while ((firstChild = el.firstChild)) {
      fragment.appendChild(firstChild);
    }
    return fragment;
  },
  // 初始化
  init: function () {
    // 编译元素，传入文档碎片节点
    this.compileElement(this.$fragment);
  },
  // 编译元素
  compileElement: function (el) {
    // 获取元素的所有子节点
    var childNodes = el.childNodes;
    var me = this;
    // 遍历所有子节点
    [].slice.call(childNodes).forEach(function (childNode) {
      // 获取子节点的文本内容
      var text = childNode.textContent;
      // 定义插值语法正则
      var reg = /\{\{(.*)\}\}/;
      // 判断子节点是否为元素节点
      if (me.isElementNode(childNode)) {
        // 编译子节点
        me.compileElementNode(childNode);
        // 判断子节点是否为文本节点，并且子节点包含插值语法
      } else if (me.isTextNode(childNode) && reg.test(text)) {
        // 编译解析插值语法
        me.compileTextNode(childNode, RegExp.$1);
      }
      // 判断子节点是否有子节点
      if (childNode.childNodes && childNode.childNodes.length) {
        // 递归编译
        me.compileElement(childNode);
      }
    });
  },
  // 编译元素节点
  compileElementNode: function (node) {
    // 获取节点的所有属性
    var nodeAttrs = node.attributes;
    var me = this;
    [].slice.call(nodeAttrs).forEach(function (attr) {
      // 获取属性名
      var attrName = attr.name;
      // 判断是否是指令
      if (me.isDirective(attrName)) {
        // 获取指令属性，去掉v-
        var dir = attrName.substring(2);
        // 获取指令属性值
        var attrValue = attr.value;
        // 处理事件指令
        if (me.isEventDirective(dir)) {
          // 编译解析事件指令
          compileUtil.eventHandle(node, me.$vm, attrValue, dir);
        } else {
          // 编译解析其他指令
          compileUtil[dir] && compileUtil[dir](node, me.$vm, attrValue);
        }
        // 移除已编译的指令属性
        node.removeAttribute(attrName);
      }
    });
  },
  // 编译文本节点
  compileTextNode: function (node, exp) {
    compileUtil.text(node, this.$vm, exp);
  },
  // 元素节点
  isElementNode: function (node) {
    return node.nodeType === 1;
  },
  // 文本节点
  isTextNode: function (node) {
    return node.nodeType === 3;
  },
  // 指令属性
  isDirective: function (attrName) {
    return attrName.indexOf("v-") === 0;
  },
  // 事件指令属性
  isEventDirective: function (attrName) {
    return attrName.indexOf("on") === 0;
  },
};

// 编译模板/指令工具
var compileUtil = {
  // 编译v-text/{{}}
  text: function (node, vm, exp) {
    this.bind(node, vm, exp, "text");
  },
  // 编译v-html指令
  html: function (node, vm, exp) {
    this.bind(node, vm, exp, "html");
  },
  // 编译v-class指令
  class: function (node, vm, exp) {
    this.bind(node, vm, exp, "class");
  },
  bind: function (node, vm, exp, dir) {
    var updaterFn = updater[dir + "Updater"];
    updaterFn && updaterFn(node, this._getVMVal(vm, exp));
  },
  // 解析事件指令，绑定事件
  eventHandle: function (node, vm, exp, dir) {
    // 获取事件名
    var eventName = dir.split(":")[1];
    // 获取事件回调函数
    var eventFn = vm._methods[exp];
    if (eventName && eventFn) {
      // 绑定事件
      node.addEventListener(eventName, eventFn.bind(vm), false);
    }
  },
  // 获取插值语法中表达式的值，从vm实例代理的数据上获取
  _getVMVal: function (vm, exp) {
    var val = vm._data;
    var exp = exp.split(".");
    exp.forEach(function (key) {
      val = val[key];
    });
    return val;
  },
};

var updater = {
  // 更新节点的文本内容
  textUpdater: function (node, val) {
    node.textContent = val === "undefined" ? "" : val;
  },
  // 更新节点的innerHTML
  htmlUpdater: function (node, val) {
    node.innerHTML = val === "undefined" ? "" : val;
  },
  // 更新节点的类名
  classUpdater: function (node, val) {
    // 获取节点上原来的类名
    var oldClassName = node.className;
    var space = oldClassName ? " " : "";
    node.className = oldClassName + space + val;
  },
};
