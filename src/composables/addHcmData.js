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
import { collections,fields } from '../firebase/constants';

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

    //add DocumentData type to HcmStore
    const docRef = await doc(firebaseStore, collections.hcm, initialDoc.id);
    const docSnap = await getDoc(docRef);
    hcmStore.docs.push(docSnap);
    const filteredData = {};
    for (const field of fields) {
      if (Object.prototype.hasOwnProperty.call(docSnap.data(), field.docField)) {
        if (field.docField == 'female'){
          if (docSnap.data()[field.docField] == 1){
            filteredData[field.docField] = 'Female';
          }else{
            filteredData[field.docField] = 'Male';
          }
        }else{
          //convert 0 and 1 to no and yes for displaying to user
          if(docSnap.data()[field.docField] == 0){
            filteredData[field.docField] = 'No';
          }else if (docSnap.data()[field.docField] == 1){
            filteredData[field.docField] = 'Yes';
          }else{
            filteredData[field.docField] = docSnap.data()[field.docField];
          }
        }
      }
    }
    filteredData['id'] = docSnap.id;
    filteredData['created_by_user_id'] = docSnap.data()['created_by_user_id'];
    this.displayDocs.push(filteredData);  });
  return true;
};
