import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import fr from './locales/fr.json';
import en from './locales/en.json';
import * as RNLocalize from 'react-native-localize';

type Resources = {
  fr: { translation: typeof fr };
  en: { translation: typeof en };
};

const resources: Resources = {
  fr: {
    translation: fr,
  },
  en: {
    translation: en,
  },
};

const getDefaultLanguage = () => {
  try {
    const deviceLanguage = RNLocalize.getLocales()[0].languageCode;
    return deviceLanguage in resources ? deviceLanguage : 'en';
  } catch (error) {
    return 'en';
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: getDefaultLanguage(),
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n; 