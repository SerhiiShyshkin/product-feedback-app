import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { showSidebar } from './showSidebarSlice';

import { IconButton } from '@mui/material';

import hamburgerIcon from '../../assets/shared/mobile/icon-hamburger.svg';
import closeIcon from '../../assets/shared/mobile/icon-close.svg';

export const HamburgerButton = () => {
  const sidebarState = useSelector(({ show }) => show.value);
  const dispatch = useDispatch();
  const show = () => dispatch(showSidebar());
  return (
    <IconButton sx={{ padding: 0 }} onClick={show}>
      <img src={sidebarState ? closeIcon : hamburgerIcon} alt='Hamburger icon' />
    </IconButton>
  );
};


