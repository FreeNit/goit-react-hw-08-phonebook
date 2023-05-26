import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setNewFilterValue: {
      reducer(state, action) {
        return { ...state, filter: action.payload };
      },
      prepare(filterValue) {
        return {
          payload: filterValue,
        };
      },
    },
  },
});

export const { setNewFilterValue } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
