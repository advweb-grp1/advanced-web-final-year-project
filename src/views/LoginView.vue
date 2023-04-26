<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">
            {{ title }}
          </div>
          <div class="card-body">
            <form>
              <div class="form-group">
                <label for="email">{{ emailLabel }}</label>
                <input
                  id="email"
                  v-model="email"
                  type="email"
                  class="form-control"
                  required
                >
              </div>
              <div class="form-group">
                <label for="password">{{ passwordLabel }}</label>
                <input
                  id="password"
                  v-model="password"
                  type="password"
                  class="form-control mb-3"
                  required
                >
              </div>
              <button
                type="submit"
                class="btn btn-primary btn-block"
                :disabled="disabled"
                @click.prevent="login"
              >
                {{ loginButton }}
              </button>
              <router-link to="/reset" class="btn btn-link">
                Forgotten password?
              </router-link>
            </form>
            <div v-if="errorMessage" class="alert alert-danger mt-3">
              {{ errorMessage }}
            </div>
            <div v-if="flashMessage" class="alert alert-warning mt-3">
              {{ flashMessage }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

  import { ref } from 'vue';
  import { firebaseAuth, signInWithEmailAndPassword } from '../firebase/firebaseAuth';
  import { useUserStore } from '../stores/user';
  import { useRouter } from 'vue-router';
  import { useHcmStore } from '../stores/hcm';
  import { useGeneStore } from '../stores/gene';

  const userStore = useUserStore();
  const title = 'Login';
  const emailLabel = 'Email address';
  const passwordLabel = 'Password';
  const loginButton = 'Login';
  const email = ref('');
  const password = ref('');
  const errorMessage = ref('');
  const flashMessage = ref('');
  const maxAttempts = 5;
  const timeoutMiliseconds = 180000;
  let attempts = 0;
  let disabled = false;
  const router = useRouter();

  async function login() {
    if (disabled) {
      errorMessage.value = 'Login disabled for 5 minutes after unsuccessful attempts.';
      return;
    }

    signInWithEmailAndPassword( firebaseAuth, email.value, password.value)
      .then((userCredential) => {
        const user = userCredential.user;

        // Check if the user's email is verified
        if (user.emailVerified) {
          // Email is verified, proceed to home page
          const store = useHcmStore();
          (async () => {
            await store.fetchCollection();
            console.log('loaded hcm data');
          })();

          const geneStore = useGeneStore();
          (async () => {
            await geneStore.fetchMutations();
            console.log('loaded gene data');
          })();
          userStore.set(user);
          router.push('/'); // Emit the user object to the user store
        } else {
          // Email is not verified, show error message and sign out the user
          errorMessage.value = 'Please verify your email before logging in.';
          firebaseAuth.signOut();
        }
      })
      .catch(() => {
        errorMessage.value = 'Invalid login credentials';
        attempts++;
        checkAttempts();
      });


  }

  function checkAttempts() {
    if (attempts >= maxAttempts) {
      disabled = true;
      errorMessage.value = '';
      flashMessage.value = 'Login disabled for 3 minutes after unsuccessful attempts.';
      setTimeout(() => {
        disabled = false;
        flashMessage.value = '';
        attempts = 0;
      }, timeoutMiliseconds); // 3 minutes in milliseconds
    }
  }

</script>
