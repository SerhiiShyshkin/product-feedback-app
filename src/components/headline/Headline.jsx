import React from 'react';
import PropTypes from 'prop-types';
import { Container, Typography } from '@mui/material';
import { styled } from '@mui/system';

const HeadlineBox = styled(Container)(({ theme }) => ({
  padding: 0,
}));

const Title = styled(Typography)(({ theme }) => ({}));

const Subtitle = styled(Typography)(({ theme }) => ({
  opacity: '0.75',
}));

const Headline = () => {
  return (
    <HeadlineBox>
      <Title variant='h2'>Frontend Mentor</Title>
      <Subtitle variant='body3'>Feedback Board</Subtitle>
    </HeadlineBox>
  );
};

Headline.propTypes = {};

export default Headline;
