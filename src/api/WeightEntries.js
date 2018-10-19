const fb = require('../firebaseConfig.js')

export default {
  getEntries () {
    return fb.entriesCollection.get()
      .then((querySnapshot) => {
        let entriesArray = []

        querySnapshot.forEach((doc) => {
          let entry = doc.data()
          entry.id = doc.id
          entriesArray.push(entry)
        })

        return entriesArray
      })
      .catch(error => console.log(error))
  },
  addEntry (weight, notes) {
    return fb.entriesCollection.add({
      weight: weight,
      date: new Date(),
      notes: notes
    })
      .then(docRef => console.log(`Document written with ID ${docRef}`))
  },
  updateEntry (id) {

  },
  deleteEntry (id) {

  }
}
