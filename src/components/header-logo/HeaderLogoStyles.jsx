import { Box, styled, Typography } from '@mui/material';

export const HeaderTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
}));

export const HeaderSubtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  opacity: '0.75'
}));

export const HeaderLogoContainer = styled(Box)(({theme}) => ({
  display: 'grid',
}))
