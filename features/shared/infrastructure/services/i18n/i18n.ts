import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';

// Import translations for each feature following DDD principles
import auth from '@/features/auth/infrastructure/i18n';
import shared from '@/features/shared/infrastructure/i18n';

/**
 * Type-safe resources definition following DDD principles.
 * Each feature's translations are isolated in their own namespace.
 */
type Resources = {
  fr: { translation: typeof auth.fr & typeof shared.fr };
  en: { translation: typeof auth.en & typeof shared.en };
};

/**
 * Merge translations from all features following DDD principles.
 * Each feature's translations are namespaced to maintain isolation.
 */
const resources: Resources = {
  fr: {
    translation: {
      ...auth.fr,
      ...shared.fr,
    },
  },
  en: {
    translation: {
      ...auth.en,
      ...shared.en,
    },
  },
};

/**
 * Get the default language based on device settings.
 * Falls back to English if device language is not supported.
 */
const getDefaultLanguage = () => {
  try {
    const deviceLanguage = RNLocalize.getLocales()[0].languageCode;
    return deviceLanguage in resources ? deviceLanguage : 'en';
  } catch (error) {
    return 'en';
  }
};

/**
 * Initialize i18n with our configuration following DDD principles:
 * - Type-safe resources
 * - Feature-based translations
 * - Device language detection
 * - English fallback
 * - No string escaping (React handles this)
 */
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
