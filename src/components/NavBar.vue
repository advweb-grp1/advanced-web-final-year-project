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
          <li v-if="!user" class="nav-item">
            <router-link class="nav-link" to="/login">
              Login
            </router-link>
          </li>
          <li v-if="user" class="nav-item">
            <router-link class="nav-link" to="/dashboard">
              Dashboard
            </router-link>
          </li>
          <li v-if="user" class="nav-item">
            <router-link class="nav-link" to="/query">
              Query
            </router-link>
          </li>
          <li v-if="!user" class="nav-item">
            <router-link class="nav-link" to="/register">
              Register
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/addData">
              Add data
            </router-link>
          </li>
          <li v-if="user" class="nav-item">
            <a href="#" class="nav-link" @click.prevent="logout">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
  import { RouterLink,useRouter  } from 'vue-router';
  import { ref } from 'vue';
  import { firebaseAuth, onAuthStateChanged,signOut } from '../firebase/firebaseAuth';
  const router = useRouter();
  const user = ref(null);
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) {
      user.value = currentUser;
    } else {
      user.value == null;
    }
  });

  function logout(){
    signOut(firebaseAuth).then(
      () => {
        user.value = null;
        router.push('login');
      },
      (error) => {
        alert(error);
      }
    );
  }
</script>
