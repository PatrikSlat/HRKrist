<template>
  <q-page padding>
    <q-page-container>
      <q-banner dense class="q-mb-md bg-secondary text-white">
        <template v-slot:avatar>
          <q-icon name="volunteer_activism" color="white" />
        </template>
        <div>
          <h2>Učinite razliku volontiranjem!</h2>
          <p>Saznajte kako možete pomoći i pridružite se zajednici volontera.</p>
        </div>
      </q-banner>

      <q-card bordered class="q-mb-md">
        <q-card-section>
          <div class="text-h5 text-primary">Zašto volontirati?</div>
          <p>Volontiranje nije samo pomaganje drugima, već i prilika za osobni rast, upoznavanje novih ljudi i jačanje zajednice.</p>
        </q-card-section>
      </q-card>

      <q-card bordered class="q-mb-md">
        <q-card-section>
          <div class="text-h5 text-primary">Kako se uključiti?</div>
          <p>Pridruži se jednostavno putem naših online prijavnica ili posjeti naš ured.</p>
        </q-card-section>
        <q-card-actions>
          <q-btn label="Prijavi se" color="primary" to="/signup" />
          <q-btn label="Kontaktiraj nas" flat to="/contact" />
        </q-card-actions>
      </q-card>

      <q-expansion-item icon="info" label="Često postavljana pitanja" class="bg-light">
        <q-list>
          <q-item clickable>
            <q-item-section>Kako mogu pronaći prilike za volontiranje?</q-item-section>
          </q-item>
          <q-item clickable>
            <q-item-section>Što je potrebno da postanem volonter?</q-item-section>
          </q-item>
        </q-list>
      </q-expansion-item>
    </q-page-container>
  </q-page>
</template>

<script>
export default {
  name: "VolunteeringPage",
};
</script>

<style scoped>
.q-page {
  max-width: 800px;
  margin: 0 auto;
}
</style>
