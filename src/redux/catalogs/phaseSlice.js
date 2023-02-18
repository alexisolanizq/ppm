/* eslint-disable no-console */
import { createSlice } from '@reduxjs/toolkit';
import { updateRow } from '@Utils/map';

const initialState = {
  procedurePhases: [],
  isLoading: false
};

export const phaseSlice = createSlice({
  name: 'phases',
  initialState,
  reducers: {
    setProcedurePhases: (state, action) => {
      state.procedurePhases = action.payload;
    },
    addProcedurePhases: (state, { payload }) => {
      state.procedurePhases = [payload, ...state.procedurePhases];
    },
    updateProcedurePhases: (state, { payload }) => {
      state.procedurePhases = updateRow(
        state.procedurePhases,
        payload,
        'prphId'
      );
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    }
  }
});

export const {
  setProcedurePhases,
  addProcedurePhases,
  updateProcedurePhases,
  setIsLoading
} = phaseSlice.actions;

export default phaseSlice.reducer;
