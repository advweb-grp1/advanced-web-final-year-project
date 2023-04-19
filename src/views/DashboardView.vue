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
  import { computed } from 'vue';
  import ComputedIntegerCard from '../components/ComputedIntegerCard.vue';
  import ChartCard from '../components/ChartCard.vue';
  import { PieChartBuilder, ColumnChartBuilder,LineChartBuilder } from '../utils/chart';
  //import ComputedIntegerCard from '../components/ComputedIntegerCard.vue';
  //import ChartCard from '../components/ChartCard.vue';
  //import { PieChartBuilder, ColumnChartBuilder,LineChartBuilder } from '../utils/chart';
  //import { getDocs } from '@firebase/firestore';
  //import { firebaseStore, collection } from '../firebase/database';
  import { getMyectomyData } from '../composables/myectomy.js';

  let { total, withMyectomy } = (async () => {
    await getMyectomyData();
  })();
  const myectomyPercentage = computed(() => {
    return Math.round((withMyectomy/total) * 100).toString()+'%';
  });

  const computedIntegers = [
    { label:'Total number of participants', value:'10' }, //to be changed
    { label:'Average age of participants', value:'10' },
    { label:'Percentage of participants with diabetes', value:'10' },
    { label:'Percentage of participants who have undergone myectomy', value: myectomyPercentage.value }
  ];
  const ageDistribution = ColumnChartBuilder('Age distribution',
                                             [
                                               22, 48, 13, 5, 2
                                             ],
                                             'Age(Years)',
                                             [  '18-21',  '22-25',  '26-29',  '30-32',  '33-36',  '37-40',
                                                '41-43',  '44-47','48-51',  '52-54',  '55-58',  '59-62',  '63-65'
                                             ]

  );

  const myectomy = PieChartBuilder('Patients that have undergone myectomy',
                                   [withMyectomy, total-withMyectomy],
                                   ['Undergone myectomy', 'Has not undergone myectomy']

  );

  const geneMutations = PieChartBuilder('Gene Mutation Spread',
                                        [44, 55, 13, 43, 22, 33, 55, 88,100],
                                        ['MYH7', 'MYBPC3', 'TNNT2', 'ACTC', 'TPM1','TNNCI','TNNI3','MYL2','TT']
  );

  const apicalHCMPrevelance = PieChartBuilder('Prevalence of apical HCM',
                                              [20, 80],
                                              ['ApicalHCM', 'no ApicalHCM']
  );
  const averageLEDV = LineChartBuilder('Left systolic volume chart',
                                       [
                                         22, 48, 13, 5, 2
                                       ],
                                       'left systolic volume (LSV)'

  );
  const hasFibrosis = PieChartBuilder('Percentage of participants with fibrosis/scarring(scar)',
                                      [44, 55],
                                      ['Has Scars', 'No Scars']
  );
  const averageREDV = LineChartBuilder('Right systolic volume chart',
                                       [
                                         22, 48, 13, 5, 2
                                       ],
                                       'right systolic volume (REDV)'

  );
  const chartsArray = [
    ageDistribution,
    myectomy,
    geneMutations,
    apicalHCMPrevelance,
    hasFibrosis,
    averageLEDV,
    averageREDV
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
