import { createSlice } from '@reduxjs/toolkit';
import { updateRow } from '@Utils/map';

const initialState = {
  countriesLanguages: [],
};

const countryLanguageSlice = createSlice({
  name: 'App/countryLanguage',
  initialState,
  reducers: {
    setCountriesLanguages:(state, action) => {
      state.countriesLanguages = action.payload;
    },
    addCountriesLanguages: (state, action) => {
      state.countriesLanguages = [...action.payload, ...state.countriesLanguages]
    },
    updateCountryLanguage: (state, { payload }) => {
      state.countriesLanguages = updateRow(state.countriesLanguages, payload, 'clanId');
    },
  },
});

export const {
  setCountriesLanguages,
  addCountriesLanguages,
  updateCountryLanguage
} = countryLanguageSlice.actions;


export default countryLanguageSlice.reducer;
