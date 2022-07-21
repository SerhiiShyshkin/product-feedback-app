import { createSlice } from "@reduxjs/toolkit";




const initialState = {
  completed: false,
  status: null,
  error: null,
};

const upvotesSlice = createSlice({
  name: 'upvotes',
  initialState,
  extraReducers: {

  }
});
