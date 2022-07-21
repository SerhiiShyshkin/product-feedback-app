import { Container, styled } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Suggestion } from '../suggestion/Suggestion';
import { getFeedbacks } from './SuggestionsListSlice';

const StyledSuggestionsList = styled(Container)(({ theme }) => ({
  display: 'grid',
  gap: '20px',
  padding: 0,
}));

export const SuggestionsList = () => {
  const { feedbacks } = useSelector(({ suggestions }) => suggestions);
  const { activeCategory } = useSelector(({ categories }) => categories);

  return (
    <StyledSuggestionsList>
      {feedbacks
        .filter(({ category }) =>
          activeCategory === 'all' ? true : category === activeCategory
        )
        .map(({ id, upvotes, title, description, category, comments }) => (
          <Suggestion
            key={id}
            upvotes={upvotes}
            title={title}
            description={description}
            category={category}
            comments={comments}
          />
        ))}
    </StyledSuggestionsList>
  );
};
