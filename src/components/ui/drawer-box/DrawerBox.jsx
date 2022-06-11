import React from 'react';

import { Container, Slide, styled } from '@mui/material';
import CategoriesFilter from '../../categories-filter/CategoriesFilter';

const StyledDrawerBox = styled(Container)(({ theme }) => ({
  display: 'none',
  position: 'absolute',
  top: '72px',
  right: 0,
  padding: '24px',
  borderRadius: 0,
  width: '271px',
  height: '100vh',
  minHeight: '100%',
  background: '#F7F8FD',
  [theme.breakpoints.down('tablet')]: {
    display: 'block',
  },
}));

const DrawerBox = () => {
  return (
    <Slide direction='left' in={true} mountOnEnter unmountOnExit>
      {
        <StyledDrawerBox>
          <CategoriesFilter />
        </StyledDrawerBox>
      }
    </Slide>
  );
};

export default DrawerBox;
