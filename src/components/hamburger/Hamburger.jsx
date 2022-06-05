import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { IconButton } from '@mui/material';
import hamburgerIcon from '../../assets/shared/mobile/icon-hamburger.svg';
import closeIcon from '../../assets/shared/mobile/icon-close.svg';
import { styled } from '@mui/system';

const HamburgerButton = styled(IconButton)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('tablet')]: {
    display: 'block',
  },
}));

const Hamburger = ({ toggle }) => {
  const sidebarState = useSelector(({ toggle }) => toggle.value);
  return sidebarState ? (
    <HamburgerButton onClick={toggle}>
      <img src={closeIcon} alt='Close icon' />
    </HamburgerButton>
  ) : (
    <HamburgerButton onClick={toggle}>
      <img src={hamburgerIcon} alt='Hamburger icon' />
    </HamburgerButton>
  );
};

Hamburger.propTypes = {};

export default Hamburger;
