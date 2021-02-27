<template>
  <div>
    <h1>App组件</h1>
    <Child />
    <button @click="$bus.$emit('AppToChild', 'hello Child component')">App按钮</button>
  </div>
</template>

<script>
import Child from './Child'
export default {
  name: 'App',
  methods: {
    childToApp (msg) {
      console.log('Child 给 APP 发送数据>>>', msg)
    }
  }, 
  mounted () {
    this.$bus.$on('ChildToApp', this.childToApp)
  },
  beforeDestroy() {
    this.$bus.$off('ChildToApp', this.childToApp)
  },
  components: {
    Child
  }
}
</script>

<style>

</style>