function Watcher(vm, exp, cb) {
  this.vm = vm;
  this.exp = exp;
  this.cb = cb;
  this.depIds = {}; // 在当前watcher实例上存储的dep，dep：每一个data数据
  this.value = this.get(); // 获取原data的数据
}

Watcher.prototype = {
  // 更新数据
  update: function () {
    this.run();
  },
  run: function () {
    // 获取数据
    var value = this.get();
    var oldValue = this.value;
    if (value !== oldValue) {
      this.value = value;
      // 调用更新方法
      this.cb.call(this.vm, value, oldValue);
    }
  },
  addDep: function (dep) {
    if (!this.depIds.hasOwnProperty(dep.id)) {
      dep.addSub(this);
      this.depIds[dep.id] = dep;
    }
  },
  get: function () {
    // Dep.target：watcher
    Dep.target = this;
    // 获取vm的数据
    var value = this.getVMVal();
    Dep.target = null;
    return value;
  },
  getVMVal: function () {
    var exp = this.exp.split(".");
    var val = this.vm._data;
    exp.forEach(function (key) {
      val = val[key];
    });
    return val;
  },
};
