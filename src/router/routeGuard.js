import { useUserStore } from '../stores/user';


export function requireSignedOut(to, from, next) {
  const userStore = useUserStore();

  if (userStore.user.auth) {
    next({ name: 'home' });
  } else {
    next();
  }
}

export function requireSignedIn(to, from, next) {
  const userStore = useUserStore();

  if (!userStore.user.auth) {
    next({ name: 'login' });
  } else {
    next();
  }
}
