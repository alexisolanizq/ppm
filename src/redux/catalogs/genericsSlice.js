import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  nationalities: [],
  expirationUnits: [],
  personTypes: [],
  paymentMethods: [],
  regimes: [],
  cfdi: [],
  wayPays: [],
  countryAbbreviations: [],
  typesInvoicingConcepts: [],
  typesInvoicingConceptsEnglish: [],
  conceptTypes: []
};

export const genericsSlice = createSlice({
  name: 'genericsSlice',
  initialState,
  reducers: {
    setNationalities: (state, action) => {
      state.nationalities = action.payload;
    },
    setExpirationUnits: (state, action) => {
      state.expirationUnits = action.payload;
    },
    setPersonTypes: (state, action) => {
      state.personTypes = action.payload;
    },
    setPaymentMethods: (state, action) => {
      state.paymentMethods = action.payload;
    },
    setRegimes: (state, action) => {
      state.regimes = action.payload;
    },
    setCfdi: (state, action) => {
      state.cfdi = action.payload;
    },
    setWayPays: (state, action) => {
      state.wayPays = action.payload;
    },
    setCountryAbbreviations: (state, action) => {
      state.countryAbbreviations = action.payload;
    },
    setTypesInvoicingConcepts: (state, action) => {
      state.typesInvoicingConcepts = action.payload;
    },
    setTypesInvoicingConceptsEnglish: (state, action) => {
      state.typesInvoicingConceptsEnglish = action.payload;
    },
    setConceptTypes: (state, action) => {
      state.conceptTypes = action.payload;
    }
  }
});

export const {
  setNationalities,
  setExpirationUnits,
  setPersonTypes,
  setPaymentMethods,
  setRegimes,
  setCfdi,
  setWayPays,
  setCountryAbbreviations,
  setTypesInvoicingConcepts,
  setTypesInvoicingConceptsEnglish,
  setConceptTypes
} = genericsSlice.actions;

export default genericsSlice.reducer;
