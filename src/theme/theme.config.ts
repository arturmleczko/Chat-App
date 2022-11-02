import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  palette: {
    common: {
      white: '#FFFFFF',
      black: '#000000',
    },
    primary: {
      main: '#758ECF',
      light: '#DEE5FB',
      dark: '#425DAA',
    },
    grey: {
      main: '#E2DBDB',
      light: '#F5F7FD',
      dark: '#6C757D',
    },
  },
  typography: {
    fontFamily: 'Open Sans',
    fontSize: {
      xsmall: '0.75rem',
      small: '1rem',
      base: '1.125rem',
      medium: '1.5rem',
      big: '1.75rem',
      large: '2.25rem',
    },
    lineHeight: {
      xsmall: '1.25rem',
      small: '1.5rem',
      base: '1.75rem',
      medium: '2rem',
      big: '2.75rem',
      large: '3.5rem',
    },
    fontWeight: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },
  shape: {
    borderRadius: {
      base: '0.25rem',
      medium: '0.5rem',
    },
  },
  breakPoints: {
    sm: '576px',
    md: '768px',
    lg: '992px',
  },
};

export default theme;
