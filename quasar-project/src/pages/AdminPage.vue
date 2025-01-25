<template>
  <q-page padding>
    <q-form class="q-mb-md" @submit.prevent="login">
      <q-card bordered>
        <q-card-section>
          <div class="text-h5 text-primary">Admin Login!</div>
          <q-input
            filled
            v-model="username"
            label="Username"
            type="text"
            class="q-mb-sm"
          />
          <q-input
            filled
            v-model="password"
            label="Password"
            type="password"
            class="q-mb-sm"
          />
        </q-card-section>
        <q-card-actions>
          <q-btn label="Login" color="primary" type="submit" />
        </q-card-actions>
      </q-card>
    </q-form>
    <p v-if="error" style="color: red">{{ error }}</p>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const username = ref("");
const password = ref("");
const error = ref("");

const router = useRouter();

const login = async () => {
  try {
    const response = await axios.post("http://localhost:3000/api/db/admin", {
      username: username.value,
      password: password.value,
    });

    if (response.data.success) {
      router.push({ name: "admin" });
    } else {
      error.value = "Invalid username or password";
    }
  } catch (err) {
    error.value = "An error occurred. Please try again.";
    console.error(err);
  }
};
</script>
