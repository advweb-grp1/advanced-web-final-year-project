<template>
  <div class="card">
    <div class="card-header">
      <h1> User Profile</h1>
      <div class="card-body">
        <label for="email">Email: &nbsp; </label>
        <span>{{ email }}</span>
      </div>
      <div class="card-body">
        <label for="firstName">First Name: &nbsp;</label>
        <span>{{ firstName }}</span>
      </div>
      <div class="card-body">
        <label for="surname">Surname: &nbsp;</label>
        <span>{{ surname }}</span>
      </div>
      <div class="card-body">
        <label for="addressline1">Address Line 1: &nbsp;</label>
        <span>{{ address1 }}</span>
      </div>
      <div class="card-body">
        <label for="addressline2">Address Line 2: &nbsp;</label>
        <span>{{ address2 }}</span>
      </div>
      <div class="card-body">
        <label for="addressline3">Address Line 3:&nbsp;</label>
        <span>{{ address3 }}</span>
      </div>
      <div class="card-body">
        <label for="city">City: &nbsp;</label>
        <span>{{ city }}</span>
      </div>
      <div class="card-body">
        <label for="postCode">Post Code: &nbsp;</label>
        <span> {{ postCode }}</span>
      </div>
      <div class="card-body">
        <label for="phoneNumber">Phone Number: &nbsp;</label>
        <span>{{ phoneNumber }}</span>
      </div>
      <div class="card-body">
        <label for="affiliation">Institutional Affiliation: &nbsp;</label>
        <span>{{ affiliation }}</span>
      </div>
    </div>
    <router-link to="/edit" class="btn btn-link">
      Edit data
    </router-link>

    <router-link to="/reset" class="btn btn-link">
      Forgotten password?
    </router-link>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { useUserStore } from '../stores/user';
  const userStore = useUserStore();

  const email = ref('');
  const firstName = ref('');
  const surname = ref('');
  const address1 = ref('');
  const address2 = ref('');
  const address3 = ref('');
  const city = ref('');
  const postCode = ref('');
  const phoneNumber = ref('');
  const affiliation = ref('');
  const user = userStore.user;
  email.value = user.info.email;
  firstName.value = user.info.firstName;
  surname.value = user.info.surname;
  address1.value = user.info.addressline1;
  address2.value = user.info.addressline2;
  address3.value = user.info.addressline3;
  city.value = user.info.city;
  postCode.value = user.info.postCode;
  phoneNumber.value = user.info.phoneNumber;
  affiliation.value = user.info.affiliation;
</script>
<style>
.card{
  margin-top: 2rem
}
</style>
