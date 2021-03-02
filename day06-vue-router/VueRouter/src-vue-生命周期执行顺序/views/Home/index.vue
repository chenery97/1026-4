<template>
  <div>
    <h2>Home</h2>
    <ul class="nav nav-pills">
      <li><router-link to="/home/message">message</router-link></li>
      <li><router-link to="/home/news">news</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  beforeCreate() {
    console.log("Home beforeCreate()");
  },
  created() {
    console.log("Home created()");
  },
  beforeMount() {
    console.log("Home beforeMount()");
  },
  mounted() {
    console.log("Home mounted()");
  },
  beforeDestroy() {
    console.log("Home beforeDestroy()");
  },
  destroyed() {
    console.log("Home destroyed()");
  },
  activated(){
    console.log("Home activeaed()")
  },
  deactivated(){
    console.log('Home deactivated()')
  }
};
</script>

<style>
</style>