import { Box, Container, styled, Typography } from '@mui/material';
import React from 'react';
import { CategoriesItem } from '../categories-item/CategoriesItem';
import { Upvote } from '../upvote/Upvote';
import { CommentsCounter } from '../coments-counter/ComentsCounter';

const StyledSuggestion = styled(Container)(({ theme }) => ({
  minWidth: '100%',
  maxHeight: '151px',
  padding: '28px 32px',
  background: theme.palette.common.white,
  color: theme.palette.primary.headline,
  display: 'grid',
  gridTemplateColumns: 'auto 1fr auto',
  gridTemplateRows: '1fr 1fr 1fr',
  gap: '40px',
}));

const StyledCategory = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '4px',
}));

const StyledTitle = styled(Typography)(({ theme }) => ({}));

const StyledDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.text,
  marginBottom: '8px',
}));

export const Suggestion = ({
  upvotes,
  title,
  description,
  category,
  comments,
}) => {
  const commentsCount = comments ? comments.length : 0;

  const { id, name } = category;
  return (
    <StyledSuggestion>
      <Upvote count={upvotes} />
      <StyledCategory>
        <StyledTitle variant='h3'>{title}</StyledTitle>
        <StyledDescription variant='body1'>{description}</StyledDescription>
        <CategoriesItem id={id} name={name} key={id}/>
      </StyledCategory>
      <CommentsCounter count={commentsCount} />
    </StyledSuggestion>
  );
};
