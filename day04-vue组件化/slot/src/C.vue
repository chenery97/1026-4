<template>
  <div>
    <h2>C........</h2>
    <!-- 作用域插槽使用 -->
    <slot name="ccc" :msg="msg" />
  </div>
</template>

<script>
export default {
  name: "C",
  data() {
    return {
      msg: "我是C组件的数据",
    };
  },
};
</script>

<style>
</style>