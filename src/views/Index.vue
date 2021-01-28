<template>
  <div id="posts">
    <div class="container">
      <div class="page-title">All Posts({{ posts.length }})</div>

      <PostItem
        v-for="post in posts"
        :key="post.id"
        :title="post.title"
        :postId="post.id"
        :thumbnail="post.thumbnail"
        :vote="post.vote"
        >{{
          post.description.length > 255
            ? post.description.replace(/(<([^>]+)>)/gi, "").substr(0, 310) +
              "..."
            : post.description.replace(/(<([^>]+)>)/gi, "")
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