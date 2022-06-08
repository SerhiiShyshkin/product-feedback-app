import React from 'react';

import { Container, styled, useMediaQuery, useTheme } from '@mui/material';

import backgroundDesktop from '../../assets/suggestions/desktop/background-header.png';
import backgroundTablet from '../../assets/suggestions/tablet/background-header.png';
import backgroundMobile from '../../assets/suggestions/mobile/background-header.png';

import Headline from '../headline/Headline';
import Hamburger from '../hamburger/Hamburger';

const StyledHeader = styled(Container)(({ theme }) => ({
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
    gridColumn: '1/3',
  },
}));

const Header = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('tablet'));
  return (
    <StyledHeader>
      <Headline />
      {matches && <Hamburger />}
    </StyledHeader>
  );
};

export default Header;
