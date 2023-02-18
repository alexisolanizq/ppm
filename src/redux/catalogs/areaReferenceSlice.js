import { createSlice } from "@reduxjs/toolkit";
import { updateRow } from "@Utils/map";

const initialState = {
  areasReference: []
};

export const areaReferenceSlice = createSlice({
  name: 'areasReference',
  initialState,
  reducers: {
    setAreasReferences: (state, action) => {
      state.areasReference = action.payload;
    },
    addAreaReference: (state, action) => {
      state.areasReference = [action.payload, ...state.areasReference];
    },
    updateAreaReference: (state, { payload }) => {
      state.areasReference = updateRow(state.areasReference, payload, 'jartId');
    },
  }
});

export const {
  setAreasReferences,
  addAreaReference,
  updateAreaReference
} = areaReferenceSlice.actions;

export default areaReferenceSlice.reducer;
