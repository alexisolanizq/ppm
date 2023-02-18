import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import LegalFigureService from '@Services/legalFigures/LegalFigureService';

const exampleAdapter = createEntityAdapter({});
export const { selectAll: selectEvents, selectById: selectEventsById } =
  exampleAdapter.getSelectors(
    (state) => state.App.legalFigures,
    (state) => state.App.areas,
    (state) => state.App.referenceTypes
  );

const service = LegalFigureService.getInstance();

const legalFiguresSlice = createSlice({
  name: 'App/legalFigures',
  initialState: exampleAdapter.getInitialState({
    isLoading: false,
    legalFigures: [],
    referenceTypes: []
  }),
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setLegalFigures: (state, action) => {
      state.legalFigures = action.payload;
    },
    setReferenceTypes: (state, action) => {
      state.referenceTypes = action.payload;
    }
  }
});

export const { setLoading, setLegalFigures, setAreas, setReferenceTypes } =
  legalFiguresSlice.actions;

export const fetchReferenceTypes = (id) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.getJobAreasReferenceTypes(id);
    dispatch(setReferenceTypes(response));
    dispatch(setLoading(false));
    return response;
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};

export const fetchLegalFigures = () => async (dispatch) => {
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

export const editLegalFigure = (id, data) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.updateLegalFigure(id, data);
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
    const response = await service.createLegalFigure(data);
    dispatch(setLegalFigures(response));
    dispatch(setLoading(false));
    return response;
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};

export default legalFiguresSlice.reducer;
