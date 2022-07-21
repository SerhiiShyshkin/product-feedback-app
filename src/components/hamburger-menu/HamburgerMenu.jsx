import { Slide } from '@mui/material';
import { Sidebar } from '../sidebar/Sidebar';
import { HamburgerMenuContainer } from './HamburgerMenuStyles';

export const HamburgerMenu = () => {
  return (
    <Slide direction='left' in={true} mountOnEnter unmountOnExit>
      {
        <HamburgerMenuContainer disableGutters>
          <Sidebar />
        </HamburgerMenuContainer>
      }
    </Slide>
  );
};
