import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import { loggerMiddleware } from '../middlewares/loggerMiddleware';
import { apiMiddleware } from '../middlewares/apiMiddleware';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(loggerMiddleware)
      .concat(apiMiddleware),
  devTools: {
    name: 'Class Student App',
    trace: true,
    traceLimit: 25,
  },
});