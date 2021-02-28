<template>
  <div class="col-md-4">
    <form class="form-horizontal">
      <div class="form-group">
        <label>用户名</label>
        <input
          type="text"
          class="form-control"
          placeholder="用户名"
          v-model.trim="comment.username"
        />
      </div>
      <div class="form-group">
        <label>评论内容</label>
        <textarea
          class="form-control"
          rows="6"
          placeholder="评论内容"
          v-model.trim="comment.content"
        ></textarea>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button
            type="button"
            class="btn btn-default pull-right"
            @click="submit"
          >
            提交
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddComment",
  data() {
    return {
      comment: {
        username: "",
        content: "",
      },
    };
  },
  methods: {
    submit() {
      const { username, content } = this.comment;
      if (!username || !content) {
        alert("请填写用户名或评论内容！！！");
        return;
      }
      this.$bus.$emit("addComment", this.comment);
      this.comment.username = "";
      this.comment.content = "";
    },
  },
};
</script>

<style>
</style>