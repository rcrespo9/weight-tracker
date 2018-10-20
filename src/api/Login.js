const fb = require('@/firebaseConfig.js')

export default {
  login (email, password) {
    return fb.auth.signInWithEmailAndPassword(email, password)
  }
}
