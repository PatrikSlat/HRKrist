<template>
  <q-page padding>
    <q-card class="q-pa-md">
      <q-card-section>
        <div class="text-h5">Dodaj Molitveni Podsjetnik</div>
      </q-card-section>
      <q-card-section>
        <q-form @submit.prevent="addReminder" ref="form">
          <q-input v-model="reminder.title" label="Naslov" filled />
          <q-input v-model="reminder.description" label="Opis" filled type="textarea" />
          <q-btn
            label="Spremi Podsjetnik"
            type="submit"
            color="primary"
            class="q-mt-md"
          />
        </q-form>
      </q-card-section>
    </q-card>

    <q-card class="q-pa-md q-mt-md">
      <q-card-section>
        <div class="text-h5">Molitveni Podsjetnici</div>
      </q-card-section>
      <q-card-section>
        <q-list>
          <q-item v-for="reminder in reminders" :key="reminder.id">
            <q-item-section>
              <div class="text-h6">{{ reminder.title }}</div>
              <div class="text-body2">{{ reminder.description }}</div>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      reminder: {
        title: "",
        description: "",
      },
      reminders: [],
    };
  },
  methods: {
    async addReminder() {
      try {
        const response = await axios.post(
          "http://localhost:3000/reminders",
          this.reminder
        );
        this.reminders.push(response.data);
        this.resetForm();
      } catch (error) {
        console.error("Greška pri spremanju podsjetnika:", error);
      }
    },
    async fetchReminders() {
      try {
        const response = await axios.get("http://localhost:3000/reminders");
        this.reminders = response.data;
      } catch (error) {
        console.error("Greška pri dohvaćanju podsjetnika:", error);
      }
    },
    resetForm() {
      this.reminder.title = "";
      this.reminder.description = "";
      this.$refs.form.resetValidation();
    },
  },
  mounted() {
    this.fetchReminders();
  },
};
</script>
