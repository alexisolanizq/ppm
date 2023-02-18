import { createSlice } from '@reduxjs/toolkit';
import ReminderService from '@Services/reminders/ReminderService';

const initialState = {
  isLoading: false,
  reminderList: [],
  reminderDataGrid: []
};
export const service = ReminderService.getInstance();
export const reminderSlice = createSlice({
  name: 'reminders',
  initialState,
  reducers: {
    setReminders: (state, action) => {
      state.reminderList = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    }
  }
});
export const { setReminders, setLoading } = reminderSlice.actions;
export const fetchReminders = () => async (dispatch) => {
    try {
        dispatch(setLoading(true))
        const response = await service.getReminders()
        dispatch(setReminders(response))
        dispatch(setLoading(false))
        return response
    } catch (error) {
        return error
    }
} 

export default reminderSlice.reducer;
