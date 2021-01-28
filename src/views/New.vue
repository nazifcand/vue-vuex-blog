<template>
  <div class="container">
    <div class="page-title">New Post</div>

    <form @submit.prevent="addPost">
      <div class="group">
        <span>Başlık</span>
        <input type="text" v-model="title" spellcheck="false" required />
      </div>

      <div class="group">
        <span>İçerik</span>
        <textarea
          name="description"
          v-model="description"
          spellcheck="false"
        ></textarea>
      </div>

      <div class="group">
        <span>Öne çıkan görsel adresi</span>
        <input type="text" v-model="thumbnail" spellcheck="false" />
      </div>

      <div class="group">
        <span>Kaynak</span>
        <input type="text" v-model="source" spellcheck="false" />
      </div>

      <div class="group">
        <button type="submit">Add</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      description: '',
      thumbnail: '',
      source: ''
    }
  },
  methods: {
    addPost() {
      const newPost = { title: this.title, description: this.description, thumbnail: this.thumbnail, source: this.source };

      this.$store.dispatch('addPost', newPost)
        .then(createdPost => {
          this.$router.push(`/post/${createdPost.id}`);
        })
        .catch(err => console.log(err));

      this.title = '';
      this.description = '';
      this.thumbnail = '';
      this.source = '';
    }
  }
}
</script>

<style lang="scss" scoped>
form {
  margin-bottom: 250px;

  .group {
    width: 100%;
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
      margin-bottom: 15px;
    }

    span {
      margin-bottom: 5px;
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
    margin-right: auto;

    &:hover {
      background-color: darken(#ff374a, 10);
    }
  }

  input,
  textarea {
    width: 100%;
    height: 40px;
    border: 1px solid #eee;
    font-family: "Fira Code";
    padding: 0 15px;
    font-size: 12px;
    box-sizing: border-box;
  }

  textarea {
    min-height: 300px;
    padding: 20px;
  }
}
</style>