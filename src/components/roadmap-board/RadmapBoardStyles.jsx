import { styled, Container } from '@mui/material';

export const RoadmapBoardContainer = styled(Container)(({ theme }) => ({
  width: '223px',
  height: '178px',
  backgroundColor: theme.palette.common.white,
  [theme.breakpoints.up('desktop')]: {
    width: '255px',
  },
}));
