import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: false };

const showSidebarSlice = createSlice({
  name: 'showSidebar',
  initialState,
  reducers: {
    showSidebar(state) {
      state.value = !state.value;
    },
  },
});

export const { showSidebar } = showSidebarSlice.actions;

export default showSidebarSlice.reducer;