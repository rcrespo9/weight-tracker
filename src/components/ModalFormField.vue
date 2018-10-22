<template>
  <div class="modal-form-field">
    <label class="modal-form-field__label">
      <span class="label__text">{{label}}</span>
      <slot></slot>
    </label>
  </div>
</template>

<script>
export default {
  name: 'ModalFormField',
  props: {
    label: {
      type: String,
      required: true
    }
  }
}
</script>
