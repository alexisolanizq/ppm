import { createSlice } from '@reduxjs/toolkit';

import { updateRow } from '@Utils/map';

const initialState = {
  signatories: []
};

const signatoriesSlice = createSlice({
  name: 'signatories',
  initialState,
  reducers: {
    setSignatories: (state, { payload }) => {
      state.signatories = payload;
    },
    addSignatory: (state, { payload }) => {
      state.signatories = [...state.signatories, ...payload];
    },
    updateSignatory: (state, { payload }) => {
      state.signatories = updateRow(state.signatories, payload, 'signId');
    }
  }
});

export const { setSignatories, addSignatory, updateSignatory } =
  signatoriesSlice.actions;

export default signatoriesSlice.reducer;
