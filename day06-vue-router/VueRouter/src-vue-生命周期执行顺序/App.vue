<template>
  <div class="container">
    <h1 class="row">Vue Router</h1>
    <div class="row">
      <ul class="col-md-4 nav nav-pills nav-stacked">
        <li><router-link to="/home">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
      <div class="col-md-8">
        <!-- 组件缓存 -->
        <keep-alive include="Home">
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  beforeCreate() {
    console.log("App beforeCreate()");
  },
  created() {
    console.log("App created()");
  },
  beforeMount() {
    console.log("App beforeMount()");
  },
  mounted() {
    console.log("App mounted()");
  },
};
</script>

<style>
</style>