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
                  class="form-control"
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
            </form>
            <div v-if="errorMessage" class="mt-3">
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

</script>
