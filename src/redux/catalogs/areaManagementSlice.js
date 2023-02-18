import { createSlice } from '@reduxjs/toolkit';
import { updateRow } from '@Utils/map';

const initialState = {
  areaManagements: [],
  isLoading: false
};

export const areaManagementSlice = createSlice({
  name: 'areaManagements',
  initialState,
  reducers: {
    setAreaManagements: (state, { payload }) => {
      state.areaManagements = payload;
    },
    addAreaManagement: (state, { payload }) => {
      state.areaManagements = [payload, ...state.areaManagements];
    },
    updateAreaManagement: (state, { payload }) => {
      state.areaManagements = updateRow(state.areaManagements, payload, 'imadId');
    },
    setLoading: (state, { payload }) => {
      state.isLoading = payload;
    }
  }
});

export const { setAreaManagements, addAreaManagement, updateAreaManagement, setLoading } =
  areaManagementSlice.actions;

export default areaManagementSlice.reducer;
