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
      // 原接口后端处理的跨域 cors
      // const res = await axios.get(`https://api.github.com/search/users?q=${searchName}`);
      // 自己写的接口，存在跨域问题
      // const res = await axios.get(`http://localhost:9898/search/users?q=${searchName}`);
      // 使用代理解决跨域 proxy: "http://localhost:9898"
      // const res = await axios.get(`/search/users?q=${searchName}`);
      // 使用代理解决跨域 proxy : {"^/api": {target:"http://localhos:9898", pathRewrite: {"^api/": ""}}} 请求转发时可以重写路径
      const res = await axios.get(`api/search/users?q=${searchName}`);
      this.showPage = "users";
      const users = res.data.items;
      this.users = users.map((user) => {
        return {
          id: user.id,
          login: user.login,
          html_url: user.html_url,
          avatar_url: user.avatar_url,
        };
      });
    },
  },
  mounted() {
    this.$bus.$on("getUsers", this.getUsers);
  },
};
</script>

<style>
</style>