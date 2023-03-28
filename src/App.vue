<script setup>
  import { RouterLink, RouterView } from 'vue-router';
  import HelloWorld from './components/HelloWorld.vue';
</script>

<template>
  <header>
    
      <nav>
        <ul>
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/about">About</RouterLink></li>
        <li><RouterLink to="/login">Login</RouterLink></li>
        <li><RouterLink to="/register">Register</RouterLink></li>
      </ul>
      </nav>
  </header>

  <RouterView />
</template>

<style>
nav {
  background-color: #bcbab8;
  color: white;
  padding: 10px;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  display: inline-block;
  margin-right: 10px;
}


</style>
