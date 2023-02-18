import { createSlice } from '@reduxjs/toolkit';
import { updateRow } from '@Utils/map';

const initialState = {
  currencyCountry: [],
  isLoading: false
};

export const currencyCountrySlice = createSlice({
  name: 'currencyCountry',
  initialState,
  reducers: {
    setCountryCurrencyList: (state, action) => {
      state.currencyCountry = action.payload;
    },
    addCountryCurrency: (state, action) => {
      state.currencyCountry = [action.payload, ...state.currencyCountry];
    },
    updateCountryCurrency: (state, { payload }) => {
      state.currencyCountry = updateRow(
        state.currencyCountry,
        payload,
        'cocuId'
      );
    },
    setLoading: (state, { payload }) => {
      state.isLoading = payload;
    }
  }
});

export const {
  setCountryCurrencyList,
  addCountryCurrency,
  updateCountryCurrency,
  setLoading
} = currencyCountrySlice.actions;

export default currencyCountrySlice.reducer;
