import { createSlice } from '@reduxjs/toolkit';
import { updateRow } from '@Utils/map';

const initialState = {
  subManagements: [],
  isLoading: false
};

export const subManagementSlice = createSlice({
  name: 'submanagements',
  initialState,
  reducers: {
    setSubManagements: (state, { payload }) => {
      state.subManagements = payload;
    },
    addSubManagement: (state, { payload }) => {
      state.subManagements = [payload, ...state.subManagements];
    },
    updateSubManagement: (state, { payload }) => {
      state.subManagements = updateRow(state.subManagements, payload, 'imsuId');
    },
    setLoading: (state, { payload }) => {
      state.isLoading = payload;
    }
  }
});

export const {
  setSubManagements,
  addSubManagement,
  updateSubManagement,
  setLoading
} = subManagementSlice.actions;

export default subManagementSlice.reducer;
