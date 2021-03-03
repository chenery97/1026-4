/* 
  on(eventName, callback) // 绑定持久性事件
  once(eventName, callback) // 绑定一次性事件
  off(eventName, callback) // 解绑指定事件的指定回调
    off(eventName) // 解绑指定事件的所有回调
    off() // 解绑所有事件的所有回调
  emit(eventName, ...args) // 触发事件
*/

class Event {
  // 定义一个容器，存储绑定的事件，并且要保存在实例上
  constructor() {
    this.events = {};
  }
  /**
   *
   * @param {String} eventName 事件名称
   * @param {Function} callback 事件回调函数
   */
  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [callback];
      return;
    }
    this.events[eventName].push(callback);
  }
  /**
   *
   * @param {String} eventName 事件名称
   * @param {Function} callback 事件回调函数
   */
  once(eventName, callback) {
    const cb = (...args) => {
      callback(...args);
      this.off(eventName, cb);
    };
    this.on(eventName, cb);
  }
  /**
   *
   * @param {String} eventName
   * @param {Function} callback
   */
  off(eventName, callback) {
    if (!this.events[eventName]) {
      if (callback === undefined) {
        console.log('解绑所有事件所有回调>>>>')
        this.events = {};
      }
      return
    };
    if (eventName && callback) {
      this.events[eventName] = this.events[eventName].filter(
        (cb) => cb !== callback
      );
    } else if (eventName && !callback) {
      this.events[eventName] = [];
    }
  }
  /**
   *
   * @param {String} eventName 事件名称
   * @param  {...any} args 事件回调函数的参数
   */
  emit(eventName, ...args) {
    if (!this.events[eventName]) return;
    this.events[eventName].forEach((cb) => cb(...args));
  }
}

function clickHandle1(x, y) {
  console.log("emit click event, x + y = ", x + y);
}
function clickHandle2(x, y) {
  console.log("emit click event, x - y = ", x - y);
}
function onceHandle(x, y) {
  console.log("emit once event, x * y = ", x * y);
}
function mouseHanlde() {
  console.log("emit mouse event...");
}

const bus = new Event();

bus.on("click", clickHandle1);
bus.on("click", clickHandle2);
bus.on("mouse", mouseHanlde);
bus.once("click", onceHandle); // 绑定一次性事件

bus.emit("click", 1, 2);
bus.emit("mouse");

bus.off("click", clickHandle1); // 解绑指定回调
bus.emit("click", 9, 9);
bus.emit("mouse");

bus.off("mouse"); // 解绑指定事件所有回调
bus.emit("click", 9, 9);
bus.emit("mouse");

bus.off(); // 解绑所有事件的所有回调
bus.emit("click", 10, 10);
bus.emit("mouse");

// bus.off("click", clickHandle);

// bus.emit("click", 9, 9);
