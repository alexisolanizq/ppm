import { updateRow } from '@Utils/map';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  country: [],
  currency: [],
  isLoading: false
};

export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setCurrencyList: (state, { payload }) => {
      state.currency = payload;
    },
    addCurrency: (state, { payload }) => {
      state.currency = [payload, ...state.currency];
    },
    updateCurrency: (state, { payload }) => {
      state.currency = updateRow(state.currency, payload, 'currId');
    },
    //* Others
    setCountriesList: (state, action) => {
      state.country = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    }
  }
});

export const {
  setCurrencyList,
  addCurrency,
  updateCurrency,

  setCountriesList,
  setLoading
} = currencySlice.actions;

export default currencySlice.reducer;
