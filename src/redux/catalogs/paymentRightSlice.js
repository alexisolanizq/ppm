import { createSlice } from '@reduxjs/toolkit';
import { updateRow } from '@Utils/map';

const initialState = {
  list: [],
};

export const paymentRightSlice = createSlice({
  name: 'paymentRights',
  initialState,
  reducers: {
    setPaymentRights: (state, action) => {
      state.list = action.payload;
    },
    addPaymentRight: (state, action) => {
      state.list = [action.payload, ...state.list];
    },
    updatePaymentRight: (state, { payload }) => {
      state.list = updateRow(state.list, payload, 'pariId');
    }
  }
});

export const { setPaymentRights, addPaymentRight, updatePaymentRight } = paymentRightSlice.actions;

export default paymentRightSlice.reducer;
