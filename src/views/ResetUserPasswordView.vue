<template>
    <h2>Reset Your Password</h2>
    <label for="email">Email Address/Username</label>
    <input type="email" v-model="email" id = "email" placeholder="Personal Email Address">
    <br>
    <button @click="sendEmail">Send Email</button>
</template>

<script setup>
import { ref } from "vue";
import { sendResetLink } from "../composables/example";
import router from "../router";

const email = ref("");

const sendEmail = () => {
    if(sendResetLink(email)){
        alert("MODEL: pls check email :)")
        
        //redirect after 3 seconds
        setTimeout(() => router.push({ path: 'login' }), 3000);
    }
}
</script>