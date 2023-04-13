import { firebaseAuth, onAuthStateChanged } from '../firebase/database';

async function checkAuthState() {
  return new Promise((resolve) => {
    onAuthStateChanged(firebaseAuth, (user) => {
      resolve(user);
    });
  });
}

export async function requireSignedOut(to, from, next) {
  const currentUser = await checkAuthState();

  if (currentUser) {
    next({ name: 'home' });
  } else {
    next();
  }
}

export async function requireSignedIn(to, from, next) {
  const currentUser = await checkAuthState();

  if (!currentUser) {
    next({ name: 'login' });
  } else {
    next();
  }
}
