import { createSlice } from '@reduxjs/toolkit';
import { updateRow } from '@Utils/map';

const initialState = {
  jobAreaProcedurePhases: [],
  isLoading: false
};

export const jobAreaProcedurePhaseSlice = createSlice({
  name: 'jobAreaProcedurePhases',
  initialState,
  reducers: {
    setJobAreasProcedurePhases: (state, action) => {
      state.jobAreaProcedurePhases = action.payload;
    },
    addJobAreaProcedurePhase: (state, { payload }) => {
      state.jobAreaProcedurePhases = [payload, ...state.jobAreaProcedurePhases];
    },
    updateJobAreaProcedurePhase: (state, { payload }) => {
      state.jobAreaProcedurePhases = updateRow(
        state.jobAreaProcedurePhases,
        payload,
        'jappId'
      );
    },
    setLoading: (state, { payload }) => {
      state.isLoading = payload;
    }
  }
});

export const {
  setJobAreasProcedurePhases,
  addJobAreaProcedurePhase,
  updateJobAreaProcedurePhase
} = jobAreaProcedurePhaseSlice.actions;

export default jobAreaProcedurePhaseSlice.reducer;
