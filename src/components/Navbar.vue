<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
    <div class="topnav">
      <RouterLink to="/home"><i class="fa fa-fw fa-home"></i>Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/login"><i class="fa fa-fw fa-user"></i>Login</RouterLink>
      <RouterLink to="/register">Register</RouterLink>
    </div>
    <RouterView/>
</template>

<style>
.topnav {
  overflow: hidden;
  background-color: #333;
}

.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #04AA6D;
  color: white;
}
</style>