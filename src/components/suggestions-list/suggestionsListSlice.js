import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchSuggestions = createAsyncThunk(
  'suggestions/fetchSuggestions',
  async function () {
    const response = await fetch('http://localhost:3001/productRequests');
    const data = await response.json();
    
    return data;
  }
);

const initialState = {
  suggestions: [],
  status: null,
  error: null,
};

const suggestionsListSlice = createSlice({
  name: 'suggestions',
  initialState,
  reducers: {
    addSuggestion: (state, action) => {},
  },
  extraReducers: {
    [fetchSuggestions.pending]: (state, action) => {
      state.status = 'loading';
      state.error = null;
      
    },
    [fetchSuggestions.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.suggestions = action.payload;
    },
    [fetchSuggestions.rejected]: (state, action) => {},
  },
});

export const { addSuggestion } = suggestionsListSlice.actions;
export default suggestionsListSlice.reducer;
