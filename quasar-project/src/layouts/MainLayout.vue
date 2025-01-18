<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title class="nav-title"> HRKrist </q-toolbar-title>
        <img alt="HRKrist logo" src="./../assets/logo.jpg" class="logo" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="drawer">
      <q-list>
        <q-item v-for="link in linksList" :key="link.title" clickable tag="a" :href="link.link">
          <q-item-section avatar>
            <q-icon :name="link.icon" />
          </q-item-section>
          <q-item-section>
            {{ link.title }}
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-primary text-white">
      <div class="q-px-md">
        <span>&copy; 2025 HRKrsit. Sva prava pridržana.</span>
        <q-btn flat dense label="Pravila privatnosti" to="/privacy" />
        <q-btn flat dense label="Uvjeti korištenja" to="/terms" />
      </div>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

// Reactive links list using computed
const linksList = computed(() => [
  {
    title: t("home"),
    icon: "home",
    link: "/",
  },
  {
    title: t("random"),
    icon: "shuffle",
    link: "/#/random",
  },
  {
    title: t("help"),
    icon: "volunteer_activism",
    link: "/#/volunteer",
  },
  {
    title: t("contact"),
    icon: "contact_mail",
    link: "/#/contact",
  },
  {
    title: t("settings"),
    icon: "settings",
    link: "/#/settings",
  },
  {
    title: t("login"),
    icon: "login",
    link: "/#/login",
  },
  {
    title: t("register"),
    icon: "person_add",
    link: "/#/register",
  },
]);
</script>

<style>
.nav-title {
  font-size: 5vw;
  font-weight: bold;
}

.logo {
  width: 10%;
  height: auto;
  max-width: 300px;
}
</style>
