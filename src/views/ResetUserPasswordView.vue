<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3 ">
        <h2 class="text-center">
          Reset Your Password
        </h2>
        <div class="form-group">
          <label for="email">Email Address/Username</label>
          <input
            id="email"
            v-model="email"
            type="email"
            class="form-control mb-3"
            placeholder="Personal Email Address"
          >
        </div>
        <button class="btn btn-primary btn-block" @click="sendEmail">
          Send Email
        </button>
      </div>
    </div>
  </div>
</template>


<script setup>
  import { ref } from 'vue';
  import { sendResetLink } from '../composables/sendResetLink';
  import router from '../router';

  const email = ref('');

  const sendEmail = () => {
    if(sendResetLink(email)){
      alert('Please your check email');

      //redirect after 3 seconds
      setTimeout(() => router.push({ path: 'login' }), 3000);
    }
  };
</script>
