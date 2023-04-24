<template>
  <div class="card">
    <div class="card-header">
      <h1> User Profile</h1>
    </div>
    <div class="card-body">
      <label for="email">Email: &nbsp; </label>
      <span>{{ user.info.email }}</span>
    </div>
    <div class="card-body">
      <label for="firstName">First Name:&nbsp;</label>
      <span>{{ user.info.firstName }}</span>
      <label for="surname"> &nbsp; &nbsp; Surname: &nbsp;</label>
      <span>{{ user.info.surname }}</span>
    </div>
    <div class="card-body">
      <label for="addressline1">Address Line 1: &nbsp;</label>
      <span>{{ user.info.addressline1 }}</span>
    </div>
    <div v-if="user.info.addressline2" class="card-body">
      <label for="addressline2">Address Line 2: &nbsp;</label>
      <span>{{ user.info.addressline2 }}</span>
    </div>
    <div v-if="user.info.addressline3" class="card-body">
      <label for="addressline3">Address Line 3:&nbsp;</label>
      <span>{{ user.info.addressline3 }}</span>
    </div>
    <div class="card-body">
      <label for="city">City: &nbsp;</label>
      <span>{{ user.info.city }}</span>
      <label for="postCode">&nbsp; &nbsp;Post Code: &nbsp;</label>
      <span> {{ user.info.postCode }}</span>
    </div>
    <div class="card-body">
      <label for="phoneNumber">Phone Number: &nbsp;</label>
      <span>{{ user.info.phoneNumber }}</span>
      <label for="affiliation"> &nbsp;  &nbsp; Institutional Affiliation: &nbsp;</label>
      <span>{{ user.info.affiliation }}</span>
    </div>
    <router-link to="/edit" class="btn btn-primary">
      Edit profile
    </router-link>

    <router-link to="/reset" class="btn btn-link">
      Reset Password
    </router-link>
  </div>
</template>

<script setup>
  import { useUserStore } from '../stores/user';
  const userStore = useUserStore();
  const user = userStore.user;

</script>
<style>
.card{
  margin-top: 2rem
}
</style>
