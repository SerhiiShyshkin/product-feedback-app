import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/system';
import { Container } from '@mui/material';
import backgroundDesktop from '../../assets/suggestions/desktop/background-header.png';
import backgroundTablet from '../../assets/suggestions/tablet/background-header.png';
import backgroundMobile from '../../assets/suggestions/mobile/background-header.png';

const HeaderContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  padding: '24px',
  width: '255px',
  height: '137px',
  backgroundImage: `url(${backgroundDesktop})`,
  backgroundRepeat: 'no-repeat',
  color: theme.palette.common.white,
  [theme.breakpoints.down('desktop')]: {
    width: '223px',
    height: '178px',
    backgroundImage: `url(${backgroundTablet})`,
    backgroundRepeat: 'no-repeat',
  },
  [theme.breakpoints.down('tablet')]: {
    minWidth: '375px',
    width: '100%',
    height: '72px',
    backgroundImage: `url(${backgroundMobile}) no-repeat center center fixed`,
    backgroundSize: 'cover',
    borderRadius: 0,
    padding: '16px 24px',
  },
}));

const Header = ({ children }) => {
  return <HeaderContainer>{children}</HeaderContainer>;
};

Header.propTypes = {};

export default Header;
