<template>
  <div>
    <div class="container mt-3">
      <h3>Search Data</h3>
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
        <button class="btn btn-primary" @click="search">
          Search
        </button>
        <button class="btn btn-secondary" @click="showAdvancedSearch = !showAdvancedSearch">
          Advanced Search
        </button>
      </div>

      <div v-if="showAdvancedSearch" class="mt-3">
        <h4>Advanced Search</h4>
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
            <button class="btn btn-primary" @click="advancedSearch">
              Advanced Search
            </button>
          </div>
        </div>
      </div>

      <div class="mt-3">
        <h4>Select Columns</h4>
        <div v-for="column in columns" :key="column" class="d-inline-block me-2 mb-2">
          <button
            :class="{ 'btn-primary': isSelectedColumn(column), 'btn-outline-primary': !isSelectedColumn(column) }"
            class="btn"
            @click="toggleColumn(column)"
          >
            {{ column }}
          </button>
        </div>
      </div>


      <div v-if="paginatedResults.length > 0" class="mt-3 results-table">
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
      </nav>
    </div>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue';
  const isSelectedColumn = (column) => selectedColumns.value.includes(column);

  const toggleColumn = (column) => {
    if (isSelectedColumn(column)) {
      removeColumn(column);
    } else {
      addColumn(column);
    }
  };

  const addColumn = (column) => {
    if (!selectedColumns.value.includes(column)) {
      selectedColumns.value.push(column);
    }

    if (searchResults.value.length === 0) {
      searchResults.value = placeholderData;
    }
  };

  const removeColumn = (column) => {
    const index = selectedColumns.value.indexOf(column);
    if (index > -1) {
      selectedColumns.value.splice(index, 1);
    }
  };
  const placeholderData = [
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
    // ... (other data)
    }
  ];
  const searchTerm = ref('');
  const searchResults = ref([]);
  const showAdvancedSearch = ref(false);
  const selectedColumn = ref('');
  const advSearchValue1 = ref('');
  const advSearchValue2 = ref('');
  const selectedCondition = ref('');
  const selectedColumns = ref([]);

  const columns = [
    'ledv', 'lesv', 'lsv', 'lvef', 'lvmass', 'redv', 'resv', 'rsv', 'rvef', 'scar',
    // ... other columns
    'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v'
  ];

  const conditions = ['<', '>', '=', '!='];

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
  const advancedSearch = () => {
  // Perform advanced search logic here
  };

  const perPage = ref(5);
  const currentPage = ref(1);
  const totalResults = computed(() => searchResults.value.length);
  const totalPages = computed(() => Math.ceil(totalResults.value / perPage.value));
  const paginatedResults = computed(() => {
    const start = (currentPage.value - 1) * perPage.value;
    const end = start + perPage.value;
    return searchResults.value.slice(start, end);
  });

  const goToPage = (page) => {
    currentPage.value = page;
  };

</script>

<style scoped>
.form-check {
  display: inline-block;
  margin-right: 15px;
}

.results-table {
  overflow-x: auto;
}
</style>
