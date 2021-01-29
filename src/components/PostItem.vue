<template>
  <div class="post">
    <router-link
      :to="{ name: 'Post', params: { id: postId, title: title } }"
      class="post-image"
    >
      <img :src="thumbnail" />
    </router-link>
    <div class="post-contents">
      <router-link
        :to="{ name: 'Post', params: { id: postId, title: title } }"
        class="post-title"
      >
        <h1>{{ title }}</h1>
      </router-link>
      <p class="post-description"><slot /></p>
      <div class="post-vote-count">
        Oylama: <strong>{{ vote }}</strong>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    vote: { type: Number, required: true },
    postId: { type: Number, required: true },
    thumbnail: { type: String, required: true }
  },
  methods: {
    randomHex() {
      return Math.floor(Math.random() * 16777215).toString(16);;
    }
  },
  computed: {
    getUri() {
      return `/post/${this.postId}`
    },
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