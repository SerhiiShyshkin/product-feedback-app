import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getCategories = createAsyncThunk(
  'categories/getCategories',
  async () => {
    const response = await fetch('http://localhost:3002/categories');
    const data = await response.json();
    return data;
  }
);

const initialState = {
  categories: [],
  activeCategory: 'all',
  status: null,
  error: null,
};

const categoriesFilterSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    toggleCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
  },
  extraReducers: {
    [getCategories.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [getCategories.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.categories = action.payload;
    },
    [getCategories.rejected]: (state, action) => {},
  },
});

export const { toggleCategory } = categoriesFilterSlice.actions;
export default categoriesFilterSlice.reducer;
