<template>
  <div>
    <h1>App组件</h1>
    <TestComponent />
  </div>
</template>

<script>
import TestComponent from "./views/TestComponent";
export default {
  name: "App",
  components: {
    TestComponent,
  },
};
</script>

<style>
h1 {
  font-size: 30px;
  color: skyblue;
}
</style>
