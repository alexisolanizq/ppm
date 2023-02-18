import { createSlice } from '@reduxjs/toolkit';
import VacationsAbsences from '@Services/vacationsAbsences/vacationsAbsencesService';

const initialState = {
  vacationsAbsences: [],
  loading: false,
  error: null
};

export const service = VacationsAbsences.getInstance();

export const vacationsAbsencesSlice = createSlice({
  name: 'vacationsAbsences',
  initialState,
  reducers: {
    setVacationsAbsences: (state, action) => {
      state.vacationsAbsences = action.payload;
    }
  }
});

export const { setVacationsAbsences } = vacationsAbsencesSlice.actions;

export const fetchVacationsAbsences = () => async (dispatch) => {
  try {
    const response = await service.listVacationsAbsences();
    dispatch(setVacationsAbsences(response));
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export const addVacationsAbsences = (data) => async (dispatch) => {
  try {
    const response = await service.createVacationAbsence(data);
    dispatch(setVacationsAbsences(response));
    return response;
  } catch (error) {
    return error;
  }
};

export const editVacationsAbsences = (id, data) => async (dispatch) => {
  try {
    const response = await service.updateVacationAbsence(id, data);
    dispatch(setVacationsAbsences(response));
    return response;
  } catch (error) {
    return error;
  }
};

export default vacationsAbsencesSlice.reducer;
