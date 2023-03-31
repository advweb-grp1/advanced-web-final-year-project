<template>
  <NavBar />
  <!-- Main Content -->
  <main class="container">
    <router-view />
  </main>
</template>

<script setup>
  import { RouterView } from 'vue-router';
  import NavBar from './components/NavBar.vue';
</script>

<style>
/* Add your custom styles here */
</style>
