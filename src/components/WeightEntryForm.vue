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

    <modal-form-fieldset legend="Height">
      <modal-form-field label="Feet">
        <input type="text" v-model.trim.number="height.feet">
      </modal-form-field>
      <modal-form-field label="Inches">
        <input type="text" v-model.trim.number="height.inches">
      </modal-form-field>
    </modal-form-fieldset>    

    <modal-form-field label="Notes">
      <textarea maxlength="100" v-model="notes"></textarea>
    </modal-form-field>
  </modal-form-wrapper>
</template>

<script>
import ModalFormWrapper from './ModalFormWrapper'
import ModalFormField from './ModalFormField'
import ModalFormFieldset from './ModalFormFieldset'
import WeightEntriesApi from '@/api/WeightEntries'

export default {
  name: 'WeightEntry',
  components: {
    ModalFormWrapper,
    ModalFormField,
    ModalFormFieldset
  },
  data () {
    return {
      weight: '',
      notes: '',
      height: {
        feet: '',
        inches: ''
      },
      errors: [],
      isSubmitting: false,
      isEntrySubmitted: false
    }
  },
  methods: {
    checkForm () {
      if (this.weight && this.height.feet && this.height.inches) return true

      this.errors = []

      if (!this.weight) {
        this.errors.push('Weight is required.')
      }

      if (!this.height.feet || !this.height.inches) {
        this.errors.push('Height is required')
      }
    },
    submitWeightEntry (e) {
      if (this.checkForm()) {
        this.isSubmitting = true
        this.errors = []

        WeightEntriesApi.addEntry(this.weight, this.height, this.notes)
          .then(res => {
            this.$store.dispatch('getLastEntry')
            this.weight = ''
            this.height.feet = ''
            this.height.inches = ''
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
