<template>
  <header>
    <div class="container">
      <router-link to="/" active-class="active">Home</router-link>
      <router-link to="/add-new" active-class="active">Add New</router-link>
      <router-link to="/top" active-class="active">Top Rating</router-link>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  width: 100%;
  height: 60px;
  margin-bottom: 50px;
  border-bottom: 1px solid #eee;
  box-shadow: 0 0 10px rgba(#ddd, 0.1);

  .container {
    display: flex;
    align-items: center;
  }

  a {
    text-decoration: none;

    &.active,
    &:hover {
      color: #ff374a;
      font-weight: 600;
    }

    &:not(:last-child) {
      margin-right: 35px;
    }
  }
}
</style>
