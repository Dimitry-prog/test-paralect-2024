import { createTheme, rem } from '@mantine/core';

export const myTheme = createTheme({
  primaryColor: 'purple',
  colors: {
    white: [
      '#ffffff',
      '#e7e7e7',
      '#cdcdcd',
      '#b2b2b2',
      '#9a9a9a',
      '#8b8b8b',
      '#848484',
      '#717171',
      '#656565',
      '#575757',
    ],
    black: [
      '#232134',
      '#e3e3e8',
      '#c5c3d1',
      '#a4a1bb',
      '#8a85a8',
      '#78739c',
      '#6f6a98',
      '#5e5985',
      '#534f77',
      '#000000',
    ],
    gray: [
      '#F5F5F6',
      '#EAEBED',
      '#D5D6DC',
      '#D5D6DC',
      '#ACADB9',
      '#7B7C88',
      '#7B7C88',
      '#7B7C88',
      '#7B7C88',
      '#7B7C88',
    ],
    yellow: [
      '#FAB005',
      '#FAB005',
      '#FAB005',
      '#FAB005',
      '#FAB005',
      '#FAB005',
      '#FAB005',
      '#FAB005',
      '#FAB005',
      '#FAB005',
    ],
    purple: [
      '#541F9D',
      '#F2EBF9',
      '#E5D5FA',
      '#D1B4F8',
      '#BD93F7',
      '#9854F6',
      '#9854F6',
      '#541F9D',
      '#541F9D',
      '#541F9D',
    ],
  },
  headings: {
    fontFamily: 'Inter, sans-serif',
    sizes: {
      h1: {
        fontWeight: '700',
        fontSize: rem(32),
        lineHeight: '1.4',
      },
      h2: {
        fontWeight: '600',
        fontSize: rem(20),
        lineHeight: '1.21',
      },
      h3: {
        fontWeight: '700',
        fontSize: rem(20),
        lineHeight: '1',
      },
    },
  },
  lineHeights: {
    xs: '1.21',
    sm: '1.43',
    md: '1.4',
    lg: '1.6',
    xl: '1.65',
  },
  fontSizes: {
    xs: rem(10),
    sm: rem(14),
    md: rem(16),
    lg: rem(18),
    xl: rem(20),
  },
  components: {
    NavLinks: {
      defaultProps: {
        '&:hover': {
          backgroundColor: 'red',
        },
        '.mantine-NavLink-root': {
          backgroundColor: 'red',
        },
      },
    },
  },
});
