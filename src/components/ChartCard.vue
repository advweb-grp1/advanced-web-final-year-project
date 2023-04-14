<template>
  <div class="col-md-6 mb-3">
    <div class="card">
      <div class="card-header">
        {{ props.title }}
      </div>
      <div class="card-body">
        <div class="chart-container">
          <apexchart
            :type="props.type"
            height="350"
            :options="props.options"
            :series="props.data"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

  const props = defineProps({
    options:Object,
    data:Object,
    type:String,
    title:String
  });


</script>

