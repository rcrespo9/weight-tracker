import Vue from 'vue'
import Vuex from 'vuex'
import WeightEntriesApi from '@/services/api/WeightEntries'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    entries: []
  },
  mutations: {
    SET_ENTRIES (state, payload) {
      state.entries = payload
    }
  },
  actions: {
    GET_ENTRIES (context, config) {
      return WeightEntriesApi.getEntries()
        .then(entries => {
          console.log(entries)
          context.commit('SET_ENTRIES', entries)
        })
        .catch(error => console.log(error))
    }
  }
})
