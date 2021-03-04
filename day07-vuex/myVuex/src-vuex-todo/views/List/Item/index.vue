<template>
  <li>
    <label>
      <input
        type="checkbox"
        v-model="todo.isDone"
        @click="UPDATE_TODO(todo.id)"
      />
      <span>{{ todo.name }}</span>
    </label>
    <button class="btn btn-danger" @click="DEL_TODO(todo.id)">删除</button>
  </li>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Item",
  props: ["todo"],
  methods: {
    ...mapMutations(["UPDATE_TODO", "DEL_TODO"]),
  },
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
li:hover button.btn {
  display: block;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>