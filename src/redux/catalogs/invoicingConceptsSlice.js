import { createSlice } from '@reduxjs/toolkit';

import { updateRow } from '@Utils/map';

const initialState = {
  invoicingConcepts: []
};

const invoicingConceptsSlice = createSlice({
  name: 'invoicingConcepts',
  initialState,
  reducers: {
    setInvoicingConcepts: (state, { payload }) => {
      state.invoicingConcepts = payload;
    },
    addInvoicingConcept: (state, { payload }) => {
      state.invoicingConcepts = [...state.invoicingConcepts, payload];
    },
    updateInvoicingConcept: (state, { payload }) => {
      state.invoicingConcepts = updateRow(
        state.invoicingConcepts,
        payload,
        'incoId'
      );
    }
  }
});

export const {
  setInvoicingConcepts,
  addInvoicingConcept,
  updateInvoicingConcept
} = invoicingConceptsSlice.actions;

export default invoicingConceptsSlice.reducer;
