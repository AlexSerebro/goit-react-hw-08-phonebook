import { configureStore } from '@reduxjs/toolkit';
import phonebookReducer from './reducer';

const store = configureStore({
  reducer: phonebookReducer,
}
);


export default store;


