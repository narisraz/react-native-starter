import { StateCreator, create } from 'zustand';

export type ColorScheme = 'light' | 'dark';

interface ThemeState {
  colorScheme: ColorScheme;
  setColorScheme: (scheme: ColorScheme) => void;
  toggleColorScheme: () => void;
}

type ThemeStore = StateCreator<ThemeState>;

const createThemeStore: ThemeStore = (set) => ({
  colorScheme: 'light',
  setColorScheme: (scheme: ColorScheme) => set({ colorScheme: scheme }),
  toggleColorScheme: () => set((state: ThemeState) => ({ 
    colorScheme: state.colorScheme === 'light' ? 'dark' : 'light' 
  })),
});

export const useThemeStore = create<ThemeState>(createThemeStore);
