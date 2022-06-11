import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container, styled } from '@mui/material';
import {
  CategoriesItem,
  CategoriesItemActive,
} from '../categories-item/CategoriesItem';

import { fetchCategories } from './categoriesFilterSlice';

const StyledCategoriesFilter = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  columnGap: '8px',
  rowGap: '14px',
  padding: '24px',
  margin: 0,
  width: '255px',
  height: '166px',
  background: theme.palette.common.white,
  [theme.breakpoints.down('desktop')]: {
    width: '223px',
    height: '178px',
  },
}));

const CategoriesFilter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  const { categories } = useSelector((state) => state.categories);

  return (
    <StyledCategoriesFilter>
      {categories.map(({ id, name, active }) =>
        active ? (
          <CategoriesItemActive id={id} name={name} key={id} />
        ) : (
          <CategoriesItem id={id} name={name} key={id} />
        )
      )}
    </StyledCategoriesFilter>
  );
};

export default CategoriesFilter;
