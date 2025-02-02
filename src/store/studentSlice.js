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
    isLoading: true,
  },
  reducers: {
    incrementItem: (state, action) => {
      const { index } = action.payload;
      if (index >= 0 && index < state.items.length) {
        state.items[index].amount = state.items[index].amount + 1;
      }
    },
    decrementItem: (state, action) => {
      const { index } = action.payload;
      if (index >= 0 && index < state.items.length) {
        state.items[index].amount = state.items[index].amount - 1;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getStudentResult.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getStudentResult.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(getStudentResult.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      });
  },
});

export const { incrementItem, decrementItem } = studentSlice.actions;
export default studentSlice.reducer;