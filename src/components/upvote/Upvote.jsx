import { Container, styled, Typography } from '@mui/material';
import React from 'react';
import { ReactComponent as ArrowIcon } from '../../assets/shared/icon-arrow-up.svg';

const StyledUpvote = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '8px',
  gridRow: '1/3',


  width: '40px',
  height: '53px',
  background: theme.palette.interactive.main,
  color: theme.palette.primary.headline,
}));

export const Upvote = ({count}) => {
  return (
    <StyledUpvote>
      <ArrowIcon />
      <Typography variant='h5'>{count}</Typography>
    </StyledUpvote>
  );
};
