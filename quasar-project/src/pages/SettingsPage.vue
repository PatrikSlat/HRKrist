<template>
  <q-page padding>
    <div class="row flex-center">
      <div class="text-h2">
        Settings
      </div>
      <div class="q-pa-xl">
        <button @click="changetheme">Change theme</button>


      </div>
    </div>
  </q-page>
</template>

<script setup>
import { watch } from 'vue'
import { useQuasar } from 'quasar'
const $q = useQuasar()

function changetheme() {
  $q.dark.toggle()
  localStorage.setItem('theme', $q.dark.isActive ? 'dark' : 'light')

}
watch(() => $q.dark.isActive, val => {
  console.log(val ? "Dark" : "Light");
})
</script>
