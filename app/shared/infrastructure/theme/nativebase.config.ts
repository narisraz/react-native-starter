import { extendTheme } from 'native-base';

export const theme = extendTheme({
  colors: {
    // Add your custom colors here
    primary: {
      50: '#E3F2F9',
      100: '#C5E4F3',
      200: '#A2D4EC',
      300: '#7AC1E4',
      400: '#47A9DA',
      500: '#0088CC',
      600: '#007AB8',
      700: '#006BA1',
      800: '#005885',
      900: '#003F5E',
    },
  },
  config: {
    // Disable native-base warnings in debug mode
    useSystemColorMode: false,
    initialColorMode: 'light',
  },
  components: {
    // Add your custom component styles here
    Button: {
      defaultProps: {
        colorScheme: 'primary',
      },
    },
    // Add more component customizations as needed
  },
});

export type CustomThemeType = typeof theme;
