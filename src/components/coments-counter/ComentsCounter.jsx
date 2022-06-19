import { Box, styled, Typography } from '@mui/material';
import React from 'react';
import { ReactComponent as CommentsIcon } from '../../assets/shared/icon-comments.svg';

const StyledComentsCounter = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  gridColumn: '3/4',
  gridRow: '1/2',
}));

const StyledCounter = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '16px',
  lineHeight: '23px',
  letterSpacing: '-0.22px',
}));

export const CommentsCounter = ({count}) => {
  return (
    <StyledComentsCounter>
      <CommentsIcon />
      <StyledCounter>{count}</StyledCounter>
    </StyledComentsCounter>
  );
};
