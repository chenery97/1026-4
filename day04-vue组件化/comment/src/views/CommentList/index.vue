<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2 v-if="!comments.length">暂无评论，点击左侧添加评论！！！</h2>
    <ul class="list-group">
      <CommentItem
        v-for="comment in comments"
        :key="comment.id"
        :comment="comment"
      />
    </ul>
  </div>
</template>

<script>
import CommentItem from "./CommentItem";
export default {
  name: "CommentList",
  data() {
    return {
      comments: [
        { id: 1, username: "zs", content: "hello ls" },
        { id: 2, username: "ls", content: "hello zs" },
      ],
    };
  },
  methods: {
    addComment(comment) {
      this.comments.unshift({ id: Date.now(), ...comment });
    },
    delComment(id) {
      this.comments = this.comments.filter((comment) => comment.id !== id);
    },
  },
  mounted() {
    this.$bus.$on("addComment", this.addComment);
    this.$bus.$on("delComment", this.delComment);
  },
  components: {
    CommentItem,
  },
};
</script>

<style>
.reply {
  margin-top: 0px;
}
</style>