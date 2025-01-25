<template>
  <q-page padding>
    <q-form @submit.prevent="loginUser" class="q-mb-md">
      <q-card bordered>
        <q-card-section>
          <div class="text-h5 text-primary">Log in!</div>
          <q-input
            filled
            v-model="email"
            label="Email"
            type="email"
            class="q-mb-sm"
            :rules="[val => !!val || 'Email je obavezan', val => /.+@.+\..+/.test(val) || 'Email not correct']"
          />
          <q-input
            filled
            v-model="password"
            label="Password"
            type="password"
            class="q-mb-sm"
            :rules="[val => !!val || 'Password is necessary']"
          />
        </q-card-section>
        <q-card-actions>
          <q-btn label="Prijavi se !" type="submit" color="primary" />
        </q-card-actions>
      </q-card>
    </q-form>

    
    <q-dialog v-model="showErrorDialog">
      <q-card>
        <q-card-section>
          <div class="text-h6">Error</div>
        </q-card-section>
        <q-card-section>
          {{ errorMessage }}
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="showSuccessDialog">
      <q-card>
        <q-card-section>
          <div class="text-h6">Success</div>
        </q-card-section>
        <q-card-section>
          You are logged in!
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import axios from 'axios';

const $q = useQuasar();

const email = ref('');
const password = ref('');
const showErrorDialog = ref(false);
const showSuccessDialog = ref(false);
const errorMessage = ref('');

const loginUser = async () => {
  try {
    
    const response = await axios.post('http://localhost:3000/api/db/login', {
      email: email.value,
      password: password.value,
    });

    
    if (response.data.success) {
      showSuccessDialog.value = true;
    } else {
      errorMessage.value = response.data.message || 'Login unsuccessful, try again';
      showErrorDialog.value = true;
    }
  } catch (error) {
    errorMessage.value = error.response?.data?.message || 'Error. Try again.';
    showErrorDialog.value = true;
  }
};
</script>

<style>
.q-btn {
  margin-right: 2%;
}
</style>