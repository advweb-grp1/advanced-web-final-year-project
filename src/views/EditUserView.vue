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
        Edit
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
  import { firebaseStore, updateDoc, doc } from '../firebase/database';
  import { useUserStore } from '../stores/user';
  import { collections } from '../firebase/constants';
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


  const userStore = useUserStore();
  const user = userStore.user;
  firstName.value = user.info.firstName;
  surname.value = user.info.surname;
  address1.value = user.info.addressline1;
  address2.value = user.info.addressline2;
  address3.value = user.info.addressline3;
  city.value = user.info.city;
  postCode.value = user.info.postCode;
  phoneNumber.value = user.info.phoneNumber;
  affiliation.value = user.info.affiliation;

  watch(phoneNumber, () =>{
    if(/(^\+?[0-9]{10,15})$/.test(phoneNumber.value) ){
      regError.value = null;
    }else{
      regError.value = 'Phone number is invalid';
    }
  });

  async function updateUser(){
    console.log(user.info);
    if(!regError.value){
      if(!firstName.value || !surname.value || !address1.value|| !city.value || !postCode.value ||!phoneNumber.value
        || !affiliation.value){
        regError.value='Please fill all fields';
      }else{
        try{
          await updateDoc(doc(firebaseStore, collections.user, user.doc.id),{
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
          user.info.firstName = firstName.value;
          user.info.surname = surname.value;
          user.info.addressline1 = address1.value;
          user.info.addressline2 = address2.value;
          user.info.addressline3 = address3.value;
          user.info.city = city.value;
          user.info.postCode = postCode.value;
          user.info.phoneNumber = phoneNumber.value;
          user.info.affiliation = affiliation.value;
          router.push('/profile');
        }catch (error){
          console.log(error);
        }
      }
    }
  }


</script>
