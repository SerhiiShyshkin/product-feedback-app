import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/system';
import { Container } from '@mui/material';

const RoadmapBorderContainer = styled(Container)(({ theme }) => ({
    width: '255px',
    height: '166px',
    background: theme.palette.common.white,
    [theme.breakpoints.down('desktop')]: {},
  }));

const RoadmapBoard = props => {
  return (
    <RoadmapBorderContainer>RoadmapBoard</RoadmapBorderContainer>
  )
}

RoadmapBoard.propTypes = {}

export default RoadmapBoard