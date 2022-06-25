import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { setFilterValue } from './actions';
import { fetchContacts, delContact, addContact } from './operations';

const phonebookReducer = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  [addContact.fulfilled]: (state, { payload }) => [...state, payload],
  [delContact.fulfilled]: (state, { payload }) => [
    ...state.filter(contact => contact.id !== payload),
  ],
});

const filterReducer = createReducer('', {
  [setFilterValue]: (_, { payload }) => payload,
});

const rootReducer = combineReducers({
  contacts: phonebookReducer,
  filter: filterReducer,
});

export default rootReducer;
