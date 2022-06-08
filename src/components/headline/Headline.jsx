import React from 'react';

import { Container, Typography, styled } from '@mui/material';

const StyledHeadline = styled(Container)(({ theme }) => ({
  padding: 0,
}));

const StyledSubtitle = styled(Typography)(({ theme }) => ({
  opacity: '0.75',
}));

const Headline = () => {
  return (
    <StyledHeadline>
      <Typography variant='h2'>Frontend Mentor</Typography>
      <StyledSubtitle variant='body3'>Feedback Board</StyledSubtitle>
    </StyledHeadline>
  );
};

export default Headline;
