<template>
  <div class="container">
    <div class="page-title">Top Rating</div>
    <PostItem
      v-for="post in topRatingPosts"
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
</template>

<script>
import PostItem from '@/components/PostItem.vue';
import { mapGetters } from 'vuex';

export default {
  created() {
    this.$store.dispatch('topRatingPosts');
  },
  components: { PostItem },
  computed: {
    ...mapGetters(['topRatingPosts'])
  }
}
</script>