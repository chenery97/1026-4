<template>
  <div>Child...
    <button @click="add">按钮</button>
    <button @click="changeShow">切换h1标签显示隐藏</button>
  </div>

</template>

<script>
export default {
  name: 'Child',
  methods:{
    add() {
      /* 
        通过@自定义事件的方式绑定的自定义事件可以使用两种方式触发事件
      */
      // 触发事件方法一
      this.$listeners.add(2)
      // 触发事件方法二
      this.$emit('add', 3)
    },
    changeShow() {
      /* 
        通过ref绑定的自定义事件方式只能通过$emit()这种方式触发
      */
      // this.$listeners.changeShow() // 这种方式获取不到ref自定义事件
      this.$emit('changeShow')
    }
  },
  mounted() {
    console.log(this)
  }
}
</script>

<style>

</style>