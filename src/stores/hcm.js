import { defineStore } from 'pinia';
import { firebaseStore, collection,getDocs } from '../firebase/database';
import { collections } from '../firebase/constants';

export const useHcmStore = defineStore({
  id: 'hcmStore',
  state: () => ({
    docs: [],
    fetched: false
  }),

  actions: {
    async fetchCollection() {
      if (this.fetched){
        return;
      }
      const querySnapshot = await getDocs(collection(firebaseStore,collections.hcm));
      querySnapshot.forEach((q)=>{
        // Check if the document is empty (no fields)
        if (Object.keys(q).length === 0) {
          return; // Skip this document
        }
        this.docs.push(q);
      });
      this.fetched = true;
    }
  }
});
