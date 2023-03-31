<template>
  <!-- Navigation Bar -->
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
          <li class="nav-item">
            <router-link class="nav-link" to="/">
              Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/bootstrap">
              Bootstrap
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/reset">
              Reset
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/login">
              Login
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/dashboard">
              Dashboard
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/query">
              Query
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/register">
              Register
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- Main Content -->
  <main class="container">
    <router-view />
  </main>
</template>

<script setup>
  import { RouterLink, RouterView } from 'vue-router';
</script>

<style>
/* Add your custom styles here */
</style>
