<template>
  <NavBar />
  <Suspense>
    <!-- Main Content -->
    <main class="container">
      <router-view />
    </main>
  </Suspense>
</template>

<script setup>
  import { RouterView } from 'vue-router';
  import NavBar from './components/NavBar.vue';
</script>

<style>
/* Add your custom styles here */
</style>
