<template>
  <div>
    <p>
      click: {{ $store.state.count }} tiems, count is
      {{ $store.getters.countType }}
    </p>
    <button @click="count('increment')">increment</button>
    <button @click="count('decrement')">decrement</button>
    <button @click="count('odd')">increment if odd</button>
    <button @click="count('asyncIncrement')">increment async</button>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    // 功能提取
    count(type) {
      // 判断点击的按钮是否为奇数是增加的按钮，并且当前的数字是否为奇数
      if (type === "odd" && this.$store.getters.countType === "偶数") return;
      // 如果点击的是奇数按钮，将type改成increment
      if (type === "odd") type = "increment";
      this.$store.dispatch(type);
    },
  },
  mounted() {
    console.log(this);
  },
};
</script>

<style>
</style>