import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Firebase
firebase.initializeApp({
  apiKey: process.env.VUE_FIREBASE_API_KEY,
  authDomain: 'rudy-crespo-weight-tracker.firebaseapp.com',
  databaseURL: 'https://rudy-crespo-weight-tracker.firebaseio.com',
  projectId: 'rudy-crespo-weight-tracker',
  storageBucket: 'rudy-crespo-weight-tracker.appspot.com',
  messagingSenderId: process.env.VUE_FIREBASE_MESSAGING_SENDER_ID
})

// Firebase utils
const db = firebase.firestore()

db.settings({
  timestampsInSnapshots: true
})

// firebase collections
const entriesCollection = db.collection('entries');

export {
  db,
  entriesCollection
}
