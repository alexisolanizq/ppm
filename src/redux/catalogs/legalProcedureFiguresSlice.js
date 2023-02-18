import { createSlice } from '@reduxjs/toolkit';
import LegalProcedureFiguresService from '@Services/legalProcedureFigures/legalProcedureFiguresService';

const initialState = {
  legalFigures: [],
  figuresTypes: [],
  referenceTypes: []
};
const service = LegalProcedureFiguresService.getInstance();
const legalProcedureFiguresSlice = createSlice({
  name: 'App/legalProcedureFigures',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setLegalFigures: (state, action) => {
      state.legalFigures = action.payload;
    },
    setFiguresTypes: (state, action) => {
      state.figuresTypes = action.payload;
    },
    setReferenceTypes: (state, action) => {
      state.referenceTypes = action.payload;
    }
  },
  extraReducers: {}
});

export const {
  setLoading,
  setLegalFigures,
  setUpdateLegalFigureEdit,
  setReferenceTypes,
  setFiguresTypes
} = legalProcedureFiguresSlice.actions;
export const fetchFigureTypes = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.geProcedureTypes();
    dispatch(setFiguresTypes(response));
    return response;
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};
export const fetchReferenceTypes = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.getReferenceTypes();
    dispatch(setReferenceTypes(response));
    dispatch(setLoading(false));
    return response;
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};
export const getLegalFiguresData = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.getLegalFigures();
    dispatch(setLegalFigures(response));
    dispatch(setLoading(false));
    return response;
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};

export const addLegalFigure = (data) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.createLegalFigures(data);
    dispatch(setLoading(false));
    return response;
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};

export const updateLegalFiguresData =
  (legalFigureId, data) => async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await service.updateLegalFigures(legalFigureId, data);
      dispatch(setLoading(false));
      return response;
    } catch (error) {
      dispatch(setLoading(false));
      return error;
    }
  };

export default legalProcedureFiguresSlice.reducer;
