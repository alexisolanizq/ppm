import { createSlice } from '@reduxjs/toolkit';
import CountriesService from '@Services/countries/countriesService';

import { updateRow } from '@Utils/map';

const initialState = {
  countries: [],
  filter: '',
  error: '',
  isLoading: false
};
const service = CountriesService.getInstance();
const countriesSlice = createSlice({
  name: 'App/countries',
  initialState,
  reducers: {
    setCountries: (state, action) => {
      state.countries = action.payload;
    },
    addCountry: (state, { payload }) => {
      state.countries = [payload, ...state.countries];
    },
    updateCountry: (state, { payload }) => {
      state.countries = updateRow(state.countries, payload, 'counId');
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  },
  extraReducers: {}
});

export const {
  setCountries,
  addCountry,
  updateCountry,
  setLoading,
  setUpdateCountryEdit,
  setError
} = countriesSlice.actions;

export const fetchCountries = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.getCountries();
    dispatch(setCountries(response));
    dispatch(setLoading(false));
    return response;
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};

export const addCountriesData = (data) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.createCountries(data);
    dispatch(setLoading(false));
    return response;
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};

export const updateCountriesData = (countryId, data) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.updateCountries(countryId, data);
    dispatch(setLoading(false));
    return response;
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(setError(error));
    return false;
  }
};

export default countriesSlice.reducer;
