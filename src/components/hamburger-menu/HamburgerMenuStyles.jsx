import { Container, styled } from '@mui/material';

export const HamburgerMenuContainer = styled(Container)(({ theme }) => ({
  position: 'absolute',
  right: 0,
  padding: '24px',
  borderRadius: 0,
  width: 'auto',
  height: '100vh',
  minHeight: '100%',
  background: '#F7F8FD',
}));
