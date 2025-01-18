<template>
  <router-view />
</template>

<script setup>
import { useQuasar } from 'quasar'

const $q = useQuasar()

// Apply the theme from localStorage on app load
const savedTheme = localStorage.getItem('theme')
if (savedTheme) {
  // If there's a saved theme, apply it
  $q.dark.set(savedTheme === 'dark')
} else {
  // If no theme is saved, default to light
  $q.dark.set(false)
}

defineOptions({
  name: 'App'
});
</script>
