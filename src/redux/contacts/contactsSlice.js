import { createSlice } from '@reduxjs/toolkit';
import { addContact, fetchContacts } from './contactsOperations';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.items = [];
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,

  reducers: {
    deleteContact(state, action) {
      const filteredContacts = state.items.filter(
        item => item.id !== action.payload
      );
      return {
        ...state,
        items: filteredContacts,
      };
    },
  },

  // Додаємо обробку зовнішніх екшенів
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [addContact.pending]: handlePending,

    [addContact.rejected]: handleRejected,
    [fetchContacts.rejected]: handleRejected,

    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
  },
});

export const { deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
