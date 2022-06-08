import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@mui/material';
import { styled } from '@mui/system';

const CategoriesFilterContainer = styled(Container)(({ theme }) => ({
  width: '255px',
  height: '166px',
  background: theme.palette.common.white,
  [theme.breakpoints.down('desktop')]: {},
}));

const CategoriesFilter = (props) => {
  return <CategoriesFilterContainer>CategoryFilter</CategoriesFilterContainer>;
};

CategoriesFilter.propTypes = {};

export default CategoriesFilter;
