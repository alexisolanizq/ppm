import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  holderInvoicingEntities: []
};

export const invoicingEntitiesSlice = createSlice({
  name: 'holderInvoicingEntities',
  initialState,
  reducers: {
    setHolderInvoicingEntities: (state, { payload }) => {
      state.holderInvoicingEntities = payload;
    },
    addHolderInvoicingEntity: (state, { payload }) => {
      state.holderInvoicingEntities = [
        ...state.holderInvoicingEntities,
        payload
      ];
    }
  }
});

export const { setHolderInvoicingEntities, addHolderInvoicingEntity } =
  invoicingEntitiesSlice.actions;

export default invoicingEntitiesSlice.reducer;
