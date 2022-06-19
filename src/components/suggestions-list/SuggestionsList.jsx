import { Container, styled } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSuggestions } from './suggestionsListSlice';

import { Suggestion } from '../suggestion/Suggestion';
import { fetchCategories } from '../categories-filter/categoriesFilterSlice';

const StyledSuggestionsList = styled(Container)(({ theme }) => ({
  display: 'grid',
  gap: '20px',
  padding: 0,
}));

export const SuggestionsList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchSuggestions());
  }, [dispatch]);

  const { suggestions } = useSelector(({ suggestions }) => suggestions);
  const { categories } = useSelector(({ categories }) => categories);

  return (
    <StyledSuggestionsList>
      {suggestions.map(
        ({ id, title, category, upvotes, status, comments, description }) => {
          const categoryData =
            category.charAt(0).toUpperCase() + category.slice(1);
          const currentCategory = categories.find((category) => {
            if (category.name === categoryData) return category;
          });

          return (
            <Suggestion
              key={id}
              upvotes={upvotes}
              title={title}
              description={description}
              category={currentCategory}
              comments={comments}
            />
          );
        }
      )}
    </StyledSuggestionsList>
  );
};
