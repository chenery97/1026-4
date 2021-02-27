<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isOn" />
    </label>
    <span> <span>已完成{{completeCount}}</span> / 全部{{todos.length}} </span>
    <button class="btn btn-danger" @click="delComplete">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {
    todos: {
      type: Array,
      required: true
    },
    changeIsDone: {
      type: Function
    },
    delCompleteTodos: {
      type: Function
    }
  },
  methods: {
    delComplete() {
      this.delCompleteTodos()
    }
  },
  computed: {
    completeCount () {
      return this.todos.reduce((prev, item) => item.isDone ? ++prev : prev, 0)
    },
    isOn : {
      get() {
        return this.completeCount === this.todos.length
      },
      set (val) {
        this.changeIsDone(val)
      }
    }
  }
};
</script>

<style>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>