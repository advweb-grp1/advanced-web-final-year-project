<template>
  <div class="col-md-3 mb-3">
    <div class="card computed-integer-card">
      <div class="card-body d-flex flex-column justify-content-center align-items-center">
        <h4 class="computed-integer-label text-center">
          {{ props.label }}
        </h4>
        <p class="computed-integer-value text-center">
          {{ props.value }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    label: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    }
  });

</script>
<style scoped>
.computed-integer-card {
  height: 100%;
}

.computed-integer-label {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.computed-integer-value {
  font-size: 2.5rem;
  margin-bottom: 0;
}
</style>
