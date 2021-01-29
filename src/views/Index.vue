<template>
  <div id="posts">
    <div class="container">
      <div class="page-title">All Posts({{ posts.length }})</div>
      <listPosts :posts="posts" />
    </div>
  </div>
</template>

<script>
import listPosts from '@/components/listPosts.vue';
import { mapState } from 'vuex';

export default {
  components: {
    listPosts
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