import React from 'react';
import PropTypes from 'prop-types';
import { Box, styled } from '@mui/system';

const TranslucentBox = styled(Box)(({ theme }) => ({
  display: 'none',
  position: 'absolute',
  top: '72px',
  left: 0,
  right: 0,
  bottom: 0,
  background: 'black',
  opacity: '0.5',
  width: '100%',
  minHeight: '100vh',
  margin: '0 auto',
  [theme.breakpoints.down('tablet')]: {
    display: 'block',
  },
}));

const Translucent = ({ toggle }) => {
  return <TranslucentBox onClick={toggle} />;
};

Translucent.propTypes = {};

export default Translucent;
