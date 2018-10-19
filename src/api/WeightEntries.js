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
  addEntry (entry) {

  },
  updateEntry (id) {

  },
  deleteEntry (id) {

  }
}
