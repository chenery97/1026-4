export default {
  // 函数接收一个state，当前实例上的state对象
  INCREMENT(state, num) {
    state.count += num;
  },
  DECREMENT(state, num) {
    state.count -= num;
  },
};
