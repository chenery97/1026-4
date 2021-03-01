<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model.trim="searchName"
      />
      <button @click="send">Search</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      searchName: "",
    };
  },
  methods: {
    send() {
      const { searchName } = this;
      if (!searchName) {
        alert("请输入搜索内容");
        return;
      }
      this.$bus.$emit('getUsers', searchName)
    },
  },
};
</script>

<style>
</style>