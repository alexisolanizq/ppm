import { createSlice } from "@reduxjs/toolkit";
import { updateRow } from "@Utils/map";

const initialState = {
  countries: [],
};

export const countrySliceClon = createSlice({
  name: 'countriesClon',
  initialState,
  reducers: {
    setCountries: (state, action) => {
      state.countries = action.payload;
    },
    setCountry: (state, action) => {
      state.countries = [...state.countries, action.payload]
    },
    updateCountry: (state, action) => {
      const row = action.payload
      state.countries = updateRow(state.countries, row, 'joaId')
    }
  }
});

export const { setCountries, setCountry, updateCountry } =
countrySliceClon.actions;

export default countrySliceClon.reducer;