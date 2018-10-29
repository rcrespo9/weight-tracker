<template>
  <div class="weight-tracker">
    <Chart />
    <BMI />
  </div>
</template>

<script>
import Chart from './WeightTrackerChart'
import BMI from './WeightTrackerBMI'

export default {
  name: 'WeightTracker',
  components: {
    Chart,
    BMI
  }
}
</script>

<style lang="scss" scoped>

</style>
