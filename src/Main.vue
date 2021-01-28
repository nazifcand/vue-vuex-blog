<template>
  <Header />
  <router-view />
</template>

<script>
import Header from '@/components/Header.vue';
export default {
  components: { Header },
  created() {
    this.$store.dispatch('fetchDatabase');
  }
}
</script>

<style lang="scss">
@import "assets/reset.min.css";

html,
body {
  width: 100%;
  min-height: 100%;
  font-size: 14px;
  font-family: "Fira Code";
  line-height: 1.5;
}

*:focus {
  outline: none;
}

a {
  color: #091921;
  text-decoration: none;
  transition: 300ms all ease;

  &:hover {
    color: #ff374a;
  }
}

strong {
  font-weight: bold;
}

.container {
  width: 960px;
  height: 100%;
  padding: 0 15px;
  margin: 0 auto;
}

.page-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 25px;
}
</style>
