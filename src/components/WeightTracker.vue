<template>
  <div class="weight-tracker">
    <Chart />
    <BMI />
  </div>
</template>

<script>
import Card from './AppCard'
import Chart from './WeightTrackerChart'
import BMI from './WeightTrackerBMI'

export default {
  name: 'WeightTracker',
  components: {
    Card,
    Chart,
    BMI
  }
}
</script>

<style lang="scss" scoped>
.weight-tracker {
  display: grid;
  grid-template-columns: column-width(9) 1fr;
  column-gap: $global-padding;
}
</style>
