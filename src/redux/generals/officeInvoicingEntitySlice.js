import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  officeInvoicingEntities: []
};

export const invoicingEntitiesSlice = createSlice({
  name: 'officeInvoicingEntities',
  initialState,
  reducers: {
    setOfficeInvoicingEntities: (state, { payload }) => {
      state.officeInvoicingEntities = payload;
    },
    addOfficeInvoicingEntity: (state, { payload }) => {
      state.officeInvoicingEntities = [
        ...state.officeInvoicingEntities,
        payload
      ];
    }
  }
});

export const { setOfficeInvoicingEntities, addOfficeInvoicingEntity } =
  invoicingEntitiesSlice.actions;

export default invoicingEntitiesSlice.reducer;
