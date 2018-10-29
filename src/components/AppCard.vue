<template>
  <div class="card">
    <div class="card__body">
      <h2 class="card__header">{{header}}</h2>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    header: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
.card {
  padding: ms(3);
  background-color: $white;
  border-radius: 4px;
  @include border;
}

.card__header {
  margin-top: 0;
  margin-bottom: ms(1);
  color: $md-gray-text;
  font-size: ms(2);
  font-weight: map-get($font-weight, regular);
}
</style>
