import i18n from 'i18next';
import ru from '@utils/i18n/ru.json';
import kz from '@utils/i18n/kz.json';
import en from '@utils/i18n/en.json';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    ru: { translation: ru },
    kz: { translation: kz },
    en: { translation: en },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
  react: { useSuspense: false },
});

export default i18n;
