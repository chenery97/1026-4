import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  // 定义集中式共享状态的数据
  state: {
    count: 0,
  },
  // 定义包含n个间接修改数据的函数对象
  actions: {
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
  },
  // 定义包含n个直接修改数据的函数对象
  mutations: {
    // 函数接收一个state，当前实例上的state对象
    INCREMENT(state, num) {
      state.count += num;
    },
    DECREMENT(state, num) {
      state.count -= num;
    },
  },
});
