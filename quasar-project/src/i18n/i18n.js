import { createI18n } from "vue-i18n";
import messagesEn from "src/i18n/en";
import messagesHr from "src/i18n/hr";

const i18n = createI18n({
  locale: "hr", // default locale
  fallbackLocale: "hr", // fallback if the chosen language is not available
  messages: {
    en: messagesEn,
    hr: messagesHr,
  },
});

export default ({ app }) => {
  app.use(i18n);
};

export { i18n };
