import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filesList: []
};

export const filesSlice = createSlice({
  name: 'files',
  initialState,
  reducers: {
    setFilesList: (state, { payload }) => {
      state.filesList = payload;
    },
    addFile: (state, { payload }) => {
      state.filesList = [...state.filesList, payload];
    }
  }
});

export const { setFilesList, addFile } = filesSlice.actions;

export default filesSlice.reducer;
