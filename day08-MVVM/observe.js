function Observe(data) {
  this.data = data;
  this.walk(this.data);
}

Observe.prototype = {
  walk: function (data) {
    var me = this;
    Object.keys(data).forEach(function (key) {
      me.convert(key, data[key]);
    });
  },
  convert: function (key, value) {
    this.defineReactive(this.data, key, value);
  },
  // 重新定义data数据成响应式数据
  defineReactive: function (data, key, value) {
    var dep = new Dep();
    // 深度数据劫持
    var childObj = observe(value);
    // 重新定义原数据中的属性，定义成响应式数据
    Object.defineProperty(data, key, {
      enumerable: true,
      configurable: false,
      get: function () {
        if (Dep.target) {
          dep.depend();
        }
        return value;
      },
      set: function (newVal) {
        if (newVal === value) {
          return;
        }
        value = newVal;
        childObj = observe(newVal);
        // 通知更新
        dep.notify();
      },
    });
  },
};

function observe(data) {
  // 判断data是不是object或array
  if (!data || typeof data !== "object") {
    return;
  }
  return new Observe(data);
}

var uid = 0;
function Dep() {
  this.id = uid++;
  this.subs = [];
}

Dep.prototype = {
  addSub: function (sub) {
    this.subs.push(sub);
  },
  depend: function () {
    Dep.target.addDep(this);
  },
  notify: function () {
    console.log(this.subs)
    this.subs.forEach(function (sub) {
      sub.update();
    });
  },
};
