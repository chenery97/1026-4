export default {
  // 函数接收一个store对象
  increment({ commit }, num = 1) {
    // 触发某个mutation函数
    commit("INCREMENT", num);
  },
  decrement({ commit }, num = 1) {
    commit("DECREMENT", num);
  },
  // 异步操作
  asyncIncrement({ commit }) {
    clearTimeout(this.$timer);
    // 模拟异步操作
    this.$timer = setTimeout(() => {
      // 调用store的dispatch触发同步计数的方法
      commit("INCREMENT", 2);
    }, 2000);
  },
};
