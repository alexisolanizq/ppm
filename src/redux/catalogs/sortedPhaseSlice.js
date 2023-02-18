import { createSlice } from '@reduxjs/toolkit';
import SortedPhaseService from '@Services/sortedPhases/sortedPhasesService';

const initialState = {
  list: [],
  areaSortedPhases: [],
  jobAreaProcedurePhases: [],
  isLoading: false
};

export const service = SortedPhaseService.getInstance();

export const sortedPhasesSlice = createSlice({
  name: 'sortedPhases',
  initialState,
  reducers: {
    setSortedPhases: (state, action) => {
      state.list = action.payload;
    },
    setAreaSortedPhases: (state, action) => {
      state.areaSortedPhases = action.payload;
    },
    setJobAreaProcedurePhases: (state, action) => {
      state.jobAreaProcedurePhases = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    }
  }
});

export const { setSortedPhases, setLoading, setAreaSortedPhases, setJobAreaProcedurePhases } = sortedPhasesSlice.actions;

export const fetchSortedPhases = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.getSortedPhases();
    dispatch(setSortedPhases(response));
    dispatch(setLoading(false));
    return response;
  } catch (error) {
    return [];
  }
};

export const fetchSortedPhasesById = (arspId) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.getSortedPhasesById(arspId);
    dispatch(setSortedPhases(response));
    dispatch(setLoading(false));
    return response;
  } catch (error) {
    return [];
  }
};

export const fetchAreaSortedPhases = (jobAreaId, countryId) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.getAreaSortedPhase(jobAreaId, countryId);
    dispatch(setSortedPhases(response));
    dispatch(setLoading(false));
    return response;
  } catch (error) {
    return [];
  }
};

export const fetchJobAreaProcedurePhases = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.getJobAreaProcedurePhases();
    dispatch(setJobAreaProcedurePhases(response));
    dispatch(setLoading(false));
    return response;
  } catch (error) {
    return [];
  }
};

export const addSortedPhases = (data) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.createSortedPhase(data);
    dispatch(setLoading(false));
    return response;
  } catch (error) {
    dispatch(setLoading(false));
    console.error(`Ocurrió un error. \n${error}`);
    return {};
  }
};
export const addAreaSortedPhase = (data) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.createAreaSortedPhase(data);
    dispatch(setLoading(false));
    return response;
  } catch (error) {
    dispatch(setLoading(false));
    console.error(`Ocurrió un error. \n${error}`);
    return {};
  }
};

export const editSortedPhases = (id, data) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.updateSortedPhase(id, data);
    dispatch(setLoading(false));
    return response;
  } catch (error) {
    dispatch(setLoading(false));
    console.error(`Ocurrió un error. \n${error}`);
    return error;
  }
};

export default sortedPhasesSlice.reducer;
