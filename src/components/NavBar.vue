<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        Cardiomyopathy
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div id="navbarNav" class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li v-for="item in navbarItems" :key="item.key" class="nav-item">
            <router-link v-if="item.link" class="nav-link" :to="item.link">
              {{ item.label }}
            </router-link>
            <a
              v-else
              class="nav-link"
              href="#"
              @click.prevent="item.action"
            >
              {{ item.label }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
  import { RouterLink,useRouter  } from 'vue-router';
  import { firebaseAuth,signOut } from '../firebase/firebaseAuth';
  import { useUserStore } from '../stores/user';
  import { computed } from 'vue';
  const userStore = useUserStore();

  const router = useRouter();

  function logout(){
    signOut(firebaseAuth).then(
      () => {
        userStore.clear();
        router.push('login');
      },
      (error) => {
        alert(error);
      }
    );
  }
  // Computed property that returns an array of navbar items based on the user's authentication state
  const navbarItems = computed(() => {
    const user = userStore.user.auth;
    const items = [];

    if (user) {
      items.push({ key: 'dashboard', label: 'Dashboard', link: '/dashboard' });
      items.push({ key: 'Profile', label: 'Profile', link: '/profile' });
      items.push({ key: 'query', label: 'Query', link: '/query' });
      items.push({ key: 'add', label: 'Add Data', link: '/addData' });
      items.push({ key: 'mutations', label: 'Mutations', link: '/mutations' });
      items.push({ key: 'data', label: 'Data', link: '/data' });
      items.push({ key: 'help', label: 'Help', link: '/help' });
      items.push({ key: 'logout', label: 'Logout', action: logout });
    } else {
      items.push({ key: 'login', label: 'Login', link: '/login' });
      items.push({ key: 'register', label: 'Register', link: '/register' });
      items.push({ key: 'mutations', label: 'Mutations', link: '/mutations' });
    }

    return items;
  });</script>
