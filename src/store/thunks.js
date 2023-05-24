import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getContacts,
  createContact,
  deleteContact,
} from 'services/contactsAPI';

export const getContactThunk = createAsyncThunk('contacts/getContact', () => {
  return getContacts();
});

export const createContactThunk = createAsyncThunk(
  'contacts/createContact',
  data => {
    return createContact(data);
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  id => {
    return deleteContact(id);
  }
);
