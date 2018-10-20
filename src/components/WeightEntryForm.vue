<template>
  <modal-form-wrapper
    title="Add Weight Entry"
    :onSubmitMethod="submitWeightEntry"
  >
    <modal-form-field>
      <label for="weight">Weight
        <input type="number" v-model.trim.number="weight">
      </label>
    </modal-form-field>

    <modal-form-field>
      <label for="notes">Notes
        <textarea cols="30" rows="10" v-model="notes"></textarea>
      </label>
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
      notes: ''
    }
  },
  methods: {
    submitWeightEntry () {
      WeightEntriesApi.addEntry(this.weight, this.notes)
        .then(res => {
          this.weight = ''
          this.notes = ''
        })
        .catch(error => console.log(error))
    }
  }
}
</script>
