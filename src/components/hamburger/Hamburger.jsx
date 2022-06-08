import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSidebar } from '../../store/toggleSidebarSlice';

import { IconButton } from '@mui/material';

import hamburgerIcon from '../../assets/shared/mobile/icon-hamburger.svg';
import closeIcon from '../../assets/shared/mobile/icon-close.svg';

const Hamburger = () => {
  const sidebarState = useSelector(({ toggle }) => toggle.value);
  const dispatch = useDispatch();
  const toggle = () => dispatch(toggleSidebar());
  return sidebarState ? (
    <IconButton onClick={toggle}>
      <img src={closeIcon} alt='Close icon' />
    </IconButton>
  ) : (
    <IconButton onClick={toggle}>
      <img src={hamburgerIcon} alt='Hamburger icon' />
    </IconButton>
  );
};

export default Hamburger;
