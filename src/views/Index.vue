<template>
  <div id="posts">
    <div class="container">
      <div class="page-title">All Posts</div>

      <PostItem
        v-for="post in posts"
        :key="post.id"
        :title="post.title"
        :postId="post.id"
        :thumbnail="post.thumbnail"
        :vote="post.vote"
        >{{
          post.description[0].length > 255
            ? post.description[0].substr(0, 255) + "..."
            : post.description[0]
        }}</PostItem
      >
    </div>
  </div>
</template>

<script>
import PostItem from '@/components/PostItem.vue';
import { mapState } from 'vuex';

export default {
  components: {
    PostItem
  },
  computed: {
    ...mapState(['posts'])
  }
}
</script>

<style lang="scss" scoped>
#posts {
  margin-bottom: 50px;
}
</style>