<template>
  <div>
    TestComponent组件
    <p>{{ num }}</p>
    <button @click="clickHandle">按钮</button>
  </div>
</template>

<script>
export default {
  name: "TestComponent",
  data() {
    return {
      num: 0,
    };
  },
  methods: {
    clickHandle() {
      this.num++;
    },
  },
};
</script>

<style></style>
