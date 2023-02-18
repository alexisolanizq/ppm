import { createSlice } from '@reduxjs/toolkit';
import { updateRow } from '@Utils/map';

const initialState = {
  users: [],
  user: null,
  id: null
};

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload
    },
    setUser: (state, action) => {
      state.user = action.payload
    },
    setIdUser: (state, action) => {
      state.id = action.payload
    },
    updateUser: (state, action) => {
      state.users = updateRow(state.users, action.payload, 'usrId')
    }
  }
});

export const {
  setUsers,
  setIdUser,
  setUser,
  updateUser,
} = userSlice.actions;


export default userSlice.reducer;
