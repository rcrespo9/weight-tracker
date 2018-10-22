<template>
  <div class="modal-form">
    <h2>{{title}}</h2>
    <p v-if="errorMessage">{{errorMessage}}</p>
    <p v-if="isSubmitting">Submitting...</p>
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
      default: 'Submit'
    },
    errorMessage: String,
    isSubmitting: Boolean,
    isSuccess: Boolean
  }
}
</script>

<style lang="scss" scoped>

</style>
