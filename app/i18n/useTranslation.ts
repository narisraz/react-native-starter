import { useTranslation as useI18nTranslation } from 'react-i18next';
import { useCallback } from 'react';
import fr from './locales/fr.json';

type DotPrefix<T extends string> = T extends '' ? '' : `.${T}`;

type DotNestedKeys<T> = (T extends object ?
  { [K in Exclude<keyof T, symbol>]: `${K}${DotPrefix<DotNestedKeys<T[K]>>}` }[Exclude<keyof T, symbol>]
  : '') extends infer D ? Extract<D, string> : never;

type TranslationKeys = DotNestedKeys<typeof fr>;

export const useTranslation = () => {
  const { t, i18n } = useI18nTranslation();

  const translate = useCallback((key: TranslationKeys, options?: any): string => {
    return String(t(key, options));
  }, [t]);

  const changeLanguage = useCallback((lang: 'fr' | 'en') => {
    return i18n.changeLanguage(lang);
  }, [i18n]);

  return {
    t: translate,
    changeLanguage,
    currentLanguage: i18n.language,
  };
};

export default useTranslation; 