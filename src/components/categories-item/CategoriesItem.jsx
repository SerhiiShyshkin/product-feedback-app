import { Chip, styled, Typography } from '@mui/material';

import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleCategory } from '../categories-filter/categoriesFilterSlice';


const StyledCategoriesItem = styled(Chip)(({ theme }) => ({
  padding: '3px 4px 4px 4px',
  background: theme.palette.interactive.main,
  color: theme.palette.interactive.active,
  borderRadius: '10px',
  '&:hover': {
    background: theme.palette.interactive.hover,
  },
}));

const StyledCategoriesItemActive = styled(Chip)(({ theme }) => ({
  padding: '3px 4px 4px 4px',
  background: theme.palette.interactive.active,
  color: theme.palette.common.white,
  borderRadius: '10px',
  '&:hover': {
    background: theme.palette.interactive.hoverActive,
  },
}));

export const CategoriesItem = ({ id, name, label }) => {
  const dispatch = useDispatch();

  return (
    <StyledCategoriesItem
      label={<Typography variant='body4'>{label}</Typography>}
      onClick={() => dispatch(toggleCategory(name))}
    />
  );
};

export const CategoriesItemActive = ({ id, name, label }) => {
  const dispatch = useDispatch();
  return (
    <StyledCategoriesItemActive
      label={<Typography variant='body4'>{label}</Typography>}
      onClick={() => dispatch(toggleCategory(name))}
    />
  );
};
