import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,

  reducers: {
    deleteContact(state, action) {
      console.log(action);
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
  extraReducers: {},
});

export const { deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
