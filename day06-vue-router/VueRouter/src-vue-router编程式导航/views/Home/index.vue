<template>
  <div>
    <h2>Home</h2>
    <ul class="nav nav-pills">
      <li ><router-link to="/home/message">message</router-link></li>
      <li><router-link to="/home/news">news</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style>

</style>