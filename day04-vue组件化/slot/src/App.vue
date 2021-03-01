<template>
  <div>
    <h1>App..........</h1>

    <!-- 1.默认插槽 -->
    <A>
      <p>我是默认插槽</p>
    </A>

    <!-- 2.具名插槽 -->
    <B>
      <!-- 旧语法 -->
      <template slot="xxx">
        <button>具名插槽按钮0</button>
        <p>我是具名插槽0</p>
      </template>
      <!-- 新语法 -->
      <template v-slot:yyy>
        <button>具名插槽按钮1</button>
        <p>我是具名插槽1</p>
      </template>
      <!-- 新语法的简写 -->
      <template #zzz>
        <button>具名插槽按钮2</button>
        <p>我是具名插槽2</p>
      </template>
    </B>

    <!-- 3.作用域插槽 -->
    <C>
      <!-- <template #ccc="slotProp">
        <button>作用域插槽按钮0</button>
        <p>我是作用域插槽0</p>
        <span>{{ slotProp.msg }}</span>
      </template> -->
      
      <!-- #ccc="{ msg }" 可以解构 -->
      <template #ccc="{ msg }">
        <button>作用域插槽按钮0</button>
        <p>我是作用域插槽0</p>
        <span>{{ msg }}</span>
      </template>
    </C>
  </div>
</template>

<script>
import A from "./A";
import B from "./B";
import C from "./C";
export default {
  name: "App",
  components: {
    A,
    B,
    C,
  },
};
</script>

<style>
</style>