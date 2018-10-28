<template>
  <button type="button" class="btn">
    <svg class="btn__icon"><use :xlink:href="`#icon-${icon}`" title></use></svg>
    <span class="btn__text">{{text}}</span>
  </button>
</template>

<script>
export default {
  name: 'IconButton',
  props: {
    text: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.btn {
  padding: 0;
  border: none;
  background: transparent;
  appearance: none;

  &:hover {
    cursor: pointer;
  }
}

.btn__icon {
  width: ms(3);
  height: ms(3);
  fill: $dark-gray;
  @include transition(fill);

  &:hover {
    fill: $blue;
  }
}

.btn__text {
  @include sr-only;
}
</style>
