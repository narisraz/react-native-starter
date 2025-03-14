import { StateCreator, create } from 'zustand';
import { theme as nativeBaseTheme } from '@/features/shared/infrastructure/services/theme/nativebase.config';
import { ITheme } from 'native-base';

export type ColorScheme = 'light' | 'dark';

interface ThemeState {
  colorScheme: ColorScheme;
  theme: ITheme;
  setColorScheme: (scheme: ColorScheme) => void;
  toggleColorScheme: () => void;
}

type ThemeStore = StateCreator<ThemeState>;

const createThemeStore: ThemeStore = (set) => ({
  colorScheme: 'light',
  theme: nativeBaseTheme,
  setColorScheme: (scheme: ColorScheme) => set({ colorScheme: scheme }),
  toggleColorScheme: () => set((state: ThemeState) => ({ 
    colorScheme: state.colorScheme === 'light' ? 'dark' : 'light' 
  })),
});

export const useThemeStore = create<ThemeState>(createThemeStore);
