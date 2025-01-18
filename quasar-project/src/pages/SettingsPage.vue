<template>
  <div class="q-pa-md">
    <h1>{{ $t('settingsPage') }}</h1>
    <q-btn
      color="primary"
      :label="currentLocale === 'hr' ? 'Switch to English' : 'Prebaci na Hrvatski'"
      @click="toggleLanguage"
      class="q-mb-md"
    />
    <div class="q-mt-md">
      <q-btn
        color="secondary"
        :label="$q.dark.isActive ? 'Dark Mode ON' : 'Dark Mode OFF'"
        @click="toggleTheme"
      />
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { useQuasar } from 'quasar';

export default {
  name: 'SettingsPage',
  setup() {
    const { locale } = useI18n();
    const currentLocale = ref(locale.value);

    const toggleLanguage = () => {
      const newLocale = currentLocale.value === 'hr' ? 'en' : 'hr';
      currentLocale.value = newLocale;
      locale.value = newLocale;
      localStorage.setItem('locale', newLocale);
    };

    const $q = useQuasar();

    const toggleTheme = () => {
      $q.dark.toggle();
      localStorage.setItem('theme', $q.dark.isActive ? 'dark' : 'light');
    };

    watch(
      () => $q.dark.isActive,
      (val) => {
        console.log(val ? 'Dark Mode Activated' : 'Light Mode Activated');
      }
    );

    return {
      currentLocale,
      toggleLanguage,
      toggleTheme,
      $q,
    };
  },
};
</script>

<style scoped>
.q-btn {
  margin-top: 20px;
}

.q-mb-md {
  margin-bottom: 20px;
}
</style>
