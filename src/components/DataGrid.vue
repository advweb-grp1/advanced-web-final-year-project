<template>
  <div id="data-grid">
    <table class="table table-striped">
      <thead>
        <tr>
          <th v-for="column in props.columns" :key="column.docField">
            {{ column.display }}
          </th>
          <th v-if="actions" />
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in paginatedResults" :key="item.id">
          <td v-for="column in props.columns" :key="column.docField">
            {{ item[column.docField] }}
          </td>
          <td v-if="actions">
            <button>
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <nav v-if="props.columns.length > 0" aria-label="Page navigation">
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
</template>

  <script setup>
  import { ref,computed } from 'vue';

  const props = defineProps({
    items: {
      type: Array,
      required: true,
      validator: (i) =>{
        return Array.isArray(i) && i.every((item) =>{
          // Define the structure of a valid item
          const validItemKeys = [
            'ACTCmutation',
            'AgeatMRI',
            'ApicalHCM',
            'Diabetes',
            'Hypertension',
            'MYBPC3mutation',
            'MYH7',
            'MYL2',
            'Myectomy',
            'SuddenCardiacDeath',
            'TNNCI',
            'TNNI3',
            'TNNT2mutation',
            'TPM1',
            'female',
            'ledv',
            'lesv',
            'lsv',
            'lvef',
            'lvmass',
            'redv',
            'resv',
            'rsv',
            'rvef',
            'scar',
            'Hospitalization',
            'ReasonforHospitalization',
            'HeartAttack',
            'HeartAttackDate',
            'id',
            'created_by_user_id'
          ];

          return (
            typeof item === 'object' &&
            Object.keys(item).every((key) => validItemKeys.includes(key))
          );

        });
      }
    },
    columns: {
      type: Array,
      required: true,
      validator: (columns) => {
        Array.isArray(columns) && columns.every((column) => {
          return (
            typeof column === 'object' &&
            'docField' in column &&
            'display' in column &&
            typeof column.docField === 'string' &&
            typeof column.display === 'string'
          );
        });
      }
    },
    perPage: {
      type: Number,
      default: 30
    },
    actions: {
      type: Boolean,
      default: false
    },
    deleteItem: {
      type: Function
    }
  });
  const currentPage = ref(1);
  const totalResults = computed(() => props.items.length);
  const totalPages = computed(() => Math.ceil(totalResults.value / props.perPage));
  const paginatedResults = computed(() => {
    const start = (currentPage.value - 1) * props.perPage;
    const end = start + props.perPage;
    return props.items.slice(start, end);
  });
  const goToPage = (page) => {
    currentPage.value = page;
  };

  </script>

<style scoped>
#data-grid {
  overflow-x: auto;
}
</style>

