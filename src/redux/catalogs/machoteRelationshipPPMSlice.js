import { createSlice } from '@reduxjs/toolkit';
import MachoteRelationshipService from '@Services/machoteRelationship/machoteRelationshipService';

const initialState = {
  list: [],
  isLoading: false
};

const service = MachoteRelationshipService.getInstance();

export const machoteRelationshipPPMSlice = createSlice({
  name: 'machoteRelationship',
  initialState,
  reducers: {
    setMachoteRelationship: (state, action) => {
      state.list = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    }
  }
});

export const { setMachoteRelationship, setLoading } =
  machoteRelationshipPPMSlice.actions;

export const fetchMachoteRelationship = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.listMachoteRelationship();
    dispatch(setMachoteRelationship(response));
    dispatch(setLoading(false));
    return response;
  } catch (error) {
    console.error(`No hay conexión con el endpoint.\n${error}`);
    return [];
  }
};

export const addMachoteRelationship = (data) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.createMachoteRelationship(data);
    dispatch(setLoading(false));
    return response;
  } catch (error) {
    dispatch(setLoading(false));
    console.error(`Ocurrió un error. \n${error}`);
    return {};
  }
};

export default machoteRelationshipPPMSlice.reducer;
