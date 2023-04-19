import { defineStore } from 'pinia';
import { firebaseStore, collection,getDocs } from '../firebase/database';
import { collections } from '../firebase/constants';
import { fields } from '../firebase/constants';
export const useHcmStore = defineStore({
  id: 'hcmStore',
  state: () => ({
    docs: [],
    fetched: false,
    displayDocs:[]
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
        const filteredData = {};
        for (const field of fields) {
          if (Object.prototype.hasOwnProperty.call(q.data(), field.docField)) {
            filteredData[field.docField] = q.data()[field.docField];
          }
        }
        filteredData['id'] = q.id;
        filteredData['created_by_user_id'] = q.data()['created_by_user_id'];
        this.displayDocs.push(filteredData);
      });
      this.fetched = true;
    }
  }
});
