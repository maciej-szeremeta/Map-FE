/* eslint-disable no-param-reassign */
import { createSlice, } from '@reduxjs/toolkit';

export interface searchState {
  search: string
}

const initialState: searchState = {
  search: '',
};

interface SetSearch{
  payload: string
}

export const searchSlice = createSlice({
  name    : 'search',
  initialState,
  reducers: {
    setSearch: (
      state,
      action:SetSearch
    ) => {
      state.search = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSearch, } = searchSlice.actions;

export default searchSlice.reducer;