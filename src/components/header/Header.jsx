import { useMediaQuery, useTheme } from '@mui/material';
import { HamburgerButton } from '../hamburger-button/HamburgerButton';
import { HeaderLogo } from '../header-logo/HeaderLogo';
import { HeaderContainer } from './HeaderStyles';

export const Header = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('tablet'));
  return (
    <HeaderContainer>
      <HeaderLogo />
      {matches && <HamburgerButton />}
    </HeaderContainer>
  );
};
