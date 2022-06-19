import { configureStore } from '@reduxjs/toolkit';
import toggleSidebarReducer from './toggleSidebarSlice';
import categoriesFilterReducer from '../components/categories-filter/categoriesFilterSlice';
import suggestionsListReducer from '../components/suggestions-list/suggestionsListSlice';

export default configureStore({
  reducer: {
    toggle: toggleSidebarReducer,
    categories: categoriesFilterReducer,
    suggestions: suggestionsListReducer,
  },
});
