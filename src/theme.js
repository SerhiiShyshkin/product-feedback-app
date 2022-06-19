import { createTheme } from '@mui/material/styles';
import '@fontsource/jost/400.css';
import '@fontsource/jost/500.css';
import '@fontsource/jost/600.css';
import '@fontsource/jost/700.css';

export const theme = createTheme({
  breakpoints: {
    values: {
      desktop: 1110,
      tablet: 689,
    },
  },
  palette: {
    common: {
      black: '#000',
      white: '#FFF',
      background: '#F7F8FD',
    },
    primary: {
      main: '#373F68',
      headline: '#3A4374',
      hover: '#656EA3',
      text: '#647196',
    },
    secondary: {
      main: '#AD1FEA',
      hover: '#C75AF6',
    },
    interactive: {
      active: '#4661E6',
      hover: '#CFD7FF',
      main: '#F2F4FE',
      hoverActive: '#7C91F9',
    },
    additionaly: {
      planned: '#F49F85',
      live: '#62BCFA',
    },
    error: {
      main: '#D73737',
      hover: '#E98888',
    },
  },
  typography: {
    fontFamily: 'Jost',
    h1: {
      fontSize: '24px',
      fontWeight: '700',
      lineHeight: '35px',
      letterSpacing: '-0.33px',
    },

    h3: {
      fontSize: '18px',
      fontWeight: '700',
      lineHeight: '26px',
      letterSpacing: '-0.25px',
    },
    h4: {
      fontSize: '14px',
      fontWeight: '700',
      lineHeight: '20px',
      letterSpacing: '-0.2px',
    },
    h5: {
      fontSize: '13px',
      fontWeight: '700',
      lineHeight: '19px',
      letterSpacing: '-0.18px',
    },
    body1: {
      fontSize: '16px',
      fontWeight: '400',
      lineHeight: '23px',
    },
    body2: {
      fontSize: '15px',
      fontWeight: '400',
      lineHeight: '22px',
    },
    body3: {},
    body4: {
      fontSize: '13px',
      fontWeight: '600',
      lineHeight: '19px',
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: '#F7F8FD'
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          borderRadius: '10px',
        },
      },
    },
  },
});

theme.typography.h2 = {
  fontSize: '20px',
  fontWeight: '700',
  lineHeight: '29px',
  letterSpacing: '-0.25px',
  [theme.breakpoints.down('tablet')]: {
    fontSize: '15px',
    lineHeight: '22px',
    letterSpacing: '-0.19px',
  },
};

theme.typography.body3 = {
  fontSize: '15px',
  fontWeight: '500',
  lineHeight: '22px',
  [theme.breakpoints.down('tablet')]: {
    fontSize: '13px',
    lineHeight: '19px',
  },
};
