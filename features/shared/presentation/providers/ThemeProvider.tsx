import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { DarkTheme, DefaultTheme, ThemeProvider as NavigationThemeProvider } from '@react-navigation/native';
import { theme } from '@/features/shared/infrastructure/services/theme/nativebase.config';
import { useThemeStore } from '@/features/shared/presentation/store/useThemeStore';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const { colorScheme } = useThemeStore();

  return (
    <NavigationThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <NativeBaseProvider theme={theme}>
        {children}
      </NativeBaseProvider>
    </NavigationThemeProvider>
  );
};
