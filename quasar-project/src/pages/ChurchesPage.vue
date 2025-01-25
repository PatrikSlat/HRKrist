<template>
  <q-page padding>
    <q-input
      v-model="filterZupanija"
      label="Filter by Zupanija"
      outlined
      class="q-mb-md"
    />

    <q-table :rows="filteredChurches" :columns="columns" row-key="id" flat bordered>
      <template v-slot:body-cell-lokacija="props">
        <q-td :props="props">
          {{ props.row.lokacija }}
        </q-td>
      </template>

      <template v-slot:body-cell-kontakt="props">
        <q-td :props="props">
          <a :href="`tel:${props.row.kontakt}`">{{ props.row.kontakt }}</a>
        </q-td>
      </template>
    </q-table>
  </q-page>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import axios from "axios";

const churches = ref([]);
const filterZupanija = ref("");

const columns = [
  { name: "id", label: "ID", field: "id", align: "left" },
  { name: "ime", label: "Church Name", field: "ime", align: "left" },
  { name: "lokacija", label: "Location", field: "lokacija", align: "left" },
  { name: "zupanija", label: "Zupanija", field: "zupanija", align: "left" },
  { name: "kontakt", label: "Contact", field: "kontakt", align: "left" },
];

const fetchChurches = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/db/churches");
    churches.value = response.data;
    console.log("Fetched churches:", churches.value);
  } catch (error) {
    console.error("Error fetching churches:", error);
  }
};

const filteredChurches = computed(() => {
  if (!filterZupanija.value) return churches.value;
  return churches.value.filter((church) =>
    church.zupanija.toLowerCase().includes(filterZupanija.value.toLowerCase())
  );
});

onMounted(() => {
  fetchChurches();
});
</script>
