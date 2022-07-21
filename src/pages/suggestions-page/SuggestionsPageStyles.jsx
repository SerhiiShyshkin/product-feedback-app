import { Container, styled } from '@mui/material';

export const StyledSugestionsPage = styled(Container)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  minWidth: theme.breakpoints.values.mobile,

  [theme.breakpoints.up('tablet')]: {
    maxWidth: theme.breakpoints.values.tablet,
  },

  [theme.breakpoints.up('desktop')]: {
    gridTemplateColumns: 'auto 1fr',
    maxWidth: theme.breakpoints.values.desktop,
  },
}));
