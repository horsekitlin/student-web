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
    // 自定義 Redux DevTools 配置
    name: 'Class Student App', // DevTools 中顯示的名稱
    trace: true, // 啟用 action 追蹤
    traceLimit: 25, // 限制追蹤的 action 數量
  },
});
