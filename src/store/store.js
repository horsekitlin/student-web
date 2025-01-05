import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import studentReducer from './studentSlice';
import { loggerMiddleware } from '../middlewares/loggerMiddleware';
import { apiMiddleware } from '../middlewares/apiMiddleware';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    student: studentReducer,
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

export default store;