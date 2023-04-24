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
  const totalPatients = hcmStore.docs.length;
  let withDiabetes = 0;
  let totalAge = 0;
  let MYH7 = 0;
  let MYBPC3 = 0;
  let TNNT2 = 0;
  let ACTC = 0;
  let TPM1 = 0;
  let TNNCI = 0;
  let TNNI3 = 0;
  let MYL2 = 0;
  let TTN = 0;
  let fibrosis = 0;
  let noFibrosis = 0;
  let age10to30 = 0;
  let age31to40 = 0;
  let age41to50 = 0;
  let age51to60 = 0;
  let above60 = 0;
  let withMyectomy = 0;

  const store = useHcmStore();
  store.docs.forEach((d)=>{
    const age = parseFloat(d.data().AgeatMRI);
    if(!isNaN(age)){
      totalAge += age;
    }
    if(d.data().MYH7 == 1){
      MYH7++;
    }
    if(d.data().MYBPC3mutation == 1){
      MYBPC3++;
    }
    if(d.data().TNNT2mutation == 1){
      TNNT2++;
    }
    if(d.data().ACTCmutation == 1){
      ACTC++;
    }
    if(d.data().TPM1 == 1){
      TPM1++;
    }
    if(d.data().TNNCI == 1){
      TNNCI++;
    }
    if(d.data().TNNI3 == 1){
      TNNI3++;
    }
    if(d.data().TTN == 1){
      TTN++;
    }
    if(d.data().scar == 1){
      fibrosis++;
    }
    if(d.data().scar == 0){
      noFibrosis++;
    }
    if(d.data().Diabetes == '1'){
      withDiabetes++;
    }
    if(d.data().Myectomy == '1'){
      withMyectomy++;
    }
    if (age >= 10 && age <= 30) {
      age10to30++;
    }
    else if (age >= 31 && age <= 40) {
      age31to40++;
    }
    else if (age >= 41 && age <= 50) {
      age41to50++;
    }
    else if (age >= 51 && age <= 60) {
      age51to60++;
    }
    else if (age > 60) {
      above60++;
    }
  });
  const avgAge = computed(()=>{
    return Math.round(totalAge/totalPatients).toString();
  });
  const diabetesPercentage = computed(() => {
    return Math.round((withDiabetes/totalPatients) * 100).toString()+'%';
  });
  const myectomyPercentage = computed(() => {
    return Math.round((withMyectomy/totalPatients) * 100).toString() + '%';
  });
  const computedIntegers = [
    { label:'Total number of participants', value: totalPatients },
    { label:'Percentage of participants with diabetes', value: diabetesPercentage.value },
    { label:'Average age of participants at MRI', value: avgAge.value },
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

  const geneMutations = PieChartBuilder('Gene Mutation Spread',
                                        [MYH7, MYBPC3, TNNT2, ACTC, TPM1, TNNCI, TNNI3, MYL2,TTN],
                                        ['MYH7', 'MYBPC3', 'TNNT2', 'ACTC', 'TPM1','TNNCI','TNNI3','MYL2','TNN']
  );
  const diabetics = PieChartBuilder('Diabetics',
                                    [withDiabetes, totalPatients-withDiabetes],
                                    ['Diabetic', 'Non-Diabetic']
  );

  const averageLEDV = LineChartBuilder('Left systolic volume chart',
                                       [
                                         22, 48, 13, 5, 2
                                       ],
                                       'left systolic volume (LSV)'
  );

  const hasFibrosis = PieChartBuilder('Percentage of participants with fibrosis/scarring(scar)',
                                      [fibrosis, noFibrosis],
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
    geneMutations,
    diabetics,
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
