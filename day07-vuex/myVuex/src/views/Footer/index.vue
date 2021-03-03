<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isChecked" />
    </label>
    <span>
      <span>已完成{{ completeTotal }}</span> / 全部{{ total }}
    </span>
    <button class="btn btn-danger">清除已完成任务</button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "Footer",
  methods: {
    ...mapMutations(["IS_CHECKED"]),
  },
  computed: {
    ...mapGetters(["total", "completeTotal"]),
    isChecked: {
      get() {
        return this.total === this.completeTotal;
      },
      set(val) {
        this.IS_CHECKED(val);
      },
    },
  },
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