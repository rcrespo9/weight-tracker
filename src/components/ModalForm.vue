<template>
  <div class="modal-form">
    <h2>{{title}}</h2>
    <form @submit.prevent="onSubmitMethod">
      <slot></slot>
      <input type="submit" :value="submitBtnText">
    </form>
  </div>
</template>

<script>
export default {
  name: 'ModalForm',
  props: {
    title: {
      type: String,
      required: true
    },
    onSubmitMethod: {
      type: Function,
      required: true
    },
    submitBtnText: {
      type: String,
      required: true,
      default: 'Submit'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
