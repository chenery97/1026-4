<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对React的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <AddComment :comments="comments" :addComment="addComment" />
      <CommentList :comments="comments" :delComment="delComment" />
    </div>
  </div>
</template>

<script>
import AddComment from "./views/AddComment";
import CommentList from "./views/CommentList";
export default {
  name: "App",
  data() {
    return {
      comments: [
        { id: 1, username: "zs", content: "Vue is so good!!!" },
        { id: 2, username: "ls", content: "React is also not bad!!!" },
      ],
    };
  },
  methods: {
    addComment(comment) {
      console.log(comment)
      this.comments.unshift(comment);
    },
    delComment(id) {
      console.log(id)
      this.comments = this.comments.filter(item => item.id !== id)
    }
  },
  components: {
    AddComment,
    CommentList,
  },
};
</script>

<style>
</style>