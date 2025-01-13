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
  },
};


//I18N INSTANCA
const i18n = createI18n({
  legacy: false,
  locale: 'hr',   // DEFAULT LANGUAGE
  messages,
  //admin stranica s popisom volontera, popis dogadaja, 
});

export default ({ app }) => {
  app.use(i18n);
};
