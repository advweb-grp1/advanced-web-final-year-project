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
  import { useHcmStore } from '../stores/hcm';

  const hcmStore = useHcmStore();
  const patients = hcmStore.docs.length;
  let withMyectomy = 0;
  hcmStore.docs.forEach((d)=>{
    //console.log(d.data().Myectomy);
    if(d.data().Myectomy == '1'){
      withMyectomy++;
    }
  });

  let age10to30 = 0;
  let age31to40 = 0;
  let age41to50 = 0;
  let age51to60 = 0;
  let above60 = 0;

  hcmStore.docs.forEach((d) => {
    const age = parseFloat(d.data().AgeatMRI);
    if (10 <= age <= 30) {
      age10to30++;
    }
    else if (31 <= age <= 40) {
      age31to40++;
    }
    else if (41 <= age <= 50) {
      age41to50++;
    }
    else if (51 <= age <= 60) {
      age51to60++;
    }
    else if (age > 60) {
      above60++;
    }
  });


  const myectomyPercentage = computed(() => {
    return Math.round((withMyectomy/patients) * 100).toString() + '%';
  });


  const computedIntegers = [
    { label:'Total number of participants', value: patients.toString() },
    { label:'Average age of participants', value:'10' },
    { label:'Percentage of participants with diabetes', value:'10' },
    { label:'Percentage of participants who have undergone myectomy', value: myectomyPercentage.value }

  ];

  const ageDistribution = ColumnChartBuilder('Age distribution',
                                             [
                                               // eslint-disable-next-line max-len
                                               //age18to21, age22to25, age26to29, age30to32, age33to36, age37to40, age41to43,
                                               // eslint-disable-next-line max-len
                                               //age44to47, age48to51, age52to54, age55to58, age59to62, age63to65, morethan65
                                               //22, 48, 13, 5, 2
                                               age10to30, age31to40, age41to50, age51to60, above60
                                             ],

                                             'Age(Years)',
                                             [ '10-30', '31-40', '41-50', '51-60', '60+'
                                             ]
  );

  const myectomy = PieChartBuilder('Patients that have undergone myectomy',
                                   [withMyectomy, patients-withMyectomy],
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
