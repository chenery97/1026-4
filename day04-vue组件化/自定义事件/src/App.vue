<template>
  <div>
    <!-- 通过ref可以获取到dom元素或组件实例对象 -->
    <Child @add="add" ref="child" />
    <h1 v-show="isShow">App组件</h1>
    <p>{{num}}</p>
  </div>
</template>

<script>
import Child from './Child'
export default {
  name: 'App',
  data() {
    return {
      num: 0,
      isShow: true
    }
  },
  methods: {
    add(n) {
      this.num += n
    },
    changeShow() {
      this.isShow = !this.isShow
    }
  },
  mounted() {
    // 绑定自定义事件
    console.log(this)
    this.$refs.child.$on('changeShow', this.changeShow)
  },
  beforeDestroy() {
    // 解绑自定义事件
    this.$refs.child.$off('changeShow', this.changeShow)
  },
  components: {
    Child
  }
}
</script>

<style>

</style>