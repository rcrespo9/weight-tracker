<template>
  <div id="app">
    <div v-if="isLoggedIn">
      <button type="button" @click="logout">Log Out</button>
      <WeightEntryForm />
    </div>
    <div v-else>
      <LoginForm />
    </div>
  </div>
</template>

<script>
import LoginForm from './components/LoginForm'
import WeightEntryForm from './components/WeightEntryForm'
import LoginApi from '@/api/Login'

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
  },
  methods: {
    logout () {
      LoginApi.logout()
      this.$store.dispatch('clearUserData')
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
