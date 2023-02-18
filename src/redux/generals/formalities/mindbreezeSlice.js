import { createSlice } from '@reduxjs/toolkit';
import MindbreezeService from '@Services/mindbreeze/MindbreezeService';

const service = MindbreezeService.getInstance()

const initialState = {
  mindbreezeList: [],
  isLoading: false
};

export const mindbreezeSlice = createSlice({
  name: 'mindbreeze',
  initialState,
  reducers: {
    setMindbreezeList: (state, { payload }) => {
      state.mindbreezeList = payload;
    },
    setIsLoading: (state, { payload }) => {
      state.isLoading = payload;
    }
  }
});

export const {
    setMindbreezeList, setIsLoading
} = mindbreezeSlice.actions

export const fetchMindbreeze = () => async (dispatch) => {
    try {
        const response = await service.getMindbreeze()
        dispatch(setMindbreezeList(response.data))
        return response
    } catch (error) {
        console.error('Error', error)
        return []
    }
}

export default mindbreezeSlice.reducer;
