import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const moduleA = {
  namespaced: true,
  state: {
    count: 0,
  },
  getters: {
    doubleCount(state) {
      return state.count * 2;
    },
  },
  actions: {
    incrementIfOdd({ state, commit, rootState }) {
      console.log(state.count, rootState.count);
      if (state.count & (1 === 1)) {
        commit("increment");
      }
    },
  },
  mutations: {
    increment(state) {
      console.log(state.count);
      state.count++;
    },
  },
};
const moduleB = {
  namespaced: true,
  modules: {
    subModule: {
      namespaced: true,
      state: { count: 999 },
      getters: {
        login() {
          // getters['subModuel/login']
          return "subModules in b, getters";
        },
      },
      actions: {
        login() {
          // dispatch['subModule/login']
          console.log("subModules in b, actions");
        },
      },
      mutations: {
        login() {
          // commit['subModule/login']
          console.log("subModules in b, mutations");
        },
      },
    },
  },
  state: {
    count: 10,
  },
  getters: {
    showGetters(state, getters, rootState, rootGetters) {
      console.log(
        "b state>>>",
        state,
        "b getters>>>",
        getters,
        "root state>>>",
        rootState,
        "root getters>>>",
        rootGetters
      );
      return 0;
    },
  },
  actions: {},
  mutations: {},
};

const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB,
  },
  state: {
    count: 100,
  },
  getters: {
    login(state, getters, rootState) {
      console.log(
        "root state>>>",
        state,
        "root getters>>>",
        getters,
        "root rootState>>>",
        rootState
      );
      return "subModules in root, getters";
    },
  },
  actions: {
    login() {
      console.log("subModules in root, actions");
    },
  },
  mutations: {
    login() {
      console.log("subModules in root, mutations");
    },
  },
});

// console.log(store.state.a.count); // moduleA的状态
// console.log(store.state.count); // moduleA的状态
// // console.log(store.state.b); // moduleB的状态
// store.commit('a/increment');
// store.dispatch('a/incrementIfOdd');
// console.log(store.state.count); // moduleA的状态

// store.commit("b/subModule/login");
// store.dispatch("b/subModule/login");
// console.log(store.getters["b/subModule/login"]);
// store.commit("login");
// store.dispatch("login");
console.log(store.getters.login);

export default store;
