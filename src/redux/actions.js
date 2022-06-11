import constants from './constacts';
import { createAction } from '@reduxjs/toolkit';

export const setFilterValue = createAction(constants.SET_FILTER);

export const addContact = createAction(constants.ADD_CONTACT);

export const delContact = createAction(constants.DEL_CONTACT);

export const updContacts = createAction(constants.UPD_CONTACTS);
