<template>
  <modal-form-wrapper
    title="Add Weight Entry"
    :onSubmitMethod="submitWeightEntry"
    :errors="errors"
    :isSubmitting="isSubmitting"
    :isSuccess="isEntrySubmitted"
  >
    <modal-form-field label="Weight">
      <input type="text" v-model.trim.number="weight">
    </modal-form-field>

    <modal-form-field label="Notes">
      <textarea v-model="notes"></textarea>
    </modal-form-field>
  </modal-form-wrapper>
</template>

<script>
import ModalFormWrapper from './ModalFormWrapper'
import ModalFormField from './ModalFormField'
import WeightEntriesApi from '@/api/WeightEntries'

export default {
  name: 'WeightEntry',
  components: {
    ModalFormWrapper,
    ModalFormField
  },
  data () {
    return {
      weight: '',
      notes: '',
      errors: [],
      isSubmitting: false,
      isEntrySubmitted: false
    }
  },
  methods: {
    checkForm () {
      if (this.weight) return true

      this.errors = []

      if (!this.weight) {
        this.errors.push('Weight is required.')
      }
    },
    submitWeightEntry () {
      if ( this.checkForm() ) {
        this.isSubmitting = true
        this.errors = []

        WeightEntriesApi.addEntry(this.weight, this.notes)
          .then(res => {
            this.weight = ''
            this.notes = ''
            this.isEntrySubmitted = true
          })
          .catch(error => {
            this.errors.push(error.message)
          })
          .finally(() => {
            this.isSubmitting = false
            this.isEntrySubmitted = false
          })
      }
    }
  }
}
</script>
