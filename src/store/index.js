import { configureStore } from '@reduxjs/toolkit';
import showSidebarReducer from '../components/hamburger-button/showSidebarSlice';
import categoryFilterReducer from '../components/categories-filter/categoriesFilterSlice';
import suggestionsListReducer from '../components/suggestions-list/SuggestionsListSlice';
import { settingsApi } from '../api/settingsApi';

export default configureStore({
  reducer: {
    show: showSidebarReducer,
    categories: categoryFilterReducer,
    suggestions: suggestionsListReducer,
    [settingsApi.reducerPath]: settingsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(settingsApi.middleware)
});
