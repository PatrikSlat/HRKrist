<template>
  <q-page padding>
    <q-card class="q-mb-md">
      <q-card-section>
        <div class="text-h6">{{ verseText }}</div>
        <div class="text-subtitle1 text-grey-7 q-mt-sm">
          {{ bookName }} {{ chapter }}:{{ verse }}
        </div>
      </q-card-section>
      <a href="https://biblija.ks.hr/">Read the Bible online</a>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

// Refs for API data
const verseText = ref("");
const bookName = ref("");
const chapter = ref("");
const verse = ref("");

onMounted(async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/random/test");
    const { random_verse } = response.data;

    // Set data from the API
    verseText.value = random_verse.text;
    bookName.value = random_verse.book;
    chapter.value = random_verse.chapter;
    verse.value = random_verse.verse;
  } catch (error) {
    console.error("Error fetching verse:", error);
  }
});
</script>
