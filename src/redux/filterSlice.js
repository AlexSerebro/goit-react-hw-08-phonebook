import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: { setFilterValue: (_, { payload }) => payload },
});

export const filterActions = filterSlice.actions;

export default filterSlice.reducer;
