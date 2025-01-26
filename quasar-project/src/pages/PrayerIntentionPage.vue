<template>
  <q-page padding>
    <q-card class="q-pa-md">
      <q-card-section>
        <div class="text-h5">Dodaj Molitvenu Nakanu</div>
      </q-card-section>
      <q-card-section>
        <q-form @submit.prevent="addNakana" ref="form">
          <q-input
            v-model="nakana.opis"
            label="Vaša Molitvena Nakana"
            filled
            type="textarea"
          />
          <q-btn
            label="Spremi Nakanu"
            type="submit"
            color="primary"
            class="q-mt-md"
          />
        </q-form>
      </q-card-section>
    </q-card>

    <q-card class="q-pa-md q-mt-md">
      <q-card-section>
        <div class="text-h5">Molitvene Nakane</div>
      </q-card-section>
      <q-card-section>
        <q-list>
          <q-item v-for="item in nakane" :key="item.id">
            <q-item-section>
              <div class="text-body1">{{ item.opis }}</div>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      nakana: {
        opis: ''
      },
      nakane: []
    };
  },
  methods: {
    async addNakana() {
      try {
        const response = await axios.post('http://localhost:3000/nakane', this.nakana);
        this.nakane.push(response.data);
        this.resetForm();
      } catch (error) {
        console.error('Greška pri spremanju nakane:', error);
      }
    },
    async fetchNakane() {
      try {
        const response = await axios.get('http://localhost:3000/nakane');
        this.nakane = response.data;
      } catch (error) {
        console.error('Greška pri dohvaćanju nakana:', error);
      }
    },
    resetForm() {
      this.nakana.opis = '';
      this.$refs.form.resetValidation();
    }
  },
  mounted() {
    this.fetchNakane();
  }
};
</script>
