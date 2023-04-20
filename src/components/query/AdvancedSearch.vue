<template>
  <div class="row">
    <div class="col-md-4">
      <select v-model="searchColumn" class="form-select">
        <option disabled value="">
          Select Column
        </option>
        <option v-for="column in columns" :key="column" :value="column.docField">
          {{ column.display }}
        </option>
      </select>
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
        v-model="advSearchValue"
        type="text"
        class="form-control"
        placeholder="Search Value"
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
  import { fields } from '../../firebase/constants';

  const advSearchValue = ref('');
  const selectedCondition = ref('');
  const conditions = ['<', '>', '=', '!='];
  const columns = fields;
  const searchColumn = ref('');

  const emit = defineEmits(['advanced-terms']);

  const sendAdvancedSearch = () => {
    const terms = {
      col:searchColumn.value,
      term:advSearchValue.value,
      condition:selectedCondition.value
    };
    emit('advanced-terms', terms);
  };
</script>
