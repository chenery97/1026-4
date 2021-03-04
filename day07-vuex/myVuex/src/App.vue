<template>
  <div>
    <p>a.state.count: {{ a }}</p>
    <p>b.state.subModule.count: {{ b }}</p>
    <button @click="clickHandle">increment</button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "App",
  mounted() {
    // console.log(this.$store.state);
  },
  computed: {
    ...mapState({
      a: state => state.a.count,
      b: state => state.b.subModule.count
    }),
  },
  methods: {
    ...mapActions(['b/subModule/login']),
    clickHandle() {
      this['b/subModule/login']()
    }
  }
};
</script>

<style>
</style>