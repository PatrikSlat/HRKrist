import { boot } from 'quasar/wrappers';
import { createI18n } from 'vue-i18n';


const messages = {
  hr: {
    home: "Naslovnica",
    about: "O nama",
    random: "Nasumično",
    help: "Volontiranje",
    name: "HRKrist",
    contact: "Kontakt",
    login: "Prijava",
    register: "Registracija",
    description: "HRKrist je aplikacija koja olakšava dobrovoljno davanje. Povezuje te s udrugama poput Crvenog križa i župnih zajednica koje traže pomoć u raznim područjima. Uz to, nudi bogatu riznicu kršćanskih sadržaja za tvoju duhovnu obnovu.",
    settings: "Postavke",
    darkMode: "Tamna tema",
    language: "Jezik",
    settingsPage: "Postavke",
    prayer: "Molitvneni Podjsetnik",
    intention: "Molitvena Nakana",
    churches: "Crkve"
  },
  en: {
    home: "Homepage",
    about: "About Us",
    name: "HRKrist",
    random: "Random",
    help: "Volunteering",
    login: "Login",
    register: "Register",
    contact: "Contact",
    description: "HRKrist is an app that makes volunteering easier. It connects you with organizations like the Red Cross and parish communities that need help in various areas. Additionally, it offers a rich collection of Christian content for your spiritual renewal.",
    settings: "Settings",
    darkMode: "Dark Mode",
    language: "Language",
    settingsPage: "Settings",
    prayer: "Prayer Reminder",
    intention: "Prayer Intention",
    churches: "Churches"
  },
};


const savedLocale = localStorage.getItem('locale') || 'hr';

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: savedLocale,
  messages,
});

export default boot(({ app }) => {
  app.use(i18n);
});

export { i18n };
