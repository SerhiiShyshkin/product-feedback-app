import React from 'react';
import { Container, styled } from '@mui/material';
import {
  CategoriesItem,
  CategoriesItemActive,
} from '../categories-item/CategoriesItem';

import { useDispatch, useSelector } from 'react-redux';
import { toggleCategory } from './categoriesFilterSlice';

import { useGetCategoriesQuery } from '../../api/settingsApi';

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

export const CategoriesFilter = () => {
  const { data = [], isLoading } = useGetCategoriesQuery();

  

  if (isLoading) return <h3>Loading ...</h3>;
  const res = data.find(({id}) => id === 3)
  

  const all = { id: 1, name: 'all', value: 'All' };

  return (
    <StyledCategoriesFilter>
      {[all, ...data].map(({ id, name, value }) =>
        false ? (
          <CategoriesItemActive key={id} id={id} name={name} label={value} />
        ) : (
          <CategoriesItem key={id} id={id} name={name} label={value} />
        )
      )}
    </StyledCategoriesFilter>
  );
};


