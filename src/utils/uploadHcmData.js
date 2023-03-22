import { getDoc, doc,updateDoc , addDoc, collection } from 'firebase/firestore';
import { firebaseStore } from '../firebase/database';
import fs from 'fs';
import csvToJSON from 'csvtojson';


const checkHcmDataUploaded = async () => {
  const docRef = doc(firebaseStore, 'setup', 't9nDhhUYoy7g5XWvqm0u');
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data().hcm_data_uploaded;
  } else {
    console.error('No such document!');
    process.exit(1);
  }
};

const checkCsvFile = () => {
  return fs.existsSync('./hcm_data.csv');
};

const parseCsv = async () => {
  const data = await csvToJSON().fromFile('./hcm_data.csv');
  return data;
};
const uploadDataToFirestore = async (data) => {
  const batch = [];
  data.forEach((item) => batch.push(addDoc(collection(firebaseStore, 'hcm'), item)));

  try {
    await Promise.all(batch);
    console.log('All items added to the "hcm" collection');

    // Update hcm_data_uploaded to true
    const docRef = doc(firebaseStore, 'setup', 't9nDhhUYoy7g5XWvqm0u');
    await updateDoc(docRef, { hcm_data_uploaded: true });
    console.log('hcm_data_uploaded updated to true');
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

async () => {
  const hcmDataUploaded = await checkHcmDataUploaded();
  if (!hcmDataUploaded) {
    if (checkCsvFile()) {
      const data = await parseCsv();
      await uploadDataToFirestore(data);
    } else {
      console.error('hcm_data.csv not found');
      process.exit(1);
    }
  }
};
