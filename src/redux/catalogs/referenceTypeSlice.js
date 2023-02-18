import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  referenceTypes: [],
};

export const referenceTypesSlice = createSlice({
  name: 'referenceType',
  initialState,
  reducers: {
    setReferenceTypes: (state, action) => {
      state.referenceTypes = action.payload;
    },
  }
});

export const { setReferenceTypes } =
referenceTypesSlice.actions;

export default referenceTypesSlice.reducer;