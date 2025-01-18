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
        <q-item-label header> {{ $t("home") }} </q-item-label>

        <EssentialLink v-for="link in linksList" :key="link.title" v-bind="link" target="_self" />
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
import { ref } from 'vue'
//import { computed } from 'vue';
import EssentialLink from 'components/EssentialLink.vue'
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const linksList = [
  {
    title: t("home"),
    icon: 'home',
    link: '/'
  },
  {
    title: t("random"),
    icon: 'shuffle',
    link: '/#/random',
  },
  {
    title: t("help"),
    icon: 'volunteer_activism',
    link: '/#/volunteer',
  },
  {
    title: t("contact"),
    icon: 'contact_mail',
    link: '/#/contact',
  },
  {
    title: t("settings"),
    icon: 'settings',
    link: '/#/settings',
  },
  {
    title: t("login"),
    icon: 'login',
    link: '/#/login',
  },
  {
    title: t("register"),
    icon: 'person_add',
    link: '/#/register',
  },
];

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

<script>
import { Notify } from "quasar";

export default {
  name: "MainLayout",
  data() {
    return {
      isOnline: navigator.onLine, // Početni status mreže
    };
  },
  mounted() {
    // Postavljanje event listenera za promjenu mrežnog statusa
    window.addEventListener("online", this.handleNetworkChange);
    window.addEventListener("offline", this.handleNetworkChange);

    // Prikazujemo početni status mreže kao notifikaciju
    this.notifyNetworkStatus();
  },
  beforeUnmount() {
    // Uklanjamo event listenere kad komponenta nije prikazana
    window.removeEventListener("online", this.handleNetworkChange);
    window.removeEventListener("offline", this.handleNetworkChange);
  },
  methods: {
    handleNetworkChange() {
      // Ažuriranje statusa mreže i prikazivanje obavijesti
      this.isOnline = navigator.onLine;
      this.notifyNetworkStatus();
    },
    notifyNetworkStatus() {
      if (this.isOnline) {
        // Prikazuje notifikaciju za ponovno uspostavljenu vezu
        Notify.create({
          type: "positive",
          message: "Internet connection retrieved.",
          icon: "wifi",
          timeout: 2000, // Notifikacija nestaje nakon 2 sekunde
        });
      } else {
        // Prikazuje notifikaciju za gubitak veze
        Notify.create({
          type: "negative",
          message: "Internet connection lost.",
          icon: "wifi_off",
          timeout: 0, // Notifikacija ostaje dok korisnik ponovno ne bude online
          actions: [{ label: "OK", color: "white" }],
        });
      }
    },
  },
};
</script>

<style>
.nav-title {
  font-size: 5vw;
  font-weight: bold;
}

.logo {
  width: 10%;
  /* Set width as a percentage of its container */
  height: auto;
  /* Maintain the aspect ratio */
  max-width: 300px;
  /* Optional: limit the maximum width */
}
</style>
