<template>
  <q-page class="flex flex-center">
    <img alt="Quasar logo" src="./../assets/logo.jpg" style="width: 200px; height: 200px" />

    <p>
      {{ $t("description") }}
    </p>

    <div id="map" style="width: 100%; height: 400px;"></div>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import * as L from 'leaflet';
import "leaflet/dist/leaflet.css";

const initialMap = ref('');


onMounted(() => {
  initialMap.value = L.map('map').setView([45.3312, 14.4322], 12);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy;<a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(initialMap.value);

  L.marker([45.351948, 14.418338]).addTo(initialMap.value)
    .bindPopup('HRKrist HQ')
    .openPopup();
});
</script>
