import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    order: 'asc',
    sortBy: 'name',
  },
  reducers: {
    sortAsc: (state) => {
      state.order = 'asc';
    },
    sortDesc: (state) => {
      state.order = 'desc';
    },
    sortByType: (state, action) => {
      state.sortBy = action.payload;
    },
  },
});

export const { sortAsc, sortDesc, sortByType } = filterSlice.actions;
export default filterSlice.reducer;
