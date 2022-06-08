import React from 'react';
import { useDispatch } from 'react-redux';

import { Box, styled } from '@mui/system';

import { toggleSidebar } from '../../../store/toggleSidebarSlice';

const StyledTransparent = styled(Box)(({ theme }) => ({
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

const Transparent = () => {
  const dispatch = useDispatch();
  const toggle = () => dispatch(toggleSidebar());
  return <StyledTransparent onClick={toggle} />;
};



export default Transparent;
