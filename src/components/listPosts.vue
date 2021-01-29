<template>
  <div class="post" v-for="post in posts" :key="post.id">
    <router-link
      :to="{ name: 'Post', params: { id: post.id, title: post.title } }"
      class="post-image"
    >
      <img :src="post.thumbnail" />
    </router-link>

    <div class="post-contents">
      <router-link
        :to="{ name: 'Post', params: { id: post.id, title: post.title } }"
        class="post-title"
      >
        <h1>{{ post.title }}</h1>
      </router-link>

      <p class="post-description">
        {{
          post.description.length > 255
            ? post.description.replace(/(<([^>]+)>)/gi, "").substr(0, 310) +
              "..."
            : post.description.replace(/(<([^>]+)>)/gi, "")
        }}
      </p>

      <div class="post-vote-count">
        Oylama: <strong>{{ post.vote }}</strong>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    posts: { type: Object, required: true }
  }
}
</script>

<style lang="scss" scoped>
.post {
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 15px;
    padding-bottom: 15px;
    border-bottom: 1px solid #eee;
  }

  .post-image {
    width: 300px;
    margin-right: 25px;

    img {
      width: 100%;
    }
  }

  .post-contents {
    flex: 1;
    display: flex;
    flex-direction: column;

    .post-title {
      font-size: 22px;
      font-weight: 600;
      margin-bottom: 10px;
    }

    .post-description {
      font-size: 12px;
      color: #777;
    }

    .post-vote-count {
      margin-top: 25px;
    }
  }
}
</style>