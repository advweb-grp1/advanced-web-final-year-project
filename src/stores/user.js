import { defineStore } from 'pinia';
import { firebaseStore, collection,getDocs,query,where } from '../firebase/database';
import { collections } from '../firebase/constants';

export const useUserStore = defineStore({
  id: 'userStore',
  state: () => ({
    user: {
      auth:null,
      info:null,
      docs:null
    }
  }),

  actions: {
    async setUserInfo(uid) {
      const userRef = collection(firebaseStore, collections.user);
      const q = query(userRef,where('uid','==',uid));
      const querySnapshot = await getDocs(q);
      const docId = querySnapshot.docs[0].id; // gets the document id
      if (querySnapshot.size === 1) {
        this.user.info = querySnapshot.docs[0].data();
        this.user.docs = docId;
      } else {
        console.error(`Expected 1 document, but got ${querySnapshot.size} documents`);
      }
    },
    clear(){
      this.user.auth = null;
      this.user.info = null;
    },
    set(user){
      this.setUserInfo(user.uid);
      this.user.auth = user;
      this.user.docs = user;
    }
  }
});
