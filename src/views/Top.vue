<template>
  <div class="container">
    <div class="page-title">Top Ratings({{ topRatingPosts.length }})</div>
    <PostItem
      v-for="post in topRatingPosts"
      :key="post.id"
      :title="post.title"
      :postId="post.id"
      :thumbnail="post.thumbnail"
      :vote="post.vote"
      >{{
        post.description.length > 255
          ? post.description.replace(/(<([^>]+)>)/gi, "").substr(0, 310) + "..."
          : post.description.replace(/(<([^>]+)>)/gi, "")
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