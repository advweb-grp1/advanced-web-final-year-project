import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import{ getFirestore,serverTimestamp, addDoc, collection } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCfaBygdHM184yGknVSDvbtoellDDt6M3w',
  authDomain: 'cardiomyopathy-bbdd6.firebaseapp.com',
  projectId: 'cardiomyopathy-bbdd6',
  storageBucket: 'cardiomyopathy-bbdd6.appspot.com',
  messagingSenderId: '695977639201',
  appId: '1:695977639201:web:99f143fa5b863ed61f9260'
};

const app = initializeApp(firebaseConfig);
const firebaseAuth = getAuth();
const firebaseStore = getFirestore();

export{ app,firebaseAuth,firebaseStore,serverTimestamp, createUserWithEmailAndPassword, addDoc,
  collection };
