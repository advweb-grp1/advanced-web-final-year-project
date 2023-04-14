import {
  getAuth,
  sendPasswordResetEmail,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  sendEmailVerification,
  createUserWithEmailAndPassword
} from 'firebase/auth';
import app from './app';

const firebaseAuth = getAuth(app);

export {
  firebaseAuth,
  sendPasswordResetEmail,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  sendEmailVerification,
  createUserWithEmailAndPassword
};
