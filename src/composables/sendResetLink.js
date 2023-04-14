import { sendPasswordResetEmail } from '../firebase/firebaseAuth';


export const sendResetLink = (email) => {
  return sendPasswordResetEmail(email.value)
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
