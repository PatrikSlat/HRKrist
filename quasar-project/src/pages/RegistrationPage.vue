<template>
  <q-page padding>
    <div>
      <q-form @submit="registerUser">
        <q-input filled v-model="email" type="email" label="Email" class="q-mb-sm" />
        <q-input
          filled
          v-model="password"
          label="Lozinka"
          type="password"
          class="q-mb-sm"
        />
        <q-input
          filled
          v-model="confirmPassword"
          label="Potvrdite lozinku"
          type="password"
          class="q-mb-sm"
        />
        <q-input filled v-model="username" label="Korisničko ime" class="q-mb-sm" />
        <q-btn label="Registruj se" type="submit" color="primary" />
        <q-btn label="Prijava" color="primary" to="/login" />
      </q-form>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import { useQuasar } from "quasar";
import axios from "axios"; // Use ES module import syntax

const $q = useQuasar();

const username = ref("");
const password = ref("");
const confirmPassword = ref("");
const email = ref("");

const registerUser = () => {
  let atSymbol = 0;

  if (email.value) {
    for (let i = 0; i < email.value.length; i++) {
      if (email.value[i] == "@") {
        atSymbol += 1;
      }
    }
  }

  if (atSymbol === 0) {
    $q.notify({
      type: "negative",
      message: "Email must contain @!",
    });
    return;
  }

  if (password.value !== confirmPassword.value) {
    $q.notify({
      type: "negative",
      message: "Password incorrect!",
    });
    return;
  }

  $q.notify({
    type: "positive",
    message: "Signup successful!",
  });

  axios
    .post("http://localhost:3000/api/db/register", {
      email: email.value,
      username: username.value,
      password: password.value,
    })
    .then((response) => {
      console.log("Registration successful:", response.data);
    })
    .catch((error) => {
      console.error("Registration failed:", error);
      console.log("Error details:", error.response);
      $q.notify({
        type: "negative",
        message: `An error occurred ${error}`,
      });
    });
};
</script>

<style>
.q-btn {
  margin-right: 2%;
}
</style>
