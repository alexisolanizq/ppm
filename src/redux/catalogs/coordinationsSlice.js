import { createSlice } from '@reduxjs/toolkit';
import coordinationsService from '@Services/coordinations/coordinationsService';

const initialState = {
  coordinations: []
};

const service = coordinationsService.getInstance();

const coordinationsSlice = createSlice({
  name: 'App/coordinations',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setCoordinations: (state, action) => {
      state.coordinations = action.payload;
    },
    setManamentList: (state, action) => {
      state.managmentList = action.payload;
    }
  },
  extraReducers: {}
});

export const { setLoading, setCoordinations, setUpdateCoordinationEdit } =
  coordinationsSlice.actions;

export const updateCoordinationEdit = (params) => (dispatch) => {
  dispatch(setUpdateCoordinationEdit(params));
};
export const fetchCoordinationsData = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.getCoordinations();
    dispatch(setCoordinations(response));
    dispatch(setLoading(false));
    return response;
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};

export const addCoordinationsData = (data) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.createCoordinations(data);
    dispatch(setLoading(false));
    return response;
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};

export const updateCoordinationsData =
  (coordinationId, data) => async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await service.updateCoordinations(coordinationId, data);
      dispatch(setLoading(false));
      return response;
    } catch (error) {
      dispatch(setLoading(false));
      return error;
    }
  };

export default coordinationsSlice.reducer;
