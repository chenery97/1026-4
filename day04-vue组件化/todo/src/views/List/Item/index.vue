<template>
  <li @mouseenter="mouseHandle('block', '#eee', $event)" @mouseleave="mouseHandle('none', '#fff', $event)">
    <label>
      <input type="checkbox" v-model="isDone" />
      <span>{{todo.name}}</span>
    </label>
    <button class="btn btn-danger" @click="del">删除</button>
  </li>
</template>

<script>
export default {
  name: "Item",
  props: {
    todo: {
      type: Object
    },
    updateTodo: {
      type: Function
    },
    delTodo: {
      type: Function
    }
  },
  methods: {
    mouseHandle (isShow, color, e) {
      // 获取btn元素
      const btn = e.target.lastChild
      // 改变btn的显示隐藏
      btn.style.display = isShow
      // 改变li的背景颜色
      e.target.style.backgroundColor = color
    },
    del() {
      this.delTodo(this.todo.id)
    }
  },
  computed: {
    isDone: {
      get () {
        return this.todo.isDone
      },
      set () {
        this.updateTodo(this.todo.id)
      }
    }
  }
};
</script>

<style>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button.btn {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>