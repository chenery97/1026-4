<template>
  <div>
    <ul>
      <li v-for="(value, key) in message" :key="key">
        {{ key }} - {{ value }}
      </li>
      <hr />
      <li v-for="(value, key) in user" :key="key">{{ key }} - {{ value }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Detail",
  props: ['id', 'name', 'age', 'msg'],
  data() {
    return {
      messages: [
        { id: 1, title: "吃饭", content: "大吃一惊" },
        { id: 2, title: "睡觉", content: "一睡千年" },
        { id: 3, title: "敲代码", content: "整天摸鱼" },
      ],
      message: {},
      users: [
        { u_id: 1, name: "jack", age: 20 },
        { u_id: 2, name: "rose", age: 18 },
        { u_id: 3, name: "jerry", age: 19 },
      ],
      user: {},
    };
  },
  /* mounted() {
    setTimeout(() => {
      this.messages = [
        { id: 1, title: "吃饭", content: "大吃一惊" },
        { id: 2, title: "睡觉", content: "一睡千年" },
        { id: 3, title: "敲代码", content: "整天摸鱼" },
      ];
      const id = +this.$route.params.id;
      this.message = this.messages.find((message) => message.id === id);
    }, 2000);
  }, */
  watch: {
    $route: {
      handler(newVal) {
        const id = +newVal.params.id;
        this.message = this.messages.find((message) => message.id === id);
        this.user = this.users.find((user) => user.u_id === id);
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>

<style>
</style>