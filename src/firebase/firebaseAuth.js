import {
  getAuth,
  sendPasswordResetEmail,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword
} from 'firebase/auth';
import app from './app';

const firebaseAuth = getAuth(app);

export {
  firebaseAuth,
  sendPasswordResetEmail,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword
};
