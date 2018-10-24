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

