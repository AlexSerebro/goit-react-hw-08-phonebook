import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactReducer from './contactSlice';
import filterReducer from './filterSlice';
import { authReducer } from './auth';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
    auth: persistReducer(authPersistConfig, authReducer),
  },
});

export default store;
