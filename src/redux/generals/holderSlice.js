import { createSlice } from '@reduxjs/toolkit';
import Holders from '@Services/holders/holderService';

const initialState = {
  holders: [],
  holdersList: [],
  isLoading: false,
  error: null
};

export const service = Holders.getInstance();

export const holderSlice = createSlice({
  name: 'holders',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setHolders: (state, action) => {
      state.holders = action.payload;
    },
    setHoldersData: (state, action) => {
      state.holdersList = action.payload;
    },
    addHolder: (state, action) => {
      state.holders = [...state.clients, action.payload];
    }
  }
});

export const { setLoading, setHolders, setHoldersData, addHolder } = holderSlice.actions;

export const fetchHolders = () => async (dispatch) => {
  try {
    const response = await service.listHolders();
    dispatch(setHolders(response));
    return response;
  } catch (error) {
    return error;
  }
};
export const fetchHoldersData = () => async (dispatch) => {
  try {
    const response = await service.getHolders();
    dispatch(setHoldersData(response));
    return response;
  } catch (error) {
    return error;
  }
};
export const addHolderData = (data) => async (dispatch) => {
  try {
    dispatch(setLoading(true))
    const response = await service.createHolder(data)
    dispatch(setLoading(false))
    return response
  } catch (error) {
    dispatch(setLoading(false));
    return error
  }
};

export default holderSlice.reducer;
