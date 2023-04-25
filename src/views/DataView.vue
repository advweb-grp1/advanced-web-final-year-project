<template>
  <div>
    <div v-if="data.length !=0" class="container mt-3">
      <h3>Data Grid</h3>
      <DataGrid
        :items="data"
        :columns="columns"
        :actions="true"
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
  import { useHcmStore } from '../stores/hcm';
  import { ref } from 'vue';
  import { fields,collections } from '../firebase/constants';
  import DataGrid from '../components/DataGrid.vue';
  import { firebaseStore, doc,deleteDoc } from '../firebase/database';
  const hcmStore = useHcmStore();
  const data = ref(hcmStore.displayDocs);
  const columns = fields;
  const deleteItem = async (item) =>{
    try {
      const docRef = await doc(firebaseStore, collections.hcm, item.id);
      await deleteDoc(docRef);
      data.value.splice(data.value.indexOf(item),1);
    } catch (error) {
      console.error('Error deleting document: ', error);
    }
  };

</script>
