const fb = require('@/firebaseConfig.js')

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
  },
  getLastEntry () {
    return fb.entriesCollection.orderBy('date', 'desc').limit(1)
      .get()
      .then(querySnapshot => {
        let entry

        querySnapshot.forEach((doc) => {
          entry = doc.data()
        })

        return entry
      })
  },
  addEntry (weight, height, notes) {
    return fb.entriesCollection.add({
      weight: weight,
      height: height,
      date: new Date(),
      notes: notes
    })
  },
  updateEntry (id) {

  },
  deleteEntry (id) {

  }
}
