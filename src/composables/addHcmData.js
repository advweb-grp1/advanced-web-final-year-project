import {
  firebaseStore,
  serverTimestamp,
  collection,
  doc,
  addDoc,
  getDoc
} from '../firebase/database';
//import { firebaseAuth } from '../firebase/firebaseAuth';
import { useUserStore } from '../stores/user';
import { useHcmStore } from '../stores/hcm';
import { collections } from '../firebase/constants';

export const addHcmData = async (patients) => {
  const userStore = useUserStore();
  const hcmStore = useHcmStore();

  //all patients
  await patients.forEach(async patient => {
    //adds timestamp
    patient.timestamp = serverTimestamp();

    //adds user_id to patient document
    patient.created_by_user_id = userStore.user.info.uid;

    //add Data to collection
    const initialDoc = await addDoc(collection(firebaseStore, collections.hcm), patient);
    console.log('Document was created with ID:', initialDoc.id);

    //add DocumentData type to HcmStore
    const docRef = await doc(firebaseStore, collections.hcm, initialDoc.id);
    const docSnap = await getDoc(docRef);
    hcmStore.docs.push(docSnap);
  });
  return true;
};
