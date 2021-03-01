<template>
  <div>
    <h2 v-show="showPage === 'text'">请输入用户名搜索</h2>
    <h2 v-show="showPage === 'loading'">Loading...</h2>
    <div class="row" v-show="showPage === 'users'">
      <div class="card" v-for="user in users" :key="user.id">
        <a :href="user.html_url" target="_blank">
          <img :src="user.avatar_url" style="width: 100px" />
        </a>
        <p class="card-text">{{ user.login }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "List",
  data() {
    return {
      showPage: "text",
      users: [],
    };
  },
  methods: {
    async getUsers(searchName) {
      this.showPage = "loading";
      const res = await axios.get(
        `https://api.github.com/search/users?q=${searchName}`
      );
      this.showPage = "users";
      const users = res.data.items;
      this.users = users.map(user => {
        return {
          id: user.id,
          login: user.login,
          html_url: user.html_url,
          avatar_url: user.avatar_url
        }
      })
    },
  },
  mounted() {
    this.$bus.$on("getUsers", this.getUsers);
  },
};
</script>

<style>
</style>