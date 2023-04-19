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
        <tr v-for="item in props.items" :key="item.id">
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
</template>

  <script setup>

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

  </script>

<style scoped>
#data-grid {
  overflow-x: auto;
}
</style>

