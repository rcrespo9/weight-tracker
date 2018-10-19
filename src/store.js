import Vue from 'vue'
import Vuex from 'vuex'
import WeightEntriesApi from './api/WeightEntries'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    entries: []
  },
  mutations: {
    setEntries (state, payload) {
      state.entries = payload
    }
  },
  actions: {
    getEntries ({ commit }) {
      WeightEntriesApi.getEntries()
        .then(entries => commit('setEntries', entries))
        .catch(error => console.log(error))
    }
  }
})
