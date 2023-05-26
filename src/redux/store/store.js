import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from '../contacts/contactsSlice';
import { filterReducer } from '../filter/filterSlice';
import { authReducer } from 'redux/auth/sliceAuth';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    auth: authReducer,
  },
});
