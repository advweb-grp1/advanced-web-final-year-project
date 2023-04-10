<template>
  <h1>Register</h1>
  <br>
  <form>
    <div class="form-group">
      <label>Email Address:</label>
      <input
        v-model="email"
        type="email"
        class="form-control"
        aria-describedby="emailMessage"
        required
        placeholder="Email"
      >
      <small
        id="emailMessage"
        class="form-text text-muted"
      >Enter a valid email which has not already been registered</small>
      <br>
    </div>

    <div class="form-group">
      <br>
      <label>Password:</label>
      <input
        v-model="password"
        type="password"
        class="form-control"
        show-password
        required
        placeholder="Password"
        aria-describedby="passwordMessage"
      >
    </div>

    <div class="form-group">
      <br>
      <label>Full Name:</label>
      <input
        v-model="name"
        type="text"
        class="form-control"
        required
        placeholder="Name"
      >
    </div>
    <br>

    <div class="form-group">
      <label>Address:</label>
      <input
        v-model="address"
        type="text"
        class="form-control"
        required
        placeholder="Address"
      >
      <br>
    </div>

    <div class="form-group">
      <label>Phone Number:</label>
      <input
        v-model="phoneNumber"
        type="text"
        class="form-control"
        required
        placeholder="Phone Number"
      >
      <br>
    </div>

    <div class="form-group">
      <label>Institutional Affiliation:</label>
      <input
        v-model="affiliation"
        type="text"
        class="form-control"
        required
        placeholder="Institutional Affiliation"
      >
    </div>

    <div class="form-group">
      <br>
      <button
        type="success"
        class="btn btn-primary"
        style="margin: auto"
        @click="registerUser"
      >
        Register
      </button>
    </div>
    <div v-if="regError" class="alert alert-danger" role="alert">
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

  watch(phoneNumber, () =>{
    if(/^[+][0-9]/.test(phoneNumber.value) ){
      regError.value = null;
    }else{
      regError.value = 'Phone number is invalid';
    }
  });



  async function registerUser(){
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
          addDoc(addUser,newUser);
        })
        .catch((error) => {
          console.log(error);
          regError.value = error;
        });
      router.push('/login');
    }
  }



</script>
