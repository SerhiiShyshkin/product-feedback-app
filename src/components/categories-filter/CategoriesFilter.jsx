import React from 'react';
import { useSelector } from 'react-redux';

import { Container, styled } from '@mui/material';
import {
  CategoriesItem,
  CategoriesItemActive,
} from '../categories-item/CategoriesItem';



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
  
//const { categories } = useSelector(({ categories }) => categories);

  return (
    <StyledCategoriesFilter>
      {[].map(({ id, name, active }) =>
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
