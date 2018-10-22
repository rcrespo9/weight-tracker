import Vue from 'vue'
import Vuex from 'vuex'
import WeightEntriesApi from './api/WeightEntries'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    entries: [],
    currentWeight: null,
    myHeight: null,
    currentUser: null
  },
  mutations: {
    setEntries (state, payload) {
      state.entries = payload
    },
    setCurrentUser (state, val) {
      state.currentUser = val
    },
    setCurrentWeight (state, val) {
      state.currentWeight = val
    },
    setHeight (state, val) {
      state.myHeight = val
    }
  },
  actions: {
    getEntries ({
      commit
    }) {
      WeightEntriesApi.getEntries()
        .then(entries => commit('setEntries', entries))
        .catch(error => console.log(error))
    },
    clearData ({
      commit
    }) {
      commit('setCurrentUser', null)
    }
  }
})
