import { createSlice } from '@reduxjs/toolkit';
import UploadEvirtualService from '@Services/evirtual/uploadEvirtualService';
// funtion expample post request
const initialState = {
  isLoading: false,
  update: false
};

const service = UploadEvirtualService.getInstance();

const officeSlice = createSlice({
  name: 'App/offices',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  },
  extraReducers: {}
});

export const { setLoading } = officeSlice.actions;

export const addEvirtual = (data, entity) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    return await service.createEvirtual(data, entity);
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};

export default officeSlice.reducer;
