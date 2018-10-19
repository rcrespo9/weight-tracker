<template>
  <modal-form 
    title="Add Weight Entry"
    :onSubmitMethod="submitWeightEntry"
  >
    <modal-form-field>
      <label for="weight">Weight
        <input type="number" v-model.trim="weight">
      </label>
    </modal-form-field>

    <modal-form-field>
      <label for="notes">Notes
        <textarea cols="30" rows="10" v-model="notes"></textarea>
      </label>
    </modal-form-field>
  </modal-form>
</template>

<script>
import ModalForm from './ModalForm'
import ModalFormField from './ModalFormField'
import WeightEntriesApi from '@/api/WeightEntries'

export default {
  name: 'WeightEntry',
  components: {
    ModalForm,
    FormField
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
        .then(console.log('success!'))
        .error(err => console.log(err))
    }
  }
}
</script>
