<template>
  <modal-form-wrapper
    title="Add Weight Entry"
    :onSubmitMethod="submitWeightEntry"
  >
    <p v-if="errorMessage">{{errorMessage}}</p>
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
      errorMessage: ''
    }
  },
  methods: {
    submitWeightEntry () {
      WeightEntriesApi.addEntry(this.weight, this.notes)
        .then(res => {
          this.weight = ''
          this.notes = ''
        })
        .catch(error => {
          this.errorMessage = error.message
        })
    }
  }
}
</script>
