<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2 v-if="!comments.length">暂无评论，点击左侧添加评论！！！</h2>
    <ul class="list-group">
      <CommentItem v-for="comment in comments" :key="comment.id" :comment="comment" :delComment="delComment" />
    </ul>
  </div>
</template>

<script>
import CommentItem from './CommentItem'
export default {
  name: "CommentList",
  data () {
    return {
      isShow: false
    }
  },
  props: {
    comments: {
      type: Array,
    },
    delComment: {
      type: Function
    }
  },
  components: {
    CommentItem
  }
};
</script>

<style>
.reply {
  margin-top: 0px;
}

</style>