import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: []
};

export const paymentTypeSlice = createSlice({
  name: 'paymentType',
  initialState,
  reducers: {
    setPaymentType: (state, action) => {
      state.list = action.payload
    }
  }
});

export const { setPaymentType } =
paymentTypeSlice.actions;

export default paymentTypeSlice.reducer;