import { createSlice } from '@reduxjs/toolkit';
import RecipientService from '@Services/recipient/RecipientService';
// funtion expample post request
const initialState = {
  isLoading: false
};

const service = RecipientService.getInstance();

const recipientSlice = createSlice({
  name: 'App/recipient',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    }
  },
  extraReducers: {}
});

export const { setLoading } = recipientSlice.actions;

export const fetchOfficesData = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.getOffices();
    dispatch(setLoading(false));
    return response;
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};

export const addOfficeData = (data) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.createOffice(data);
    dispatch(setLoading(false));
    return response;
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};

export const updateOfficeData = (data) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.updateOffice(data);
    dispatch(setLoading(false));
    return response;
  } catch (error) {
    dispatch(setLoading(false));
    return false;
  }
};

export default recipientSlice.reducer;
