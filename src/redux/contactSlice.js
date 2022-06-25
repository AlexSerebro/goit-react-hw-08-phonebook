import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, delContact, addContact } from './operations';

const contactsSlice = createSlice({
  name: 'contacts',

  initialState: [],

  extraReducers: {
    [fetchContacts.fulfilled]: (_, { payload }) => payload,
    [addContact.fulfilled]: (state, { payload }) => [...state, payload],
    [delContact.fulfilled]: (state, { meta }) => [
      ...state.filter(contact => contact.id !== meta.arg),
    ],
  },
});

export default contactsSlice.reducer;
