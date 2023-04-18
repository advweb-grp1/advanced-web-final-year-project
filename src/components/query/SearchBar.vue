<template>
  <div class="input-group mb-3">
    <select v-model="selectedColumn" class="form-select">
      <option disabled value="">
        Select Column
      </option>
      <option v-for="column in columns" :key="column" :value="column">
        {{ column }}
      </option>
    </select>
    <input
      v-model="searchTerm"
      type="text"
      class="form-control"
      placeholder="Search term"
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

  const searchTerm = ref('');
  const showAdvanced = ref(false);
  const emit = defineEmits(['search','show-advanced']);

  const sendSearch = () => {
    emit('search', searchTerm.value);
  };
  const showAdvancedSearch = () => {
    emit('show-advanced', showAdvanced.value = !showAdvanced.value);
  };

  const columns = [
    'ledv', 'lesv', 'lsv', 'lvef', 'lvmass', 'redv', 'resv', 'rsv', 'rvef', 'scar',
    // ... other columns
    'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v'
  ];
  </script>
