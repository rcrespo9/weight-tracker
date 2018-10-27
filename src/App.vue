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
*,
*:before,
*:after {
  box-sizing: border-box;
}

html {
  line-height: 1.333;
}

body {
  color: $dark-gray-text;
  background-color: $lt-gray;
  font-family:'Heebo', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
