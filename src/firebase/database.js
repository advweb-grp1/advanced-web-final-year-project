import { getFirestore,
  serverTimestamp,
  collection,
  addDoc,
  getDocs,
  query,
  where
} from 'firebase/firestore';
import app from './app';

const firebaseStore = getFirestore(app);

export {
  firebaseStore,
  serverTimestamp,
  collection,
  addDoc,
  getDocs,
  query,
  where
};
