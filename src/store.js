import Vue from 'vue'
import Vuex from 'vuex'
import WeightEntriesApi from './api/WeightEntries'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    entries: [],
    currentHeight: null,
    currentWeight: null,
    currentUser: null
  },
  getters: {
    bmi: state => {
      if (state.currentHeight && state.currentWeight) {
        const heightInInches = (state.currentHeight.feet * 12) + state.currentHeight.inches
        const BMI = state.currentWeight * 703 / (Math.pow(heightInInches, 2))

        return parseFloat(BMI).toFixed(1)
      } else {
        return null
      }
    }
  },
  mutations: {
    setCurrentUser (state, val) {
      state.currentUser = val
    },
    setEntries (state, payload) {
      state.entries = payload
    },
    setCurrentWeight (state, val) {
      state.currentWeight = val
    },
    setCurrentHeight (state, val) {
      state.currentHeight = val
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
    getLastEntry ({ commit }) {
      WeightEntriesApi.getLastEntry()
        .then(entry => {
          if (entry) {
            const { height, weight } = entry

            commit('setCurrentWeight', weight)
            commit('setCurrentHeight', height)
          }
        })
        .catch(error => console.log(error))
    },
    clearData ({
      commit
    }) {
      commit('setCurrentUser', null)
    }
  }
})
