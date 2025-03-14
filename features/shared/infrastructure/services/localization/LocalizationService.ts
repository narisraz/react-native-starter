import { Platform } from 'react-native';

/**
 * Fallback implementation for localization service following DDD principles.
 * This service provides a safe fallback when native modules are not available.
 */
class LocalizationService {
  private static instance: LocalizationService;
  private defaultLocale = { languageCode: 'en', countryCode: 'US' };

  private constructor() {}

  public static getInstance(): LocalizationService {
    if (!LocalizationService.instance) {
      LocalizationService.instance = new LocalizationService();
    }
    return LocalizationService.instance;
  }

  /**
   * Get device locales with fallback to default.
   * Follows infrastructure layer pattern for external services.
   */
  public getLocales() {
    // Use platform-specific default if available
    if (Platform.OS === 'ios') {
      return [{ languageCode: 'en', countryCode: 'US' }];
    } else if (Platform.OS === 'android') {
      return [{ languageCode: 'en', countryCode: 'US' }];
    }
    return [this.defaultLocale];
  }

  /**
   * Get current locale with fallback.
   */
  public getCurrentLocale() {
    return this.getLocales()[0];
  }
}

export default LocalizationService;
