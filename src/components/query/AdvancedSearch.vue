<template>
  <div class="row">
    <div class="col-md-4">
      <input
        v-model="advSearchValue1"
        type="text"
        class="form-control"
        placeholder="Value 1"
      >
    </div>
    <div class="col-md-4">
      <select v-model="selectedCondition" class="form-select">
        <option disabled value="">
          Select Condition
        </option>
        <option v-for="condition in conditions" :key="condition" :value="condition">
          {{ condition }}
        </option>
      </select>
    </div>
    <div class="col-md-4">
      <input
        v-model="advSearchValue2"
        type="text"
        class="form-control"
        placeholder="Value 2"
      >
    </div>
  </div>
  <div class="row mt-2">
    <div class="col-md-12">
      <button class="btn btn-primary" @click="sendAdvancedSearch">
        Advanced Search
      </button>
    </div>
  </div>
</template>

<script setup>
  import{ ref } from 'vue';
  const advSearchValue1 = ref('');
  const advSearchValue2 = ref('');
  const selectedCondition = ref('');
  const conditions = ['<', '>', '=', '!='];
  const emit = defineEmits(['advanced-terms']);

  const sendAdvancedSearch = () => {
    const terms = {
      val1:advSearchValue1.value,
      val2:advSearchValue2.value,
      selectedCondition:selectedCondition.value
    };
    emit('advanced-terms', terms);
  };
</script>
