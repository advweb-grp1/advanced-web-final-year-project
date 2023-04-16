import { getFirestore,
  serverTimestamp,
  collection,
  doc,
  addDoc,
  getDoc } from 'firebase/firestore';
import app from './app';

const firebaseStore = getFirestore(app);

export {
  firebaseStore,
  serverTimestamp,
  collection,
  doc,
  addDoc,
  getDoc
};
