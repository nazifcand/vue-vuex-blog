<template>
  <div class="comment">
    <slot />
    <time>{{ formatDate }}</time>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  props: {
    date: { type: Number, required: true }
  },
  computed: {
    formatDate() {
      return moment(this.date).format("LLL")
    }
  }
}
</script>

<style lang="scss" scoped>
.comment {
  font-size: 12px;
  display: flex;
  flex-direction: column;

  &:not(:last-child) {
    margin-bottom: 25px;
  }

  time {
    margin-left: auto;
    color: #777;
    font-weight: 500;
  }
}
</style>