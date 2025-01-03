import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'; 
import counterReducer from './counterSlice';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { loggerMiddleware } from '../middlewares/loggerMiddleware';
import { apiMiddleware } from '../middlewares/apiMiddleware';

const persistConfig = {
  key: '!QAZ@WSX#EDC',
  storage,
  whitelist: ['counter'],
  blacklist: [],
};

const rootReducer = combineReducers({
  counter: counterReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    const defaultMiddlewares = getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['persist/PERSIST'],
        // Ignore these field paths in all actions
        ignoredActionPaths: [],
        // Ignore these paths in the state
        ignoredPaths: [],
      },
    });
    return [...defaultMiddlewares, loggerMiddleware, apiMiddleware];
  },
  devTools: {
    name: 'Class Student App',
    trace: true,
    traceLimit: 25,
  },
});

const persistor = persistStore(store);

export default persistor;
