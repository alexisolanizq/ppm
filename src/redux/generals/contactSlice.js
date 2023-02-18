import { STORE_CONTACTS } from '@Const/store';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  isLoading: false,
  filter: '',
  id: null
};

const contactSlice = createSlice({
  name: STORE_CONTACTS,
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setContacts: (state, action) => {
      state.contacts = action.payload;
    },
    addContact: (state, action) => {
      state.contacts = [...state.contacts, action.payload];
    },
    setIdContact: (state, action) => {
      state.id = action.payload
    }
  },
  extraReducers: {}
});

export const { setLoading, setContacts, addContact, setIdContact } = contactSlice.actions;

export default contactSlice.reducer;
