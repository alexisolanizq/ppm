import { createSlice } from "@reduxjs/toolkit";
import { updateRow } from "@Utils/map";

const initialState = {
  languages: []
};


const languageSlice = createSlice({
  name: 'App/language',
  initialState,
  reducers: {
    setLanguages:(state, action) => {
      state.languages = action.payload;
    },
    addLanguage: (state, action) => {
      state.languages = [action.payload, ...state.languages]
    },
    updateLanguage: (state, { payload }) => {
      state.languages = updateRow(state.languages, payload, 'lanId');
    },
  },
});

export const {
  setLanguages,
  addLanguage,
  updateLanguage
} = languageSlice.actions;


export default languageSlice.reducer;