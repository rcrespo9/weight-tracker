export default {
  getEntries () {
    return db.collection('entries').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`)
      })
    })
  },
  createEntry (payload) {

  },
  deleteEntry (id) {

  }
}
