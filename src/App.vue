<template>
  <div id="app">
    <WeightEntryForm />
  </div>
</template>

<script>
import WeightEntryForm from './components/WeightEntryForm'

export default {
  name: 'app',
  components: {
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
