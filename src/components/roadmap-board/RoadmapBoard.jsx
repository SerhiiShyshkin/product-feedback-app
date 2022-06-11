import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/system';
import { Container } from '@mui/material';

const RoadmapBorderContainer = styled(Container)(({ theme }) => ({
    width: '255px',
    height: '166px',
    background: theme.palette.common.white,
    margin: 0,
    [theme.breakpoints.down('desktop')]: {
      width: '223px',
    height: '178px',
    },
  }));

const RoadmapBoard = props => {
  return (
    <RoadmapBorderContainer>RoadmapBoard</RoadmapBorderContainer>
  )
}

RoadmapBoard.propTypes = {}

export default RoadmapBoard