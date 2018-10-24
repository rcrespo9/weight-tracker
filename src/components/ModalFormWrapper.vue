<template>
  <div class="modal-form">
    <card :header="title">
      <ul v-if="errors.length">
        <li v-for="(error, index) in errors" :key="index">{{error}}</li>
      </ul>
      <p v-if="isSubmitting">Submitting...</p>
      <form @submit.prevent="onSubmitMethod">
        <slot></slot>
        <input type="submit" :value="submitBtnText">
      </form>
    </card>
  </div>
</template>

<script>
import Card from './AppCard'

export default {
  name: 'ModalForm',
  components: {
    Card
  },
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
    isModalOpen: {
      type: Boolean,
      required: true
    },
    isSubmitting: Boolean,
    isSuccess: Boolean
  }
}
</script>

<style lang="scss" scoped>

</style>
