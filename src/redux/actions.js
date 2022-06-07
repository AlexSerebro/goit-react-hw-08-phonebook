import { createAction } from '@reduxjs/toolkit';

export const setFilterValue = createAction('SET_FILTER');

export const addContact = createAction('ADD_CONTACT');

export const delContact = createAction('DEL_CONTACT');

export const updContacts = createAction('UPD_CONTACTS');
