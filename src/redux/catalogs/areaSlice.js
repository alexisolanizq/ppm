import { HTTP_STATUS_OK } from '@Const/const';
import { createSlice } from '@reduxjs/toolkit';
import JobAreaService from '@Services/areas/AreaNameService';
import { updateRow } from '@Utils/map';

const initialState = {
  isLoading: false,
  areas: [],
  areasDataGrid: [],
};

export const service = JobAreaService.getInstance();

export const areaSlice = createSlice({
  name: 'areas',
  initialState,
  reducers: {
    setAreas: (state, action) => {
      state.areas = action.payload;
    },
    setAreasDataGrid: (state, action) => {
      state.areasDataGrid = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    addArea: (state, action) => {
      state.areas = [action.payload, ...state.areas];
    },
    updateArea: (state, { payload }) => {
      state.areas = updateRow(state.areas, payload, 'joaId');
    }
  }
});

export const {
  setAreas,
  updateArea,
  setIsLoading,
  setAreasDataGrid,
  addArea,
} = areaSlice.actions;

export const fetchAreas = () => async (dispatch) => {
  try {
    dispatch(setIsLoading(true));
    const response = await service.listAreas();
    if (response.status === HTTP_STATUS_OK) {
      const transformData = response.data.map((item) => ({
        id: item.joaId,
        name: item.joaName,
        abbreviation: item.joaAbbreviation,
        foreign: item.joaForeign,
        referenceTypes: item.referenceTypes,
        status: item.joaStatus
      }));

      dispatch(setAreas(response.data));
      dispatch(setAreasDataGrid(transformData));
      dispatch(setIsLoading(false));
      return transformData;
    }
    return [];
  } catch (error) {
    console.error(`No hay conexión con el endpoint.\n${error}`);
    return [];
  }
};

export default areaSlice.reducer;
