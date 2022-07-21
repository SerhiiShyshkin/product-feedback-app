import { Container, styled } from '@mui/material';
import headerBackgroundMobile from '../../assets/suggestions/mobile/background-header.png';
import headerBackgroundTablet from '../../assets/suggestions/tablet/background-header.png';

export const HeaderContainer = styled(Container)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  minWidth: '327px',
  padding: '16px 24px',
  backgroundImage: `url(${headerBackgroundMobile})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  borderRadius: 0,
  [theme.breakpoints.up('tablet')]: {
    gridTemplateColumns: '1fr',
    alignItems: 'end',
    backgroundImage: `url(${headerBackgroundTablet})`,
    backgroundSize: '100%',
    borderRadius: '10px',
    minWidth: '223px',
    height: '178px',
    padding: '24px',
  },
}));
