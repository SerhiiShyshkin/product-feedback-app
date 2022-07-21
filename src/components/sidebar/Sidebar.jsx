import { SidebarContainer } from './SidebarStyles';
import { useMediaQuery } from '@mui/material';
import { CategoriesFilter } from '../categories-filter/CategoriesFilter';
import { RoadmapBoard } from '../roadmap-board/RoadmapBoard';
import { Header } from '../header/Header';

export const Sidebar = () => {
  const matches = useMediaQuery((theme) => theme.breakpoints.up('tablet'));

  return (
    <SidebarContainer>
      {matches && <Header />}
      <CategoriesFilter />
      <RoadmapBoard />
    </SidebarContainer>
  );
};
