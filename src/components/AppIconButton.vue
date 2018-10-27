<template>
  <button type="button" class="icon-btn">
    <span class="icon-btn__text">{{text}}</span>
  </button>
</template>

<script>
export default {
  name: 'IconButton',
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.icon-btn {
  appearance: none;
}

.icon-btn__text {
  @include sr-only;
}
</style>
