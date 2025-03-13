import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import useTranslation from '../i18n/useTranslation';

export const LanguageSwitcher: React.FC = () => {
  const { t, changeLanguage, currentLanguage } = useTranslation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('common.welcome')}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, currentLanguage === 'fr' && styles.activeButton]}
          onPress={() => changeLanguage('fr')}
        >
          <Text style={styles.buttonText}>Français</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, currentLanguage === 'en' && styles.activeButton]}
          onPress={() => changeLanguage('en')}
        >
          <Text style={styles.buttonText}>English</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
  },
  activeButton: {
    backgroundColor: '#007AFF',
  },
  buttonText: {
    fontSize: 16,
  },
});

export default LanguageSwitcher; 