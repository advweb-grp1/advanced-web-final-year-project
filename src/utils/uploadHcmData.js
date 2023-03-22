require('dotenv').config({ path: './.env.local' });

const { getDoc, doc, updateDoc, addDoc, collection,getFirestore } = require('firebase/firestore');
const fs = require('fs');
const csvToJSON = require('csvtojson');
const { initializeApp } = require('firebase/app');

const firebaseStore = () => getFirestore(initializeApp({
  apiKey: process.env.VITE_API_KEY,
  authDomain: process.env.VITE_AUTH_DOMAIN,
  projectId: process.env.VITE_PROJECT_ID,
  storageBucket: process.env.VITE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_APP_ID
}));

const checkHcmDataUploaded = async () => {
  const docRefSetup = doc(firebaseStore(), 'setup', 't9nDhhUYoy7g5XWvqm0u');
  const docSnapSetup = await getDoc(docRefSetup);

  if (docSnapSetup.exists()) {
    return docSnapSetup.data().hcm_data_uploaded;
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
  data.forEach((item) => batch.push(addDoc(collection(firebaseStore(), 'hcm'), item)));

  try {
    await Promise.all(batch);
    console.log('All items added to the "hcm" collection');

    // Update hcm_data_uploaded to true
    const docRef = doc(firebaseStore(), 'setup', 't9nDhhUYoy7g5XWvqm0u');
    await updateDoc(docRef, { hcm_data_uploaded: true });
    console.log('hcm_data_uploaded updated to true');
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

(async () => {
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
})();
