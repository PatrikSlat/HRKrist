<template>
  <q-page padding>
    <q-page-container>
      <q-banner dense class="q-mb-md bg-secondary text-white">
        <template v-slot:avatar>
          <q-icon name="contact_support" color="white" />
        </template>
        <div>
          <h2>Kontaktirajte nas</h2>
          <p>Imate pitanja? Rado ćemo vam pomoći!</p>
        </div>
      </q-banner>


      <q-card bordered class="q-mb-md">
        <q-card-section>
          <div class="text-h5 text-primary">Kontakt informacije</div>
          <p>Telefon: +385 1 234 5678</p>
          <p>Email: kontakt@hrkrsit.hr</p>
        </q-card-section>
      </q-card>

      <q-form class="q-mb-md">
        <q-card bordered>
          <q-card-section>
            <div class="text-h5 text-primary">Pošaljite nam poruku</div>
            <q-input filled v-model="name" label="Ime" class="q-mb-sm" />
            <q-input filled v-model="email" label="Email" class="q-mb-sm" />
            <q-input filled v-model="message" type="textarea" label="Poruka" />
          </q-card-section>
          <q-card-actions>
            <q-btn label="Pošalji" color="primary" @click="sendMessage" />
          </q-card-actions>
        </q-card>
      </q-form>
    </q-page-container>
  </q-page>
</template>

<script>
export default {
  name: "ContactPage",
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    sendMessage() {
      if (this.name && this.email && this.message) {
        this.$q.notify({
          type: "positive",
          message: "Poruka je uspješno poslana!",
        });
        this.name = "";
        this.email = "";
        this.message = "";
      } else {
        this.$q.notify({
          type: "negative",
          message: "Molimo ispunite sva polja.",
        });
      }
    },
  },
};
</script>

<style scoped>
.q-page {
  max-width: 800px;
  margin: 0 auto;
}
</style>
