<template>
  <div id="new-comment">
    <textarea placeholder="add new comment" v-model="comment"></textarea>
    <button @click="addComment">Send</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comment: ''
    }
  },
  methods: {
    addComment() {
      this.$store.dispatch('addComment', {
        postId: parseInt(this.$route.params.id),
        date: Date.now(),
        comment: this.comment,
        // id: Math.random()
      });
      this.comment = '';
    }
  }
}
</script>

<style lang="scss">
textarea {
  width: 100%;
  padding: 20px;
  font-family: "Fira Code";
  font-size: 14px;
  border: 1px solid #eee;
  border-radius: 5px;
  margin-bottom: 10px;
  box-sizing: border-box;
  resize: none;
  min-height: 150px;

  &:focus {
    outline: none;
  }
}

button {
  border: none;
  padding: 15px 40px;
  font-size: 14px;
  font-family: "Fira Code";
  font-weight: bold;
  cursor: pointer;
  background-color: #ff374a;
  color: #fff;
  transition: 300ms all ease;

  &:hover {
    background-color: darken(#ff374a, 10);
  }
}
</style>