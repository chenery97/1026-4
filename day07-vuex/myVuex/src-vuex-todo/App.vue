<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header />
      <List />
      <Footer v-if="todos.length" />
    </div>
  </div>
</template>

<script>
import Header from "./views/Header";
import List from "./views/List";
import Footer from "./views/Footer";
import {mapState} from 'vuex'
export default {
  name: "App",
  computed: {
    ...mapState(['todos'])
  },
  components: {
    Header,
    List,
    Footer,
  },
};
</script>

<style>
/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>