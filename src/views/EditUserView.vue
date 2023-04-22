<template>
  <h1>Edit User</h1>
  <br>
  <form @submit.prevent="updateUser">
    <div class="row">
      <div class="col-md-6">
        <label>First Name:</label>
        <input
          v-model="firstName"
          type="text"
          name="firstName"
          class="form-control"
          required
          placeholder="First Name"
        >
        <div class="invalid-feedback">
          Please fill out this field.
        </div>
      </div>
      <div class="col-md-6">
        <label>Surname:</label>
        <input
          v-model="surname"
          type="text"
          name="surname"
          class="form-control"
          required
          placeholder="Surname"
        >
        <div class="invalid-feedback">
          Please fill out this field.
        </div>
      </div>
    </div>

    <div class="form-group">
      <br>
      <label>Address Line 1:</label>
      <input
        v-model="address1"
        type="text"
        name="address1"
        class="form-control"
        required
        placeholder="Address Line 1"
      >
      <div class="invalid-feedback">
        Please fill out this field.
      </div>
      <br>
    </div>

    <div class="form-group">
      <label>Address Line 2:</label>
      <input
        v-model="address2"
        type="text"
        name="address2"
        class="form-control"
        placeholder="Address Line 2"
      >
      <div class="invalid-feedback">
        Please fill out this field.
      </div>
      <br>
    </div>

    <div class="form-group">
      <label>Address Line 3:</label>
      <input
        v-model="address3"
        type="text"
        name="address3"
        class="form-control"
        placeholder="Address Line 3"
      >
      <div class="invalid-feedback">
        Please fill out this field.
      </div>
      <br>
    </div>

    <div class="form-group">
      <label>City:</label>
      <input
        v-model="city"
        type="text"
        name="city"
        class="form-control"
        required
        placeholder="City"
      >
      <div class="invalid-feedback">
        Please fill out this field.
      </div>
      <br>
    </div>

    <div class="form-group">
      <label>Post Code:</label>
      <input
        v-model="postCode"
        type="text"
        name="postCode"
        class="form-control"
        required
        placeholder="Post Code"
      >
      <div class="invalid-feedback">
        Please fill out this field.
      </div>
      <br>
    </div>

    <div class="row">
      <div class="col-md-6">
        <label>Phone Number:</label>
        <input
          v-model="phoneNumber"
          type="text"
          name="phoneNumber"
          class="form-control"
          required
          placeholder="Phone Number"
        >
      </div>

      <div class="col-md-6">
        <label>Institutional Affiliation:</label>
        <input
          v-model="affiliation"
          type="text"
          name="affiliation"
          class="form-control"
          required
          placeholder="Institutional Affiliation"
        >
        <div class="invalid-feedback">
          Please fill out this field.
        </div>
      </div>
    </div>

    <div class="form-group">
      <br>
      <button
        type="success"
        name="submit"
        class="btn btn-primary"
        style="margin: auto"
        @click="updateUser"
      >
        Register
      </button>
    </div>
    <div
      v-if="regError"
      class="alert alert-danger"
      role="alert"
      name="regError"
    >
      {{ regError }}
    </div>
  </form>
</template>

<script setup>
  import{ ref, watch } from 'vue';
  import { useRouter } from 'vue-router';
  import { firebaseStore, collection, query, where, getDocs, updateDoc, doc } from '../firebase/database';
  import { getAuth } from '../firebase/firebaseAuth';

  const firstName = ref('');
  const surname = ref('');
  const address1 = ref('');
  const address2 = ref('');
  const address3 = ref('');
  const city = ref('');
  const postCode = ref('');
  const phoneNumber = ref('');
  const affiliation = ref('');
  const router = useRouter();
  const regError = ref('');
  const auth = getAuth();

  async function getUserInfo(){

    const data = query(collection(firebaseStore,'users_dev'),where('uid','==',auth.currentUser.uid));
    const userData = await getDocs(data);
    userData.forEach(async (userDoc)=>{
      try{
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
  getUserInfo();

  watch(phoneNumber, () =>{
    if(/(^\+?[0-9]{10,15})$/.test(phoneNumber.value) ){
      regError.value = null;
    }else{
      regError.value = 'Phone number is invalid';
    }
  });

  async function updateUser(){
    if(!regError.value){
      if(!firstName.value || !surname.value || !address1.value|| !city.value || !postCode.value ||!phoneNumber.value
        || !affiliation.value){
        regError.value='Please fill all fields';
      }else{
        const getUserId = query(collection(firebaseStore,'users_dev'), where('uid','==',auth.currentUser.uid));
        const getData = await getDocs(getUserId);
        console.log(getData);
        getData.forEach(async (docData)=>{
          try{
            await updateDoc(doc(firebaseStore, 'users_dev', docData.id),{
              firstName: firstName.value,
              surname: surname.value,
              addressline1: address1.value,
              addressline2: address2.value,
              addressline3: address3.value,
              city: city.value,
              postCode: postCode.value,
              phoneNumber: phoneNumber.value,
              affiliation: affiliation.value
            });
            router.push('/profile');
          }
          catch(error){
            console.log(docData.id);
            console.log(error);
          }
        });
      }
    }
  }

</script>
