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
      required: true
    },
    columns: {
      type: Array,
      required: true
    },
    perPage: {
      type: Number,
      default: 10
    },
    actions: {
      type: Boolean,
      default: false
    },
    deleteItem: Function
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

