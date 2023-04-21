<template>
  <div>
    <div v-if="data.length !=0" class="container mt-3">
      <h3>Search Data</h3>
      <SearchBar @search="recievedSearchTerm" @show-advanced="recievedShowAdvancedSearch" />
      <div v-if="showAdvancedSearch" class="mt-3">
        <h4>Advanced Search</h4>
        <AdvancedSearch @advanced-terms="recievedAdvancedTerms" />
      </div>
      <div class="col-12 mt-3">
        <button class="col-12 btn btn-primary" @click="reset">
          Reset Search Data
        </button>
      </div>
      <div class="mt-3">
        <h4>Select Columns</h4>
        <SelectColumns @toggle-columns="receivedColumns" />
      </div>
      <DataGrid
        :items="filteredData"
        :columns="selectedColumns"
        :actions="false"
        :deleteItem="deleteItem"
      />
    </div>
    <div v-else class="container mt-3">
      <div class="alert alert-danger" role="alert">
        Error: HCM firestore is empty.
      </div>
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
  function recievedAdvancedTerms(s){
    if (s.term.trim() === '' || s.col.trim() === '') {
      // If the search term is empty, show all data
      filteredData.value = [...data.value];
    } else {
      // Filter the data based on the search term and column
      filteredData.value = data.value.filter((item) =>{
        // Check that the item has the property column selected
        if (!Object.prototype.hasOwnProperty.call(item, s.col)) {
          return false;
        }

        // Get the value of the item's column
        const value = item[s.col];

        // Check if the value is null or undefined
        if (value === null || value === undefined) {
          return false;
        }

        // Check if the value matches the search term using the selected condition
        switch (s.condition) {
        case '<':
          return value < s.term;
        case '>':
          return value > s.term;
        case '=':
          return value.toString().toLowerCase() === s.term.toLowerCase();
        case '!=':
          return value.toString().toLowerCase() !== s.term.toLowerCase();
        default:
          return false;
        }
      });
    }
  }
  function receivedColumns(cols){
    selectedColumns.value = cols;
  }
  function reset(){
    filteredData.value = [...data.value];
  }

</script>

<style scoped>
.form-check {
  display: inline-block;
  margin-right: 15px;
}

</style>
