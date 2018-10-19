import Vue from 'vue'
import Vuex from 'vuex'
const fb = require('./firebaseConfig.js')

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
      fb.entriesCollection.get()
        .then((res) => {
          commit('setEntries', res.data())
        })
        .catch(error => console.log(error))
    }
  }
})
