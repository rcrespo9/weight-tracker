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
        .then((querySnapshot) => {
          let entriesArray = []
               
          querySnapshot.forEach((doc) => {
            let entry = doc.data()
            entry.id = doc.id
            entriesArray.push(entry)
          })

          commit('setEntries', entriesArray)
        })
        .catch(error => console.log(error))
    }
  }
})
