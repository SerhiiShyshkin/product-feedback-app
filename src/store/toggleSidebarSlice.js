import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: false };

const toggleSidebarSlice = createSlice({
  name: 'toggleSidebar',
  initialState,
  reducers: {
    toggleSidebar(state) {
      state.value = !state.value;
    },
  },
});

export const { toggleSidebar } = toggleSidebarSlice.actions;

export default toggleSidebarSlice.reducer;
