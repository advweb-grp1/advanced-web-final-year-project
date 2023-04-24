import { getFirestore,
  serverTimestamp,
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  query,
  where,
  updateDoc
} from 'firebase/firestore';
import app from './app';

const firebaseStore = getFirestore(app);

export {
  firebaseStore,
  serverTimestamp,
  collection,
  doc,
  addDoc,
  getDocs,
  query,
  where,
  updateDoc,
  getDoc
};
