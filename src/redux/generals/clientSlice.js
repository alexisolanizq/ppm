import { createSlice } from '@reduxjs/toolkit';
import { updateRow } from '@Utils/map';

const initialState = {
  client: null,
  id: null,
  clients: [],
};

const clientSlice = createSlice({
  name: 'clients',
  initialState,
  reducers: {
    setClient: (state, action) => {
      state.client = action.payload;
    },
    setIdClient: (state, action) => {
      state.id = action.payload;
    },
    addClient: (state, action) => {
      state.clients = [...state.clients, action.payload]
    },
    setClients: (state, action) => {
      state.clients = action.payload;
    },
    updateClient: (state, action) => {
      state.clients = updateRow(state.clients, action.payload, 'ageId')
    },
    updateRowClient: (state, action) => {
      state.client = action.payload
    }
  },
  extraReducers: {}
});

export const {
  setIdClient,
  setClient,
  setClients,
  addClient,
  updateClient,
  updateRowClient
} = clientSlice.actions;

export default clientSlice.reducer;
