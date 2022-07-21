import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getFeedbacks = createAsyncThunk(
  'feedbacks/getFeedbacks',
  async (status, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `http://localhost:3001/productRequests?status=${status}`
      );
      if (!response.ok) {
        throw new Error('Server Error!!!');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  feedbacks: [],
  status: null,
  error: null,
};

const suggestionsListSlice = createSlice({
  name: 'feedbacks',
  initialState,
  reducers: {},
  extraReducers: {
    [getFeedbacks.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [getFeedbacks.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.feedbacks = action.payload;
    },
    [getFeedbacks.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
  },
});

export const {} = suggestionsListSlice.actions;
export default suggestionsListSlice.reducer;
