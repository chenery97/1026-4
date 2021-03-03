<template>
  <div>
    <p>
      click: {{ $store.state.count }} tiems, count is
      {{ $store.state.count % 2 === 0 ? "偶数" : "奇数" }}
    </p>
    <button @click="increment">increment</button>
    <button @click="decrement">decrement</button>
    <button @click="odd">increment if odd</button>
    <button @click="asyncIncrement">increment async</button>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    increment() {
      // 触发actions中指定action函数
      this.$store.dispatch("increment");
    },
    decrement() {
      this.$store.dispatch("decrement");
    },
    odd() {
      // 如果为偶数，不计数
      if (this.$store.state.count % 2 === 0) return;
      // 奇数，计数
      this.$store.dispatch("increment");
    },
    asyncIncrement() {
      this.$store.dispatch("asyncIncrement");
    },
  },
};
</script>

<style>
</style>