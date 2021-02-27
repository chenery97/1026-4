<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo="addTodo" />
      <List :todos="todos" :updateTodo="updateTodo" :delTodo="delTodo" />
      <Footer
        v-if="todos.length"
        :todos="todos"
        :changeIsDone="changeIsDone"
        :delCompleteTodos="delCompleteTodos"
      />
    </div>
  </div>
</template>

<script>
import Header from "./views/Header";
import List from "./views/List";
import Footer from "./views/Footer";
import { setLocalStorage, getLocalStorage } from "./assets/js/localStorage";
export default {
  name: "App",
  components: {
    Header,
    List,
    Footer,
  },
  data() {
    return {
      todos: [
        { id: 1, name: "睡觉", isDone: false },
        { id: 2, name: "吃饭", isDone: false },
        { id: 3, name: "敲代码", isDone: false },
      ],
    };
  },
  methods: {
    addTodo(name) {
      this.todos.unshift({ id: Date.now(), name, isDone: false });
    },
    updateTodo(id) {
      const todo = this.todos.find((item) => item.id === id);
      todo.isDone = !todo.isDone;
      // setLocalStorage('todos', this.todos)
    },
    delTodo(id) {
      this.todos = this.todos.filter((item) => item.id !== id);
    },

    changeIsDone(bool) {
      this.todos.forEach((item) => (item.isDone = bool));
      // setLocalStorage('todos', this.todos)
    },
    delCompleteTodos() {
      this.todos = this.todos.filter((item) => !item.isDone);
    },
  },
  watch: {
    todos: {
      handler (newVal) {
        console.log('watch todos', newVal)
        setLocalStorage('todos', newVal)
      },
      deep: true
    }
  },
  mounted() {
    const todos = localStorage.getItem("todos");
    console.log(todos);
    if (todos) {
      this.todos = getLocalStorage("todos");
    }
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