import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { counterAPI } from '../services/api';

export const incrementAsync = createAsyncThunk(
  'counter/incrementAsync',
  async (amount = 1) => {
    const response = await counterAPI.recordIncrement(amount);
    return response.data.amount;
  }
);

export const decrementAsync = createAsyncThunk(
  'counter/decrementAsync',
  async (amount = 1) => {
    const response = await counterAPI.recordDecrement(amount);
    return response.data.amount;
  }
);

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    status: 'idle',
    error: null,
  },
  reducers: {
    increment: (state, action) => {
      state.value += action.payload || 1;
    },
    decrement: (state, action) => {
      state.value -= action.payload || 1;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      // Increment Async
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value += action.payload;
      })
      .addCase(incrementAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      // Decrement Async
      .addCase(decrementAsync.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(decrementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value -= action.payload;
      })
      .addCase(decrementAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;