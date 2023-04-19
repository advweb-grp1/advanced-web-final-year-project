import { getFirestore,
  serverTimestamp,
  collection,
  addDoc,
  getDocs } from 'firebase/firestore';
import app from './app';

const firebaseStore = getFirestore(app);

export {
  firebaseStore,
  serverTimestamp,
  collection,
  addDoc,
  getDocs
};
