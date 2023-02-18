import { createSlice } from '@reduxjs/toolkit';
import { updateRow } from '@Utils/map';

const initialState = {
  correspondences: [],
  setLoading: false
};

export const correspondenceSlice = createSlice({
  name: 'correspondences',
  initialState,
  reducers: {
    setCorrespondences: (state, { payload }) => {
      state.correspondences = payload;
    },
    addCorrespondence: (state, { payload }) => {
      state.correspondences = [payload, ...state.correspondences];
    },
    updateCorrespondence: (state, { payload }) => {
      state.correspondences = updateRow(state.correspondences, payload, 'cotiId');
    },
    setLoading: (state, { payload }) => {
      state.setLoading = payload;
    }
  }
});

export const {
  setCorrespondences,
  addCorrespondence,
  updateCorrespondence,
  setLoading
} = correspondenceSlice.actions;

export default correspondenceSlice.reducer;
