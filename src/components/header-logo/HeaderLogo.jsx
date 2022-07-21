import {
  HeaderLogoContainer,
  HeaderSubtitle,
  HeaderTitle,
} from './HeaderLogoStyles';
import { useGetLogoQuery } from '../../api/settingsApi';
import { Skeleton, useMediaQuery, useTheme } from '@mui/material';

export const HeaderLogo = () => {
  const { data = '', isLoading } = useGetLogoQuery();
  const { title, subtitle } = data;
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('tablet'));

  return (
    <HeaderLogoContainer>
      <HeaderTitle variant='h2'>
        {isLoading ? <Skeleton width={matches ? 154 : 115} /> : title}
      </HeaderTitle>
      <HeaderSubtitle variant='body3'>
        {isLoading ? <Skeleton width={matches ? 108 : 93} /> : subtitle}
      </HeaderSubtitle>
    </HeaderLogoContainer>
  );
};
