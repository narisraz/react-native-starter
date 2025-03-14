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
type TranslationResource = {
  auth: {
    login: {
      title: string;
      emailPlaceholder: string;
      passwordPlaceholder: string;
      submitButton: string;
      forgotPassword: string;
      noAccount: string;
      signUp: string;
      errors: {
        invalidEmail: string;
        invalidPassword: string;
        invalidCredentials: string;
      };
    };
    register: {
      title: string;
      emailPlaceholder: string;
      passwordPlaceholder: string;
      displayNamePlaceholder: string;
      submitButton: string;
      haveAccount: string;
      signIn: string;
      errors: {
        invalidEmail: string;
        invalidPassword: string;
        invalidDisplayName: string;
        emailInUse: string;
      };
    };
  };
  shared: {
    common: {
      loading: string;
      error: string;
      retry: string;
      cancel: string;
      save: string;
      delete: string;
      edit: string;
      close: string;
      confirm: string;
      back: string;
      next: string;
      done: string;
    };
    validation: {
      required: string;
      email: string;
      minLength: string;
      maxLength: string;
      passwordMatch: string;
    };
    errors: {
      network: string;
      server: string;
      unauthorized: string;
      forbidden: string;
      notFound: string;
    };
    notifications: {
      success: string;
      error: string;
      info: string;
      warning: string;
    };
  };
};

type Resources = {
  fr: { translation: TranslationResource };
  en: { translation: TranslationResource };
};

/**
 * Merge translations from all features following DDD principles.
 * Each feature's translations are namespaced to maintain isolation.
 */
const resources: Resources = {
  fr: {
    translation: {
      auth: auth.fr,
      shared: shared.fr,
    },
  },
  en: {
    translation: {
      auth: auth.en,
      shared: shared.en,
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
    defaultNS: 'translation',
    ns: ['translation'],
  });

export default i18n;
