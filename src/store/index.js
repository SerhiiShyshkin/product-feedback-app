import { configureStore } from '@reduxjs/toolkit';
import toggleSidebarReducer from './toggleSidebarSlice';
import toggleCategory from '../components/categories-filter/categoriesFilterSlice';


export default configureStore({
  reducer: { toggle: toggleSidebarReducer, categories: toggleCategory },
});
