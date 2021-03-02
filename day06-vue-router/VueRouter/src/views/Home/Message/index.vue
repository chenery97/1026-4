<template>
  <div>
    <ul>
      <li v-for="message in messages" :key="message.id">
        <router-link :to="`/home/message/detail/${message.id}`">{{message.title}}</router-link>
        <button @click="push(message.id)">push</button>
        <button @click="replace(message.id)">replace</button>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      messages: [
        { id: 1, title: "message001" },
        { id: 2, title: "message002" },
        { id: 3, title: "message003" },
      ],
    };
  },
  methods: {
    push(id) {
      // this.$router.history.push('/home/message/detail/' + id)
      this.$router.history.push({
        name: 'Detail',
        params: {
          id
        },
        query: {
          xxx: 'yyy'
        }
      })
    },
    replace(id) {
      this.$router.history.replace('/home/message/detail/' + id)
    }
  }
};
</script>

<style>
</style>