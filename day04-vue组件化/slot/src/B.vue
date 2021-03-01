<template>
  <div>
    <h2>B.........</h2>
    <!-- 具名插槽使用 -->
    <slot name="xxx" />
    <slot name="yyy" />
    <hr />
    <slot name="zzz" />
  </div>
</template>

<script>
export default {
  name: "B",
};
</script>

<style>
</style>