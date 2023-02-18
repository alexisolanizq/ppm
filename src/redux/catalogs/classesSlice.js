import { createSlice } from '@reduxjs/toolkit';
import ClassesService from '@Services/classes/classesService';

const initialState = {
  referenceTypeClasses: [],
  typeClasses: [],
  PPMClasses: [],
  isLoading: false
};

const service = ClassesService.getInstance();

const classesSlice = createSlice({
  name: 'App/classes',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setReferenceTypeClasses: (state, action) => {
      state.referenceTypeClasses = action.payload;
    },
    setTypeClasses: (state, action) => {
      state.typeClasses = action.payload;
    },
    setPPMClasses: (state, action) => {
      state.PPMClasses = action.payload;
    }
  },
  extraReducers: {}
});

export const { setLoading, setReferenceTypeClasses, setPPMClasses, setTypeClasses } =
  classesSlice.actions;

export const fetchReferenceTypeClasses = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.getReferenceTypeClasses();
    dispatch(setReferenceTypeClasses(response));
    dispatch(setLoading(false));
    return response;
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};
export const fetchPPMClasses = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.getPPMClass();
    dispatch(setPPMClasses(response));
    dispatch(setLoading(false));
    return response;
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};

export const fetchTypeClass = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.getTypeClasse();
    dispatch(setTypeClasses(response));
    return response;
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};

export const addClassesData = (data) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    return await service.createClasses(data);
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};
export const addPPMClassData = (data) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.createPPMClass(data);
    return response.data;
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};

export const updateClassesData = (classeId, data) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    return await service.updateClasses(classeId, data);
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};
export const updatePPMClassesData = (ppmClasseId, data) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.updatePPMClasses(ppmClasseId, data);
    return response.data
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};

export default classesSlice.reducer;
