import { sendPasswordResetEmail } from '../firebase/firebaseAuth';
import { getAuth } from '../firebase/firebaseAuth';

const auth = getAuth();

export const sendResetLink = (email) => {
  return sendPasswordResetEmail(auth,email.value)
    .then(() => {
      console.log('Password reset email sent!');
      return true;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
      return false;
    });
};
