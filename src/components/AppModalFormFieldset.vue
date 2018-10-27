<template>
  <fieldset class="modal-form-fieldset">
    <legend class="fieldset__legend">{{legend}}</legend>
    <slot></slot>
  </fieldset>
</template>

<script>

export default {
  name: 'ModalFormFieldset',
  props: {
    legend: {
      type: String,
      required: true
    }
  }
}
</script>
