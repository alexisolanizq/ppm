import { createSlice } from '@reduxjs/toolkit';
import subLabelsService from '@Services/subLabelsService';

const initialState = {
  subLabels: [],
  subTagsTypes: []
};

const service = subLabelsService.getInstance();
const subLabelsSlice = createSlice({
  name: 'App/subLabels',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setSubLabels: (state, action) => {
      state.subLabels = action.payload;
    },
    setSubTagsTypes: (state, action) => {
      state.subTagsTypes = action.payload;
    },
    setCountriesList: (state, action) => {
      state.countriesList = action.payload;
    },
    setReferenceTypes: (state, action) => {
      state.referenceTypes = action.payload;
    }
  },
  extraReducers: {}
});

export const {
  setLoading,
  setSubLabels,
  setUpdateSubLabelEdit,
  setSubTagsTypes,
  setCountriesList,
  setReferenceTypes
} = subLabelsSlice.actions;

export const updateSubLabelEdit = (params) => (dispatch) => {
  dispatch(setUpdateSubLabelEdit(params));
};
export const getSubLabelsData = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.getSubLabels();
    dispatch(setSubLabels(response));
    dispatch(setLoading(false));
    return response;
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};

export const fetchCountriesList = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.countriesList();
    dispatch(setCountriesList(response));
    dispatch(setLoading(false));
    return response;
  } catch (error) {
    console.error(`No hay conexión con el endpoint.\n${error}`);
    return [];
  }
};

export const fetchSubtagTypes = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.getGrl();
    dispatch(setSubTagsTypes(response));
    dispatch(setLoading(false));
    return response;
  } catch (error) {
    console.error(`No hay conexión con el endpoint.\n${error}`);
    return [];
  }
};

export const fetchReferenceTypes = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.getJobAreasReferenceTypes();
    dispatch(setReferenceTypes(response));
    dispatch(setLoading(false));
    return response;
  } catch (error) {
    console.error(`No hay conexión con el endpoint.\n${error}`);
    return [];
  }
};

export const getSubTagsTypesData = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.getSubTagsTypes();
    dispatch(setSubTagsTypes(response));
    dispatch(setLoading(false));
    return response;
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};

export const addSubLabelsData = (data) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    return await service.createSubLabels(data);
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};

export const updateSubLabelsData = (subLabelId, data) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    return await service.updateSubLabels(subLabelId, data);
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};

export default subLabelsSlice.reducer;
