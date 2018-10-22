<template>
  <div class="modal-form">
    <h2>{{title}}</h2>
    <ul v-if="errors.length">
      <li v-for="(error, index) in errors" :key="index">{{error}}</li>
    </ul>
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
    errors: Array,
    isSubmitting: Boolean,
    isSuccess: Boolean
  }
}
</script>

<style lang="scss" scoped>

</style>
