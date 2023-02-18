import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: []
};


export const levelSlice = createSlice({
  name: 'level',
  initialState,
  reducers: {
    setLevels: (state, action) => {
      state.list = action.payload
    }
  }
});

export const { setLevels } =
levelSlice.actions;

export default levelSlice.reducer;