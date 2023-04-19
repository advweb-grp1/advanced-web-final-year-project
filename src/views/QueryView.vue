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


      <!-- <div v-if="paginatedResults.length > 0" class="mt-3 results-table">
        <h4>Search Results</h4>
        <table class="table table-striped">
          <thead>
            <tr>
              <th v-for="column in selectedColumns" :key="column">
                {{ column }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(result, index) in paginatedResults" :key="index">
              <td v-for="column in selectedColumns" :key="column">
                {{ result[column] }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <nav v-if="totalPages > 1" aria-label="Page navigation">
        <ul class="pagination">
          <li
            v-for="page in totalPages"
            :key="page"
            class="page-item"
            :class="{ active: currentPage === page }"
          >
            <button class="page-link" @click="goToPage(page)">
              {{ page }}
            </button>
          </li>
        </ul>
      </nav> -->
      <DataGrid
        :items="hcmStore.displayDocs"
        :columns="selectedColumns.value"
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
  const searchTerm = ref('');
  const searchResults = ref([]);
  const showAdvancedSearch = ref(false);
  // const selectedColumn = ref('');
  const selectedColumns = ref([]);

  function recievedSearchTerm(s){
    searchTerm.value = s;
    console.log(s);
    search();
  }
  function recievedShowAdvancedSearch(toggle){
    showAdvancedSearch.value = toggle;
  }
  function recievedAdvancedTerms(terms){
    console.log(terms);
  }
  function receivedColumns(cols){
    selectedColumns.value = cols;
    console.log(selectedColumns.value);
  }

  const search = () => {
    // Perform search logic here
    // For now, it returns placeholder data
    searchResults.value = [
      {
        ledv: 'Data 1',
        lesv: 'Data 2',
        lsv: 'Data 3',
        lvef: 'Data 4',
        lvmass: 'Data 5',
        redv: 'Data 6',
        resv: 'Data 7',
        rsv: 'Data 8',
        rvef: 'Data 9',
        scar: 'Data 10'
      }
    ];
  };

</script>

<style scoped>
.form-check {
  display: inline-block;
  margin-right: 15px;
}

</style>
