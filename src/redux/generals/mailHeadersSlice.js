import { createSlice } from '@reduxjs/toolkit';
import MailHeaderService from '@Services/mailHeader/mailHeaderService';
// funtion expample post request
const initialState = {
  officeEmailHeaders: [],
  clientEmailHeaders: [],
  holderEmailHeaders: [],
  isLoading: false
};

const service = MailHeaderService.getInstance();

const clientSlice = createSlice({
  name: 'App/languages',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setOfficeEmailHeaders: (state, action) => {
      state.officeEmailHeaders = action.payload;
    },
    setClientEmailHeaders: (state, action) => {
      state.clientEmailHeaders = action.payload;
    },
    setHolderEmailHeaders: (state, action) => {
      state.holderEmailHeaders = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  },
  extraReducers: {}
});

export const {
  setLoading,
  setOfficeEmailHeaders,
  setClientEmailHeaders,
  setHolderEmailHeaders
} = clientSlice.actions;

export const fetchOfficeEmailHeaders = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.getOfficeEmailHeaders();
    dispatch(setOfficeEmailHeaders(response));
    dispatch(setLoading(false));
    return response;
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};
export const addOfficeEmailHeaders = (data) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.createOfficeEmailHeaders(data);
    dispatch(setLoading(false));
    return response;
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};
export const fetchClientEmailHeaders = (agentId) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.getClientEmailHeaders(agentId);
    dispatch(setClientEmailHeaders(response));
    dispatch(setLoading(false));
    return response;
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};
export const addClientEmailHeaders = (data) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.createClientEmailHeaders(data);
    dispatch(setLoading(false));
    return response;
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};
export const fetctHolderEmailHeaders = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.getHolderEmailHeaders();
    dispatch(setHolderEmailHeaders(response));
    dispatch(setLoading(false));
    return response;
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};
export const addHolderEmailHeaders = (data) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.createHolderEmailHeaders(data);
    dispatch(setLoading(false));
    return response;
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};

export const addPersonalizedEmailHeaders = (data) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.createHolderEmailHeadersVariable(data);
    dispatch(setLoading(false));
    return response;
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};

export default clientSlice.reducer;
