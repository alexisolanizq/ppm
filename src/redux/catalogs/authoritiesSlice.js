import { createSlice } from '@reduxjs/toolkit';

import { updateRow } from '@Utils/map';

const initialState = {
  authorities: []
};

const authoritiesSlice = createSlice({
  name: 'authorities',
  initialState,
  reducers: {
    setAuthorities: (state, { payload }) => {
      state.authorities = payload;
    },
    addAuthority: (state, { payload }) => {
      state.authorities = [...state.authorities, payload];
    },
    updateAuthority: (state, { payload }) => {
      state.authorities = updateRow(state.authorities, payload, 'autId');
    }
  }
});

export const { setAuthorities, addAuthority, updateAuthority } =
  authoritiesSlice.actions;

export default authoritiesSlice.reducer;
