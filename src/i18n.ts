import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import en from './localization/en.json';
import ua from './localization/ua.json';

const resources = {
  en: {
    tranlation: en,
  },
  ua: {
    translation: ua,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: JSON.parse(String(localStorage.getItem('language'))),
  fallbackLng: 'en',
});

export default i18n;
