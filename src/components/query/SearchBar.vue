<template>
  <div class="input-group mb-3">
    <select v-model="searchColumn" class="form-select">
      <option disabled value="">
        Select Column
      </option>
      <option v-for="column in columns" :key="column" :value="column.docField">
        {{ column.display }}
      </option>
    </select>
    <input
      v-model="searchTerm"
      type="text"
      class="form-control"
      placeholder="Search"
    >
    <button class="btn btn-primary" @click="sendSearch">
      Search
    </button>
    <button class="btn btn-secondary" @click="showAdvancedSearch">
      Advanced Search
    </button>
  </div>
</template>

  <script setup>
  import { ref } from 'vue';
  import { fields } from '../../firebase/constants';
  const searchTerm = ref('');
  const searchColumn = ref('');
  const searchRef = ref({});
  const showAdvanced = ref(false);
  const emit = defineEmits(['search','show-advanced']);

  const sendSearch = () => {
    searchRef.value = {
      term: searchTerm.value,
      col: searchColumn.value
    };
    emit('search', searchRef.value);
  };
  const showAdvancedSearch = () => {
    emit('show-advanced', showAdvanced.value = !showAdvanced.value);
  };

  const columns = fields;
  </script>
