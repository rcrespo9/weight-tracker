<template>
  <card header="Weight Tracker Chart">
    <canvas id="WeightTrackerChart"></canvas>
  </card>
</template>

<script>
import Chart from 'chart.js'
import Card from './AppCard'

export default {
  name: 'WeightTrackerChart',
  components: {
    Card
  },
  created () {
    this.$store.dispatch('getEntries')
  },
  mounted () {
    const $ctx = document.getElementById('WeightTrackerChart')
    const lineChart = new Chart($ctx, {
      type: 'line'
    })
  },
  methods: {
    createChart(chartId, chartData) {
      const ctx = document.getElementById(chartId);
      const myChart = new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options,
      });
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
