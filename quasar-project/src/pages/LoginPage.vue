<template>
  <q-page padding>
    <q-form class="q-mb-md">
      <q-card bordered>
        <q-card-section>
          <div class="text-h5 text-primary">Prijavi se !</div>
          <q-input filled v-model="email" label="Email" type="text" class="q-mb-sm" />
          <q-input
            filled
            v-model="password"
            label="Password"
            type="password"
            class="q-mb-sm"
          />
        </q-card-section>
        <q-card-actions>
          <q-btn label="Prijavi se !" color="primary" />
        </q-card-actions>
      </q-card>
    </q-form>
  </q-page>
</template>

<script setup>
//
</script>
