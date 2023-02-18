import { createSlice } from '@reduxjs/toolkit';

import { updateRow } from '@Utils/map';

const initialState = {
  tempRepositoryFolders: []
};

const tempRepositoryFoldersSlice = createSlice({
  name: 'tempRepositoryFolders',
  initialState,
  reducers: {
    setTempRepositoryFolders: (state, { payload }) => {
      state.tempRepositoryFolders = payload;
    },
    addTempRepositoryFolder: (state, { payload }) => {
      state.tempRepositoryFolders = [payload, ...state.tempRepositoryFolders];
    },
    updateTempRepositoryFolder: (state, { payload }) => {
      state.tempRepositoryFolders = updateRow(
        state.tempRepositoryFolders,
        payload,
        'tmrfId'
      );
    }
  }
});

export const {
  setTempRepositoryFolders,
  addTempRepositoryFolder,
  updateTempRepositoryFolder
} = tempRepositoryFoldersSlice.actions;

export default tempRepositoryFoldersSlice.reducer;
