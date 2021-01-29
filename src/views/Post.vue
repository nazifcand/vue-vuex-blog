<template>
  <div id="single-post">
    <div class="container">
      <!-- #post start -->
      <div id="post">
        <div class="postImage" v-if="singlePost.thumbnail">
          <img :src="singlePost.thumbnail" />
        </div>
        <h1 class="post-title">{{ singlePost.title }}</h1>

        <div class="post-description" v-html="singlePost.description"></div>

        <!-- #comments start -->
        <div id="comments">
          <div class="title">
            Comments ({{ getPostComments ? getPostComments.length : 0 }})
          </div>
          <CommentItem
            v-for="(comment, key) in getPostComments"
            :key="key"
            :date="comment.date"
            >{{ comment.comment }}</CommentItem
          >
          <NewComment />
        </div>
        <!-- #comments end -->
      </div>
      <!-- #post end -->

      <!-- #side-bar start -->
      <div id="side-bar">
        <!-- .widget start -->
        <div class="widget vote-widget">
          <div class="widget-title">Vote this post</div>
          <div class="widget-content">
            <div class="post-vote-count">{{ singlePost.vote }}</div>
            <div class="post-vote">
              <button class="post-decrease" @click="disLikePost">
                Dislike
              </button>
              <button class="post-increase" @click="likePost">Like</button>
            </div>
          </div>
        </div>
        <!-- .widget end -->

        <!-- .widget start -->
        <div class="widget posts-widget">
          <div class="widget-title">Top Rating</div>
          <div class="widget-content">
            <!-- .post start -->
            <router-link
              v-for="post in topRatingPosts"
              :key="post.id"
              :to="{ name: 'Post', params: { id: post.id, title: post.title } }"
              class="post"
            >
              <img :src="post.thumbnail" />
              <h3>{{ post.title }}</h3>
              <span>{{ post.vote }}</span>
            </router-link>
            <!-- .post end -->
          </div>
        </div>
        <!-- .widget end -->
      </div>
      <!-- #side-bar end -->
    </div>
  </div>
</template>

<script>
import CommentItem from '@/components/CommentItem.vue';
import NewComment from '@/components/NewComment.vue';
import { mapGetters } from 'vuex';

export default {
  components: { CommentItem, NewComment },
  created() {
    this.fetchData();
  },

  watch: {
    $route(to, from) {
      if (to.name === 'Post' && from.params.id !== to.params.id) {
        this.fetchData();
      }
    },
  },

  computed: {
    ...mapGetters(['topRatingPosts', 'singlePost', 'getPostComments']),
  },

  methods: {
    fetchData() {
      this.$store.dispatch('getSinglePost', this.$route.params.id);
    },

    getPostLink(id) { return `/post/${id}` },

    likePost() {
      this.$store.dispatch('likePost', this.$route.params.id);
    },

    disLikePost() {
      this.$store.dispatch('disLikePost', this.$route.params.id);
    }
  }
}
</script>

<style lang="scss" >
#single-post {
  display: flex;
  margin-bottom: 50px;

  .container {
    display: flex;
  }
}

#post {
  flex: 1;
  display: flex;
  flex-direction: column;

  .postImage {
    width: 100%;
    // height: 400px;
    margin-bottom: 25px;

    img {
      width: 100%;
    }
  }

  .post-description {
    p {
      color: #777;

      &:not(:last-child) {
        margin-bottom: 15px;
      }
    }
  }

  .post-title {
    font-size: 28px;
    margin-bottom: 25px;
    font-weight: bold;
  }
}

#comments {
  margin: 75px 0 25px;
  display: flex;
  flex-direction: column;

  .title {
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 25px;
  }
}

#side-bar {
  width: 300px;
  min-width: 300px;
  min-height: 150px;
  margin-left: 25px;

  .widget {
    width: 100%;
    border: 1px solid #eee;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 20px;

    &:not(:last-child) {
      margin-bottom: 25px;
    }

    .widget-title {
      font-weight: 500;
      border-bottom: 1px solid #eee;
      text-transform: uppercase;
      padding-bottom: 15px;
      margin-bottom: 10px;
    }

    .widget-content {
      display: flex;
      flex-direction: column;
    }

    &.vote-widget {
      .widget-content {
        align-items: center;
      }

      .post-vote-count {
        font-size: 96px;
        font-weight: bold;
      }

      .post-vote {
        display: flex;

        button {
          margin: 5px;
          padding: 10px 15px;
          border: none;
          font-weight: 500;
          cursor: pointer;
          font-family: "Fira Code";
          transition: 300ms all ease;

          &.post-decrease {
            color: #fff;
            background-color: #ed4e6e;

            &:hover {
              background-color: darken(#ed4e6e, 15);
            }
          }

          &.post-increase {
            color: #fff;
            background-color: #4becc9;

            &:hover {
              background-color: darken(#4becc9, 15);
            }
          }
        }
      }
    }

    &.posts-widget {
      .post {
        display: flex;
        align-items: center;

        &:not(:last-child) {
          margin-bottom: 15px;
        }

        &:hover {
          span {
            color: #091921;
          }
        }

        img {
          width: 75px;
          margin-right: 15px;
        }

        h3 {
          flex: 1;
          font-size: 10px;
          font-weight: 500;
        }

        span {
          font-weight: 600;
          margin-left: 10px;
          font-size: 16px;
        }
      }
    }
  }
}
</style>