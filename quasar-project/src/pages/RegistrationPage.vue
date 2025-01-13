<template>
  <q-page padding>
    <div>
    <q-form @submit="registerUser">
      <q-input filled v-model="email" label="Email" class="q-mb-sm" />
      <q-input filled v-model="password" label="Lozinka" type="password" class="q-mb-sm" />
      <q-input filled v-model="confirmPassword" label="Potvrdite lozinku" type="password" class="q-mb-sm" />
      <q-input filled v-model="username" label="Korisničko ime" class="q-mb-sm" />
      <q-btn label="Registruj se" type="submit" color="primary" />
    </q-form>
  </div>
  </q-page>
</template>

<script setup>
//
</script>
