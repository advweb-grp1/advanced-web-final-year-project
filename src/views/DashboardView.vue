<template>
  <div class="dashboard-container">
    <h1 class="dashboard-title">
      Cardiomyopathy Dashboard
    </h1>
    <div class="row mt-4 mb-3">
      <computed-integer-card
        v-for="(comp, index) in computedIntegers"
        :key="index"
        :label="comp.label"
        :value="comp.value"
      />
    </div>
    <div class="row">
      <chart-card
        v-for="(chart, index) in chartsArray"
        :key="index"
        :title="chart.title"
        :options="chart.options"
        :type="chart.options.chart.type"
        :data="chart.series"
      />
    </div>
  </div>
</template>

<script setup>
  import ComputedIntegerCard from '../components/ComputedIntegerCard.vue';
  import ChartCard from '../components/ChartCard.vue';

  const computedIntegers = [
    { label:'Computed 1', value:10 },
    { label:'Computed 2', value:10 },
    { label:'Computed 3', value:10 },
    { label:'Computed 4', value:10 }
  ];
  const chartsArray = [
    {
      title:'Chart 1',
      options:{
        chart: {
          type: 'bar'
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true
          }
        }

      },
      series:  [
        {
          data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
        }
      ]
    }
  ];

</script>

<style scoped>
.dashboard-container {
  margin: 2rem;
}

.dashboard-title {
  margin-bottom: 2rem;
}

.chart-container {
  min-height: 300px;
}

.computed-integer-card {
  text-align: center;
}

.computed-integer-label {
  margin-bottom: 1rem;
}

.computed-integer-value {
  font-size: 1.5rem;
  font-weight: bold;
}
</style>
