import Vue from 'vue'
import App from './App.vue'
import store from './store'
import 'normalize.css'
const fb = require('./firebaseConfig')

Vue.config.productionTip = false

// let app

// fb.auth.onAuthStateChanged(user => {
//   if (user) {
//     store.dispatch('storeUserData', user)
//   }

//   if (!app) {
//     app = new Vue({
//       store,
//       render: h => h(App)
//     }).$mount('#app')
//   }
// })
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
