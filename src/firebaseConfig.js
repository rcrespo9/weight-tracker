import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
firebase.initializeApp({
  apiKey: `${process.env.VUE_APP_FIREBASE_API_KEY}`,
  authDomain: 'rudy-crespo-weight-tracker.firebaseapp.com',
  databaseURL: 'https://rudy-crespo-weight-tracker.firebaseio.com',
  projectId: 'rudy-crespo-weight-tracker',
  storageBucket: 'rudy-crespo-weight-tracker.appspot.com',
  messagingSenderId: `${process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID}`
})

// Firebase utils
const db = firebase.firestore()
const auth = firebase.auth()

db.settings({
  timestampsInSnapshots: true
})

// firebase collections
const entriesCollection = db.collection('entries')

export {
  db,
  auth,
  entriesCollection
}
