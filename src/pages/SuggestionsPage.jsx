import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/header/Header';
import { Container } from '@mui/material';
import { styled } from '@mui/system';

import Headline from '../components/headline/Headline';
import Hamburger from '../components/hamburger/Hamburger';
import AsideMobile from '../components/ui/aside-mobile/DrawerBox';
import Transparent from '../components/ui/transparent/TransparentBox';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '../store/toggleSidebarSlice';

const ContentBox = styled(Container)(({ theme }) => ({
  position: 'relative',
  display: 'grid',
  gridTemplateColumns: 'auto 1fr',
  gap: '30px',
  width: theme.breakpoints.values.desktop,
  height: '100%',
  margin: 'auto',
  [theme.breakpoints.down('desktop')]: {
    gridTemplateColumns: '1fr 1fr 1fr',
    width: theme.breakpoints.values.tablet,
  },
  [theme.breakpoints.down('tablet')]: {
    gridTemplateColumns: '1fr',
    width: '100%',
    margin: '0 auto',
    padding: 0,
  },
}));

const SuggestionsPage = () => {
  const sidebarState = useSelector(({ toggle }) => toggle.value);
  const dispatch = useDispatch();
  const toggle = () => dispatch(toggleSidebar());

  return (
    <>
      <ContentBox>
        <Header toggle={toggle}>
          <Headline />
          <Hamburger toggle={toggle} />
        </Header>
        <div
          style={{
            width: '30px',
            height: '20px',
            background: 'red',
          }}
        ></div>
        {sidebarState && <Transparent toggle={toggle} />}
        {sidebarState && <AsideMobile />}
      </ContentBox>
    </>
  );
};

SuggestionsPage.propTypes = {};

export default SuggestionsPage;
