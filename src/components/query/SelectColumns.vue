<template>
  <div v-for="column in columns" :key="column" class="d-inline-block me-2 mb-2">
    <button
      :class="{ 'btn-primary': isSelectedColumn(column), 'btn-outline-primary': !isSelectedColumn(column) }"
      class="btn"
      @click="toggleColumn(column)"
    >
      {{ column }}
    </button>
  </div>
</template>
<script setup>
  import { ref } from 'vue';
  const selectedColumns = ref([]);
  const emit = defineEmits(['toggle-columns']);

  const columns = [
    'ledv', 'lesv', 'lsv', 'lvef', 'lvmass', 'redv', 'resv', 'rsv', 'rvef', 'scar',
    // ... other columns
    'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v'
  ];
  const isSelectedColumn = (column) => selectedColumns.value.includes(column);
  const toggleColumn = (column) => {
    if (isSelectedColumn(column)) {
      removeColumn(column);
    } else {
      addColumn(column);
    }
    emit('toggle-columns',selectedColumns);
  };
  const addColumn = (column) => {
    if (!selectedColumns.value.includes(column)) {
      selectedColumns.value.push(column);
    }
  };
  const removeColumn = (column) => {
    const index = selectedColumns.value.indexOf(column);
    if (index > -1) {
      selectedColumns.value.splice(index, 1);
    }
  };
</script>
