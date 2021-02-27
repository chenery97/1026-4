<template>
  <div>
    <h2>Child</h2>
    <button @click="$bus.$emit('ChildToApp', 'hello App component')">Child按钮</button>
  </div>
</template>

<script>
export default {
  name: 'Child',
  methods: {
    appToChild(msg) {
      console.log('App 给 Child 发送数据>>>', msg)
    }
  },
  mounted() {
    this.$bus.$on('AppToChild', this.appToChild)
  },
  beforeDestroy() {
    this.$bus.$off('AppToChild', this.appToChild)
  }
}
</script>

<style>

</style>