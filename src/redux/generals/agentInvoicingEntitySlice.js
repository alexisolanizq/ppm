import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  agentInvoicingEntities: [],
  loadInvoicingEntities: false
};

const updateAgentEntityRow = (array, row) => {
  const newArray = [...array];
  return newArray.map((item) => {
    if (
      item.billingEntity.bienId === row.billingEntity.bienId &&
      item.ageId === row.ageId
    )
      return row;
    return {
      ...item
    };
  });
};

export const invoicingEntitiesSlice = createSlice({
  name: 'agentInvoicingEntities',
  initialState,
  reducers: {
    setAgentInvoicingEntities: (state, { payload }) => {
      state.agentInvoicingEntities = payload;
    },
    addAgentInvoicingEntity: (state, { payload }) => {
      state.agentInvoicingEntities = [...state.agentInvoicingEntities, payload];
    },
    updateAgentInvoicingEntity: (state, { payload }) => {
      state.agentInvoicingEntities = updateAgentEntityRow(
        state.agentInvoicingEntities,
        payload
      );
    },
    setLoadInvoicingEntities: (state, { payload }) => {
      state.loadInvoicingEntities = payload;
    }
  }
});

export const {
  setAgentInvoicingEntities,
  addAgentInvoicingEntity,
  updateAgentInvoicingEntity,
  setLoadInvoicingEntities
} = invoicingEntitiesSlice.actions;

export default invoicingEntitiesSlice.reducer;
