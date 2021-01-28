import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    posts: [],
    singlePost: {},
    postComments: [],
    topRatingPosts: []
  },
  getters: {
    topRatingPosts(state) {
      return state.topRatingPosts;
    },
    singlePost(state) {
      return state.singlePost;
    },
    getPostComments(state) {
      return state.postComments;
    }
  },
  mutations: {
    setDatas(state, posts) {
      state.posts = posts;
    },

    setSinglePost(state, singlePost) {
      state.singlePost = singlePost;
    },

    setAddComment(state, comment) {
      state.postComments.push(comment);
    },

    setPostComments(state, comments) {
      state.postComments = comments;
    },

    setTopRatingPosts(state, posts) {
      state.topRatingPosts = posts;
    }

  },
  actions: {
    fetchDatabase(context) {
      axios.get('/posts')
        .then(result => context.commit('setDatas', result.data))
        .catch(err => console.log(err))
    },

    topRatingPosts(context) {
      axios.get('/posts?_sort=vote&_order=desc')
        .then(result => context.commit('setTopRatingPosts', result.data))
        .catch(err => console.log(err))
    },

    getSinglePost(context, id) {
      axios.get('/posts/' + id)
        .then(result => {
          context.commit('setSinglePost', result.data)
          context.dispatch('getComments', id);
          context.dispatch('topRatingPosts');
        })
        .catch(err => console.log(err))
    },

    getComments(context, id) {
      axios.get('/comments?postId=' + id)
        .then(result => {
          context.commit('setPostComments', result.data);
        })
        .catch(err => console.log(err))
    },

    addComment(context, data) {
      axios.post('/comments', data)
        .then(result => context.commit('setAddComment', result.data))
        .catch(err => console.log(err));
    },

    likePost(context, id) {
      const newData = context.state.singlePost;
      newData.vote++;

      axios.put(`/posts/${id}`, newData)
        .then(result => context.dispatch('topRatingPosts'))
        .catch(err => console.log(err));
    },
    disLikePost(context, id) {
      const newData = context.state.singlePost;
      if (newData.vote > 0) {
        newData.vote--;
        axios.put(`/posts/${id}`, newData)
          .then(result => context.dispatch('topRatingPosts'))
          .catch(err => console.log(err));
      }
    }
  }
})
