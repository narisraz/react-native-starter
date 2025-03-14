import { extendTheme } from 'native-base';

export const theme = extendTheme({
  colors: {
    primary: {
      50: '#E6F6FF',
      100: '#BAE3FF',
      200: '#7CC4FA',
      300: '#47A3F3',
      400: '#2186EB',
      500: '#0967D2',
      600: '#0552B5',
      700: '#03449E',
      800: '#01337D',
      900: '#002159',
    },
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'primary',
      },
      variants: {
        primary: {
          bg: 'primary.500',
          _pressed: { bg: 'primary.600' },
        },
        secondary: {
          bg: 'gray.100',
          _pressed: { bg: 'gray.200' },
        },
        link: {
          bg: 'transparent',
          _pressed: { bg: 'transparent' },
        },
      },
    },
    Text: {
      defaultProps: {
        color: 'gray.800',
      },
    },
  },
});
