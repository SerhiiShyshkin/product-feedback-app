import { Box, Container, styled } from '@mui/material';
import React from 'react';

const StyledContainer = styled(Container)(({ theme }) => ({
  width: '1110px',
  height: '700px',
  background: 'grey',
  display: 'grid',

  gridTemplateAreas: 'sidebar content',

  [theme.breakpoints.down('desktop')]: {
    width: '768px',
    height: '1200px',

    gridTemplateColumns: '1fr 1fr 1fr',
  },
}));

const One = styled(Box)(({ theme }) => ({
  background: 'red',
  width: '100px',
  height: '50px',
  gridArea: 'header',
  
  [theme.breakpoints.down('desktop')]: {},
}));

const Two = styled(Box)(({ theme }) => ({
  background: 'blue',
  width: '100px',
  height: '50px',
  gridArea: 'category',
  
  [theme.breakpoints.down('desktop')]: {},
}));

const Three = styled(Box)(({ theme }) => ({
  background: 'yellow',
  width: '100px',
  height: '50px',
  gridArea: 'roadmap',
  

  [theme.breakpoints.down('desktop')]: {},
}));

const Four = styled(Box)(() => ({
  background: 'green',
  width: '500px',
  height: '30px',
  gridArea: 'toolbar',
}));

const Five = styled(Box)(() => ({
  background: 'peru',
  width: '500px',
  height: '500px',
  gridArea: 'content',
}));

const Main = styled(Box)(({ theme }) => ({
  width: '500px',
  height: '500px',

  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
}));

export const TestComponent = () => {
  return (
    <StyledContainer>
      <One />
      <Two />
      <Three />

      <Four />
      <Five />
    </StyledContainer>
  );
};
