import { ref } from 'vue';
import { defineStore } from 'pinia';
import { firebaseStore, collection,getDocs } from '../firebase/database';
import { collections } from '../firebase/constants';

export const useHcmStore = defineStore({
  id: 'hcmStore',
  state: () => ({
    docs: ref([]),
    feteched: ref(false)
  }),

  actions: {
    async fetchCollection() {
      if (this.feteched){
        return;
      }
      const querySnapshot = await getDocs(collection(firebaseStore,collections.hcm));
      querySnapshot.forEach((q)=>{
        this.docs.push(q);
      });
      this.feteched = true;
    }
  }
});
