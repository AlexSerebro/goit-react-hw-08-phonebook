import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { setFilterValue, addContact, delContact, updContacts } from './actions';

const phonebookReducer = createReducer([], {
  [addContact]: (state, { payload }) => [...state, payload],
  [delContact]: (state, { payload }) => [
    ...state.filter(contact => contact.id !== payload),
  ],
  [updContacts]: (_, { payload }) => payload,
});

const filterReducer = createReducer('', {
  [setFilterValue]: (_, { payload }) => payload,
});

const rootReducer = combineReducers({
  contacts: phonebookReducer,
  filter: filterReducer,
});

export default rootReducer;
