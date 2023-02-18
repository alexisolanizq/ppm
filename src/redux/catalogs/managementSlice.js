import { createSlice } from '@reduxjs/toolkit';
import { updateRow } from '@Utils/map';

const initialState = {
  managements: [],
  isLoading: false
};

export const managementSlice = createSlice({
  name: 'managements',
  initialState,
  reducers: {
    setManagements: (state, { payload }) => {
      state.managements = payload;
    },
    addManagement: (state, { payload }) => {
      state.managements = [payload, ...state.managements];
    },
    updateManagement: (state, { payload }) => {
      state.managements = updateRow(state.managements, payload, 'imadId');
    },
    setLoading: (state, { payload }) => {
      state.isLoading = payload;
    }
  }
});

export const { setManagements, addManagement, updateManagement, setLoading } =
  managementSlice.actions;

export default managementSlice.reducer;
