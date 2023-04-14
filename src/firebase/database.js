import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword,sendPasswordResetEmail, onAuthStateChanged,
  signOut, sendEmailVerification } from 'firebase/auth';

import{ getFirestore,serverTimestamp, addDoc, collection } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGE_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID
};

const app = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(app);
const firebaseStore = getFirestore();

export{ app,firebaseAuth,firebaseStore,serverTimestamp,sendPasswordResetEmail , onAuthStateChanged,signOut,
  collection, createUserWithEmailAndPassword, addDoc, sendEmailVerification };
