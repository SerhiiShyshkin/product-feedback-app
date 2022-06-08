import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/system';
import { Container } from '@mui/material';

const StyledSuggestionsHeader = styled(Container)(({ theme }) => ({
  width: '825px',
  height: '72px',
  background: theme.palette.primary.main,
  color: 'white',
  [theme.breakpoints.down('desktop')]: {
    width: 'inherit',
  },
  [theme.breakpoints.down('tablet')]: {
    width: 'inherit',
    borderRadius: 0,
  },
}));

const SuggestionsHeader = (props) => {
  return <StyledSuggestionsHeader>SuggestionsHeader</StyledSuggestionsHeader>;
};

SuggestionsHeader.propTypes = {};

export default SuggestionsHeader;
