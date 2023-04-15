import { getFirestore,
  serverTimestamp,
  collection,
  addDoc } from 'firebase/firestore';
import app from './app';

const firebaseStore = getFirestore(app);

export {
  firebaseStore,
  serverTimestamp,
  collection,
  addDoc
};
