import { configureStore } from '@reduxjs/toolkit';
import toggleSidebarReducer from './toggleSidebarSlice';

export default configureStore({
  reducer: { toggle: toggleSidebarReducer },
});
