import { getFirestore, serverTimestamp } from 'firebase/firestore';
import app from './firebaseApp';

const firebaseStore = getFirestore(app);

export { firebaseStore, serverTimestamp };
