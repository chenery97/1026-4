function MVVM(options) {
  // 将options对象保存到vm实例上
  this.$options = options;
  // 将状态数据data保存到实例的_data上面，并用data变量保存
  var data = (this._data = this.$options.data);
  // 将methods保存到实例的_methods上面，并用methods变量保存
  var methods = (this._methods = this.$options.methods);
  // 用me变量保存this，因为在forEach的回调函数中无法获取实例this
  var me = this;
  // 遍历data中所有的key
  Object.keys(data).forEach(function (key) {
    // 将每一份数据进行数据代理
    me._proxy(key);
  });
  Object.keys(methods).forEach(function (key) {
    me._proxyMethods(key);
  })


  // 数据劫持
  observe(data);

  // 模板解析
  this.$complie = new Compile(options.el || document.body, this);
}

MVVM.prototype = {
  // 数据代理
  _proxy: function (key) {
    var me = this;
    // 使用Object.defineProperty进行数据代理
    Object.defineProperty(me, key, {
      // 属性可被枚举
      enumerable: true,
      // 属性不可修改配置，和删除
      configurable: false,
      // 获取数据
      get: function () {
        return me._data[key];
      },
      // 设置数据
      set: function (newVal) {
        me._data[key] = newVal;
      },
    });
  },
  // 方法代理
  _proxyMethods: function (key) {
    this[key] = this._methods[key];
  }
};
