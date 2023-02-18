import { createSlice } from '@reduxjs/toolkit';
import { updateRow } from '@Utils/map';

const initialState = {
  areaManagementSubManagements: [],
  isLoading: false
};

export const areaManagementSubManagementSlice = createSlice({
  name: 'areaManagementSubmanagements',
  initialState,
  reducers: {
    setAreaManagementSubManagements: (state, { payload }) => {
      state.areaManagementSubManagements = payload;
    },
    addareaManagementSubManagement: (state, { payload }) => {
      state.areaManagementSubManagements = [
        payload,
        ...state.areaManagementSubManagements
      ];
    },
    updateareaManagementSubManagement: (state, { payload }) => {
      state.areaManagementSubManagements = updateRow(
        state.areaManagementSubManagements,
        payload,
        'imsuId'
      );
    },
    setLoading: (state, { payload }) => {
      state.isLoading = payload;
    }
  }
});

export const {
  setAreaManagementSubManagements,
  addareaManagementSubManagement,
  updateareaManagementSubManagement,
  setLoading
} = areaManagementSubManagementSlice.actions;

export default areaManagementSubManagementSlice.reducer;
