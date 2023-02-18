const { createSlice } = require('@reduxjs/toolkit');
const { updateRow, insertArrayRows } = require('@Utils/map');

const initialState = {
  inventors: [],
  isLoading: false
};

export const inventorSlices = createSlice({
  name: 'inventors',
  initialState,
  reducers: {
    setLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
    setInventorList: (state, { payload }) => {
      state.inventors = payload;
    },
    addInventor: (state, { payload }) => {
      if(Array.isArray(payload)){
        state.inventors = insertArrayRows(state.inventors, payload)
        return
      }
      state.inventors = [payload, ...state.inventors];

    },
    updateInventor: (state, { payload }) => {
      state.inventors = updateRow(state.inventors, payload, 'inveId');
    }
  },
  extraReducers: {}
});

export const { setLoading, setInventorList, addInventor, updateInventor } =
  inventorSlices.actions;

export default inventorSlices.reducer;
