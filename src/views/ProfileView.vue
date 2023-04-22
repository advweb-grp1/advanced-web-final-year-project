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
  import { firebaseStore, collection, query, where, getDocs } from '../firebase/database';
  import { getAuth } from '../firebase/firebaseAuth';

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
  const auth = getAuth();

  async function getUserData(){
    const data = query(collection(firebaseStore,'users_dev'),where('uid','==',auth.currentUser.uid));
    const userData = await getDocs(data);
    userData.forEach(async (userDoc)=>{
      try{
        email.value = userDoc.data().email;
        firstName.value = userDoc.data().firstName;
        surname.value = userDoc.data().surname;
        address1.value = userDoc.data().addressline1;
        address2.value = userDoc.data().addressline2;
        address3.value = userDoc.data().addressline3;
        city.value = userDoc.data().city;
        postCode.value = userDoc.data().postCode;
        phoneNumber.value = userDoc.data().phoneNumber;
        affiliation.value = userDoc.data().affiliation;
      }catch(error){
        console.log(error);
      }
    });
  }
  getUserData();
</script>
<style>
.card{
  margin-top: 2rem
}
</style>
