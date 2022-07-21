import { Container, styled } from '@mui/material';

export const SidebarContainer = styled(Container)(({ theme }) => ({
  display: 'grid',
  padding: 0,
  gap: '24px',
  [theme.breakpoints.up('tablet')]: {
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '10px',
  },
  [theme.breakpoints.up('desktop')]: {
    gridTemplateColumns: '1fr',
    gap: '24px',
  },
}));
