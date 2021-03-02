<template>
  <div class="container">
    <h1 class="row">Vue Router</h1>
    <div class="row">
      <ul class="col-md-4 nav nav-pills nav-stacked">
        <li><router-link to="/home">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
      <div class="col-md-8">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
</style>