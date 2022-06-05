import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/system';
import { Container, Slide } from '@mui/material';

const HamburgerMenu = styled(Container)(({ theme }) => ({
  display: 'none',
  position: 'absolute',
  top: '72px',
  right: 0,
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
      {<HamburgerMenu />}
    </Slide>
  );
};

DrawerBox.propTypes = {};

export default DrawerBox;
