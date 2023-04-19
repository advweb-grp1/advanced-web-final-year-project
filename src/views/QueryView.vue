<template>
  <div>
    <div class="container mt-3">
      <h3>Search Data</h3>
      <SearchBar @search="recievedSearchTerm" @show-advanced="recievedShowAdvancedSearch" />
      <div v-if="showAdvancedSearch" class="mt-3">
        <h4>Advanced Search</h4>
        <AdvancedSearch @advanced-terms="recievedAdvancedTerms" />
      </div>

      <div class="mt-3">
        <h4>Select Columns</h4>
        <SelectColumns @toggle-columns="receivedColumns" />
      </div>

      <DataGrid
        :items="filteredData"
        :columns="selectedColumns"
        :perPage="5"
        :actions="false"
        :deleteItem="deleteItem"
      />
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import SearchBar from '../components/query/SearchBar.vue';
  import AdvancedSearch from '../components/query/AdvancedSearch.vue';
  import SelectColumns from '../components/query/SelectColumns.vue';
  import { useHcmStore } from '../stores/hcm';
  import DataGrid from '../components/DataGrid.vue';
  const hcmStore = useHcmStore();
  const showAdvancedSearch = ref(false);
  const selectedColumns = ref([]);
  const data = ref(hcmStore.displayDocs);
  const filteredData = ref([...data.value]);

  function recievedSearchTerm(s) {
    if (s.term.trim() === '' || s.col.trim() === '') {
      // If the search term is empty, show all data
      filteredData.value = [...data.value];
    } else {
      // Filter the data based on the search term and column
      filteredData.value = data.value.filter((item) =>
        //Check that the item has the property column selected
        Object.prototype.hasOwnProperty.call(item, s.col) &&
        item[s.col] !== null &&
        item[s.col] !== undefined &&
        item[s.col].toString().toLowerCase().includes(s.term.toLowerCase())
      );
    }
  }

  function recievedShowAdvancedSearch(toggle){
    showAdvancedSearch.value = toggle;
  }
  function recievedAdvancedTerms(terms){
    console.log(terms);
  }
  function receivedColumns(cols){
    selectedColumns.value = cols;
  }

</script>

<style scoped>
.form-check {
  display: inline-block;
  margin-right: 15px;
}

</style>
