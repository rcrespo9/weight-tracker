<template>
  <div id="app">

  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  },
  created () {
    this.$store.dispatch('getEntries')
  }
}
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
