import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async function () {
    const response = await fetch('http://localhost:3002/categoriesFilter');
    const data = await response.json();
    return data;
  }
);

const initialState = {
  categories: [],
  status: null,
  error: null,
};

const categoriesFilterSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    toggleCategory: (state, action) => {
      state.categories.map((category) => (category.active = false));
      const newCategory = state.categories.find(
        (category) => category.id === action.payload
      );
      newCategory.active = !newCategory.active;
    },
  },
  extraReducers: {
    [fetchCategories.pending]: (state, action) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchCategories.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.categories = action.payload;
    },
    [fetchCategories.rejected]: (state, action) => {},
  },
});

export const { toggleCategory } = categoriesFilterSlice.actions;
export default categoriesFilterSlice.reducer;
