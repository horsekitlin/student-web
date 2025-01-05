import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getStudentResult = createAsyncThunk(
  'student/getStudentAsync',
  async () => {
    const response = await fetch('https://5c2dd5d9b8051f0014cd47ed.mockapi.io/students');
    return response.json();
  },
);

const studentSlice = createSlice({
  name: 'student',
  initialState: {
    items: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getStudentResult.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(getStudentResult.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default studentSlice.reducer;