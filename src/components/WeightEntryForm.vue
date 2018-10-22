<template>
  <modal-form-wrapper
    title="Add Weight Entry"
    :onSubmitMethod="submitWeightEntry"
    :errorMessage="errorMessage"
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
      errorMessage: '',
      isSubmitting: false,
      isEntrySubmitted: false
    }
  },
  methods: {
    submitWeightEntry () {
      this.isSubmitting = true

      WeightEntriesApi.addEntry(this.weight, this.notes)
        .then(res => {
          this.weight = ''
          this.notes = ''
          this.isEntrySubmitted = true
        })
        .catch(error => {
          this.errorMessage = error.message
        })
        .finally(() => {
          this.isSubmitting = false
          this.isEntrySubmitted = false
        })
    }
  }
}
</script>
