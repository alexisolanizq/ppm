import { createSlice } from "@reduxjs/toolkit";
import { updateRow } from "@Utils/map";

const initialState = {
  instructions: [],
};

export const countrySliceClon = createSlice({
  name: 'instructionsClon',
  initialState,
  reducers: {
    setInstructions: (state, action) => {
      state.instructions = action.payload;
    },
    setInstruction: (state, action) => {
      state.instructions = [...state.instructions, action.payload]
    },
    updateInstruction: (state, action) => {
      const row = action.payload
      state.instructions = updateRow(state.instructions, row, 'joaId')
    }
  }
});

export const { setInstructions, setInstruction, updateInstruction } =
countrySliceClon.actions;

export default countrySliceClon.reducer;