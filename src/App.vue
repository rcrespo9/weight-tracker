<template>
  <div id="app">
    <WeightEntryForm v-if="isLoggedIn" />
    <LoginForm v-else />
  </div>
</template>

<script>
import LoginForm from './components/LoginForm'
import WeightEntryForm from './components/WeightEntryForm'

export default {
  name: 'app',
  components: {
    LoginForm,
    WeightEntryForm
  },
  created () {
    this.$store.dispatch('getLastEntry')
  },
  computed: {
    isLoggedIn () {
      if (this.$store.state.currentUser) return true

      return false
    }
  }
}
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
