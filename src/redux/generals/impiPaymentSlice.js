import { createSlice } from "@reduxjs/toolkit";
import { removeRow, updateRow } from "@Utils/map";

const initialState = {
  list: [],
};

export const impiPaymentSlice = createSlice({
  name: 'impiPayment',
  initialState,
  reducers: {
    setImpiPayments: (state, { payload }) => {
      state.list = payload;
    },
    addImpiPayment: (state, { payload }) => {
      state.list = [...state.list, payload]
    },
    updateImpiPayment: (state, { payload }) => {
      state.list = updateRow(state.list, payload, 'impaIdDto')
    },
    removeImpiPayment: (state, { payload }) => {
      state.list = removeRow(state.list, payload, 'impaIdDto')
    }
  }
});

export const { setImpiPayments, addImpiPayment, updateImpiPayment, removeImpiPayment } =
impiPaymentSlice.actions;

export default impiPaymentSlice.reducer;