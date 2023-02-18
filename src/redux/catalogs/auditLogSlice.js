import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
  userId: null
};


export const auditLogSlice = createSlice({
  name: 'auditlog',
  initialState,
  reducers: {
    setAudits: (state, action) => {
      state.list = action.payload;
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
  }
});

export const {
  setAudits,
  setUserId
} = auditLogSlice.actions;

export default auditLogSlice.reducer;
