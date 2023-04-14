<template>
  <div class="col-md-6 mb-3">
    <div class="card">
      <div class="card-header">
        {{ props.title }}
      </div>
      <div class="card-body">
        <div class="chart-container">
          <apexchart
            :options="props.options"
            :width="props.options.chart.width"
            :height="props.options.chart.height"
            :series="props.data"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    options: {
      type: Object,
      required: true
    },
    data: {
      type: Object,
      required: true
    },
    type: {
      type: String,
      required: true,
      validator: (value) => {
        return ['bar', 'line', 'pie'].indexOf(value) !== -1;
      }
    },
    title: {
      type: String,
      default: ''
    }
  });


</script>

