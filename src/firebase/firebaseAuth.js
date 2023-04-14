import { getAuth, sendPasswordResetEmail, onAuthStateChanged, signOut } from 'firebase/auth';
import app from './firebaseApp';

const firebaseAuth = getAuth(app);

export {
  firebaseAuth,
  sendPasswordResetEmail,
  onAuthStateChanged,
  signOut };
