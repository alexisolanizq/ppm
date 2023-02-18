import { createSlice } from '@reduxjs/toolkit';

import { updateRow } from '@Utils/map';

const initialState = {
  banksList: []
};

export const bankSlice = createSlice({
  name: 'banks',
  initialState,
  reducers: {
    setBanks: (state, action) => {
      state.banksList = action.payload;
    },
    addBank: (state, action) => {
      state.banksList = [...state.banksList, action.payload];
    },
    updateBank: (state, { payload }) => {
      state.banksList = updateRow(state.banksList, payload, 'ppbaId');
    }
  }
});

export const { setBanks, addBank, updateBank } = bankSlice.actions;

export default bankSlice.reducer;
