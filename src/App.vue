<template>
  <div id="app">
    <Header />
    <main class="page-content"></main>
  </div>
</template>

<script>
import Header from './components/TheHeader'

export default {
  name: 'app',
  components: {
    Header
  },
  created () {
    this.$store.dispatch('getLastEntry')
  }
}
</script>

<style lang="scss">
body {
  background-color: $lt-gray;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
