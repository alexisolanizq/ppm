import { createSlice } from '@reduxjs/toolkit';
import InstructionsService from '@Services/instructions/instructionsService';

const initialState = {
  instructions: [],
  instructionEdit: null,
  paymentsRight: []
};
const service = InstructionsService.getInstance();

const instructionsSlice = createSlice({
  name: 'App/instructions',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setInstructions: (state, action) => {
      state.instructions = action.payload;
    },
    setPaymentsRight: (state, action) => {
      state.paymentsRight = action.payload;
    }
  },
  extraReducers: {}
});

export const {
  setLoading,
  setInstructions,
  setUpdateInstructionEdit,
  setPaymentsRight
} = instructionsSlice.actions;

export const updateInstructionEdit = (params) => (dispatch) => {
  dispatch(setUpdateInstructionEdit(params));
};

export const getInstructionsData = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.getInstructions();
    dispatch(setInstructions(response));
    dispatch(setLoading(false));
    return response;
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};
export const getPPMDocumentsData = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.getPPMDocuments();
    dispatch(setLoading(false));
    return response;
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};

export const getPaymentsRight = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.getPaymentRight();
    dispatch(setPaymentsRight(response));
    dispatch(setLoading(false));
    return response;
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};

export const getInstructionsPayments = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.getInstructionsTypesPayments();
    dispatch(setLoading(false));
    return response;
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};

export const addInstructionsData = (data) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.createInstructions(data);
    dispatch(setLoading(false));
    return response.data;
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};

export const addPaymentsRight = (data) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.createPaymentsRight(data);
    dispatch(setLoading(false));
    return response;
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};

export const updateInstructionsData =
  (instructionId, data) => async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await service.updateInstructions(instructionId, data);
      dispatch(setLoading(false));
      return response;
    } catch (error) {
      dispatch(setLoading(false));
      return error;
    }
  };

export default instructionsSlice.reducer;
