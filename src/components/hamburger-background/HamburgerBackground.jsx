import { useDispatch } from 'react-redux';
import { HamburgerBackgroundBox } from './HamburgerBackgroundStyles';
import { showSidebar } from '../hamburger-button/showSidebarSlice';

export const HamburgerBackground = () => {
  const dispatch = useDispatch();
  const show = () => dispatch(showSidebar());
  return <HamburgerBackgroundBox onClick={show} />;
};
