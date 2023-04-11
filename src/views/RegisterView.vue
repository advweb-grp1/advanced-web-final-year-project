<template>
  <h1>Register</h1>
  <br>
  <form @submit.prevent="registerUser">
    <div class="form-group">
      <label>Email Address:</label>
      <input
        v-model="email"
        type="email"
        name="email"
        class="form-control"
        aria-describedby="emailMessage"
        required
        placeholder="Email"
      >
      <small
        id="emailMessage"
        class="form-text text-muted"
      >Enter a valid email which has not already been registered</small>
      <div class="invalid-feedback">
        Please fill out this field.
      </div>
      <br>
    </div>

    <div class="form-group">
      <br>
      <label>Password:</label>
      <input
        v-model="password"
        type="password"
        name="password"
        class="form-control"
        show-password
        required
        placeholder="Password"
        aria-describedby="passwordMessage"
      >
      <div class="invalid-feedback">
        Please fill out this field.
      </div>
    </div>

    <div class="form-group">
      <br>
      <label>Full Name:</label>
      <input
        v-model="name"
        type="text"
        name="name"
        class="form-control"
        required
        placeholder="Name"
      >
      <div class="invalid-feedback">
        Please fill out this field.
      </div>
    </div>
    <br>

    <div class="form-group">
      <label>Address:</label>
      <input
        v-model="address"
        type="text"
        name="address"
        class="form-control"
        required
        placeholder="Address"
      >
      <div class="invalid-feedback">
        Please fill out this field.
      </div>
      <br>
    </div>

    <div class="form-group">
      <label>Phone Number:</label>
      <input
        v-model="phoneNumber"
        type="text"
        name="phoneNumber"
        class="form-control"
        required
        placeholder="Phone Number"
      >
      <div class="invalid-feedback">
        Please fill out this field.
      </div>
      <br>
    </div>

    <div class="form-group">
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

    <div class="form-group">
      <br>
      <button
        type="success"
        name="submit"
        class="btn btn-primary"
        style="margin: auto"
        @click="registerUser"
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
  import { firebaseAuth, createUserWithEmailAndPassword, firebaseStore, collection,
           addDoc } from '../firebase/database';
  import { useRouter } from 'vue-router';
  import { ref, watch } from 'vue';


  const name = ref('');
  const address = ref('');
  const phoneNumber = ref('');
  const affiliation = ref('');
  const email = ref('');
  const password = ref('');
  const router = useRouter();
  const regError = ref('');
  defineProps({
    type: {
      type: String,
      default: null
    }
  });
  watch(phoneNumber, () =>{
    if(/^[+][0-9]/.test(phoneNumber.value) ){
      regError.value = null;
    }else{
      regError.value = 'Phone number is invalid';
    }
  });

  function registerUser(){
    const newUser ={
      email: email.value,
      password: password.value,
      name: name.value,
      address: address.value,
      phoneNumber: phoneNumber.value,
      affiliation: affiliation.value
    };
    if(!regError.value){
      let addUser = collection(firebaseStore,'users');
      createUserWithEmailAndPassword(firebaseAuth, newUser.email, newUser.password)
        .then(() => {
          console.log('User created in Firebase Authentication');
          return addDoc(addUser,newUser);
        })
        .then(() =>{
          console.log('User data added to Firestore');
          router.push('/login');
        })
        .catch((error) => {
          console.log(error);
          regError.value = error;
        });


    }
  }




</script>
