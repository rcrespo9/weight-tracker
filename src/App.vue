<template>
  <div id="app">
    <LoginForm />
    <WeightEntryForm />
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
  }
}
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
