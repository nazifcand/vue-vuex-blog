<template>
  <div class="container">
    <div class="page-title">Top Ratings({{ topRatingPosts.length }})</div>
    <listPosts :posts="topRatingPosts" />
  </div>
</template>

<script>
import listPosts from '@/components/listPosts.vue';
import { mapGetters } from 'vuex';

export default {
  created() {
    this.$store.dispatch('topRatingPosts');
  },
  components: { listPosts },
  computed: {
    ...mapGetters(['topRatingPosts'])
  }
}
</script>