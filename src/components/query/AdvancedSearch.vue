<template>
  <div class="row">
    <div class="col-md-3">
      <select v-model="searchColumn" class="form-select">
        <option disabled value="">
          Select Column
        </option>
        <option v-for="column in columns" :key="column" :value="column.docField">
          {{ column.display }}
        </option>
      </select>
    </div>
    <div class="col-md-3">
      <select v-model="selectedCondition" class="form-select">
        <option disabled value="">
          Select Condition
        </option>
        <option v-for="condition in conditions" :key="condition" :value="condition">
          {{ condition }}
        </option>
      </select>
    </div>
    <div class="col-md-3">
      <input
        v-model="advSearchValue"
        type="text"
        class="form-control"
        placeholder="Search Value"
      >
    </div>
    <div class="col-md-3">
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
