<template>
  <article class="card">
    <div class="card__body">
      <h2 class="card__header">{{header}}</h2>
      <slot></slot>
    </div>
  </article>
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
.card__body {
  padding: ms(3);
  background-color: $white;
  border-radius: 4px;
  @include border;
}

.card__header {
  margin-top: 0;
  margin-bottom: ms(0);
  color: $md-gray-text;
  font-size: ms(1);
  font-weight: map-get($font-weight, regular);
}
</style>
