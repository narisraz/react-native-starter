import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { DarkTheme, DefaultTheme, ThemeProvider as NavigationThemeProvider } from '@react-navigation/native';
import { useColorScheme } from '@/shared/lib/hooks/useColorScheme';
import { theme } from '@/shared/infrastructure/theme/nativebase.config';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const colorScheme = useColorScheme();

  return (
    <NavigationThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <NativeBaseProvider theme={theme}>
        {children}
      </NativeBaseProvider>
    </NavigationThemeProvider>
  );
};
