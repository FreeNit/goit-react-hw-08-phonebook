import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getContactThunk,
  createContactThunk,
  deleteContactThunk,
} from './thunks';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  return {
    ...state,
    isLoading: true,
  };
};

const handleFulfilledGet = (state, action) => {
  return {
    ...state,
    isLoading: false,
    items: [...action.payload],
    error: null,
  };
};

const handleFulfilledCreate = (state, action) => {
  return {
    ...state,
    isLoading: false,
    items: [...action.payload],
    error: null,
  };
};

const handleFulfilledDelete = (state, action) => {
  return {
    ...state,
    isLoading: false,
    items: [...action.payload],
    error: null,
  };
};

const handleRejected = (state, action) => {
  return {
    ...state,
    isLoading: false,
    error: action.payload,
  };
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
  extraReducers: builder => {
    builder
      // .addCase(getContactThunk.pending, handlePending)
      .addCase(getContactThunk.fulfilled, handleFulfilledGet)
      // .addCase(getContactThunk.rejected, handleRejected)

      // .addCase(createContactThunk.pending, handlePending)
      .addCase(createContactThunk.fulfilled, handleFulfilledCreate)
      // .addCase(createContactThunk.rejected, handleRejected)

      // .addCase(deleteContactThunk.pending, handlePending)
      .addCase(deleteContactThunk.fulfilled, handleFulfilledDelete)
      // .addCase(deleteContactThunk.rejected, handleRejected)

      .addMatcher(
        isAnyOf(
          getContactThunk.pending,
          createContactThunk.pending,
          deleteContactThunk.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          getContactThunk.rejected,
          createContactThunk.rejected,
          deleteContactThunk.rejected
        ),
        handleRejected
      );
  },
});

export const { deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
