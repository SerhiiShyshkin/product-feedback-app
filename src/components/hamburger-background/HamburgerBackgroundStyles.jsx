import { Box, styled } from '@mui/material';

export const HamburgerBackgroundBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  background: 'black',
  opacity: '0.5',
  width: '100%',
  minHeight: '100vh',
  margin: '0 auto',
}));
