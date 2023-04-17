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
      <br>
    </div>

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
      <br>
    </div>

    <div class="form-group">
      <label>Confirm Password:</label>
      <input
        v-model="confirmPassword"
        type="password"
        name="confirmPassword"
        class="form-control"
        show-password
        required
        placeholder="Confirm Password"
        aria-describedby="passwordMessage"
      >
      <div class="invalid-feedback">
        Please fill out this field.
      </div>
      <br>
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
  import { firebaseAuth, createUserWithEmailAndPassword, sendEmailVerification } from '../firebase/firebaseAuth';
  import { useRouter } from 'vue-router';
  import { ref, watch } from 'vue';
  import { firebaseStore, collection, addDoc } from '../firebase/database';
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
  const email = ref('');
  const password = ref('');
  const confirmPassword = ref('');
  const router = useRouter();
  const regError = ref('');
  defineProps({
    type: {
      type: String,
      default: null
    }
  });

  watch(phoneNumber, () =>{
    if(/(^\+?[0-9]{10,15})$/.test(phoneNumber.value) ){
      regError.value = null;
    }else{
      regError.value = 'Phone number is invalid';
    }
  });

  watch(confirmPassword, (newPassword) =>{
    if(newPassword !== password.value){
      regError.value = 'Passwords do not match';
    }else{
      regError.value = null;
    }
  });

  async function registerUser(){
    const newUser ={
      email: email.value,
      firstName: firstName.value,
      surname: surname.value,
      addressline1: address1.value,
      addressline2: address2.value,
      addressline3: address3.value,
      city: city.value,
      postCode: postCode.value,
      phoneNumber: phoneNumber.value,
      affiliation: affiliation.value
    };
    if(!regError.value){
      if(!firstName.value || !surname.value || !address1.value|| !city.value || !postCode.value ||!phoneNumber.value
        || !affiliation.value || !email.value || !password.value || !confirmPassword.value){
        regError.value='Please fill all fields';
      }else{
        try {
          const cred = await createUserWithEmailAndPassword(firebaseAuth, newUser.email, newUser.password);
          await sendEmailVerification(cred.user);
          newUser.uid = cred.user.uid; // Save the Firebase Authentication UID as a field in the user document
          const userRef = collection(firebaseStore, collections.user);
          await addDoc(userRef, newUser);
          console.log('User created in Firebase Authentication');
          router.push('/login');
        } catch (error) {
          console.log(error);
          regError.value = error;
        }
      }
    }
  }
</script>
