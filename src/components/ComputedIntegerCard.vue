<!-- ComputedIntegerCard.vue -->
<template>
  <div class="col-md-3 mb-3">
    <div class="card computed-integer-card">
      <div class="card-body">
        <h4 class="computed-integer-label">
          {{ props.label }}
        </h4>
        <p class="computed-integer-value">
          {{ props.value }} %
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    label: String,
    value: Number
  });

</script>
