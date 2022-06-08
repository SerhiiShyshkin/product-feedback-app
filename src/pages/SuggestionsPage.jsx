import React from 'react';
import { useSelector } from 'react-redux';
import { Container, useMediaQuery, useTheme, styled } from '@mui/material';

import Header from '../components/header/Header';
import DrawerBox from '../components/ui/drawer-box/DrawerBox';
import Transparent from '../components/ui/transparent/Transparent';
import CategoriesFilter from '../components/categories-filter/CategoriesFilter';
import RoadmapBoard from '../components/roadmap-board/RoadmapBoard';
import SuggestionsHeader from '../components/suggtestions-header/SuggestionsHeader';

const StyledSugestionsPage = styled(Container)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'auto 1fr',
  gap: '24px 30px',
  width: theme.breakpoints.values.desktop,
  height: '100%',
  margin: '92px auto 129px auto',
  padding: 0,
  [theme.breakpoints.down('desktop')]: {
    gap: '40px 10px',
    width: theme.breakpoints.values.tablet,
    margin: '56px auto 113px auto',
  },
  [theme.breakpoints.down('tablet')]: {
    width: '100%',
    gap: 0,
    margin: '0 auto 55px auto',
  },
}));

const StyledSidebar = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  padding: 0,
  [theme.breakpoints.down('desktop')]: {
    flexDirection: 'row',
    gap: '10px',
  },
  [theme.breakpoints.down('tablet')]: {
    display: 'none',
  },
}));

const StyledMain = styled(Container)(({ theme }) => ({
  padding: 0,
  [theme.breakpoints.down('desktop')]: {
    gridColumn: '1/3',
  },
}));

const SuggestionsPage = () => {
  const sidebarState = useSelector(({ toggle }) => toggle.value);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('desktop'));
  return matches ? (
    <StyledSugestionsPage>
      <Header />
      <StyledSidebar>
        <CategoriesFilter />
        <RoadmapBoard />
      </StyledSidebar>
      <StyledMain>
        <SuggestionsHeader />
      </StyledMain>
      {sidebarState && <Transparent />}
      {sidebarState && <DrawerBox />}
    </StyledSugestionsPage>
  ) : (
    <StyledSugestionsPage>
      <Header />
      <StyledMain>
        <SuggestionsHeader />
      </StyledMain>
      <StyledSidebar>
        <CategoriesFilter />
        <RoadmapBoard />
      </StyledSidebar>
    </StyledSugestionsPage>
  );
};

export default SuggestionsPage;
