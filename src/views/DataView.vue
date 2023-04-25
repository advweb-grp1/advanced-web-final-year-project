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
  <Modal @confirmation="recievedConfirmation">
    <template #title>
      Delete
    </template>
    <template #body>
      {{ modalBody }}
    </template>
    <template #actions>
      <button
        type="button"
        class="btn btn-danger"
        data-bs-dismiss="modal"
        @click="confirm"
      >
        Confirm
      </button>
    </template>
  </Modal>
</template>
<script setup>
  import { useHcmStore } from '../stores/hcm';
  import { ref } from 'vue';
  import { fields,collections } from '../firebase/constants';
  import DataGrid from '../components/DataGrid.vue';
  import { firebaseStore, doc,deleteDoc } from '../firebase/database';
  import Modal  from '../components/ModalComponent.vue';
  const hcmStore = useHcmStore();
  const data = ref(hcmStore.displayDocs);
  const columns = fields;
  const modalBody = 'Confirm that you would like to delete this item?';
  const item = ref();
  const deleteItem = async (i) =>{
    document.getElementById('modalTrigger').click();
    item.value=i;
  };
  const  confirm = async() =>{
    try {

      const docRef = await doc(firebaseStore, collections.hcm, item.value.id);
      await deleteDoc(docRef);
      data.value.splice(data.value.indexOf(item.value),1);
      let docIndex = hcmStore.docs.findIndex(doc => item.value.id === doc.id);
      hcmStore.docs.splice(docIndex,1);
      item.value = {};
    } catch (error) {
      console.error('Error deleting document: ', error);
    }
  };
</script>
