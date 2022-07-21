import { StyledSugestionsPage } from './SuggestionsPageStyles';
import { Box, useMediaQuery } from '@mui/material';
import { Sidebar } from '../../components/sidebar/Sidebar';
import { Header } from '../../components/header/Header';
import { HamburgerMenu } from '../../components/hamburger-menu/HamburgerMenu';
import { useSelector } from 'react-redux';
import { HamburgerBackground } from '../../components/hamburger-background/HamburgerBackground';

export const SuggestionsPage = () => {
  const matches = useMediaQuery((theme) => theme.breakpoints.down('tablet'));
  const sidebarState = useSelector(({ show }) => show.value);

  return (
    <StyledSugestionsPage disableGutters>
      {matches ? <Header></Header> : <Sidebar></Sidebar>}
      <Box sx={{ position: 'relative' }}>
        {matches && sidebarState ? <HamburgerBackground /> : null}
        {matches && sidebarState ? <HamburgerMenu /> : null}
      </Box>
    </StyledSugestionsPage>
  );
};
