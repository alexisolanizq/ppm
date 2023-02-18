import { createSlice } from '@reduxjs/toolkit';
import NoticePerActionService from '@Services/noticePerActionService';

const initialState = {
  notifications: [],
  noticeEdit: null,
  filter: '',
  notificationsListDataFilter: []
};

const service = NoticePerActionService.getInstance();

const notificationsSlice = createSlice({
  name: 'App/notifications',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setNotifications: (state, action) => {
      state.notifications = action.payload;
    },
    setCorresponsible: (state, action) => {
      state.corresponsible = action.payload;
    },
    setActionNotification: (state, action) => {
      state.actionNotification = action.payload;
    }
  },
  extraReducers: {}
});

export const {
  setLoading,
  setNotifications,
  setUpdateNoticeEdit,
  setActionNotification,
  setCorresponsible
} = notificationsSlice.actions;

export const updateNoticeEdit = (params) => (dispatch) => {
  dispatch(setUpdateNoticeEdit(params));
};

export const fetchActionNotification = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.getActionNotification();
    dispatch(setActionNotification(response));
    dispatch(setLoading(false));
    return response;
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};

export const fetchCoresponsible = (userId) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.getCoresponsible(userId);
    dispatch(setCorresponsible(false));
    dispatch(setLoading(false));
    return response;
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};
export const getNotificationsData = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.getNotifications();
    const newArr = response.map((v, index) => ({ ...v, id: index }));
    dispatch(setNotifications(newArr));
    dispatch(setLoading(false));
    return newArr;
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};

export const addActionsNotificationRecipient = (data) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    return await service.createActionsNotificationRecipient(data);
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};

export const addNotificationsData = (data) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    return await service.createNotifications(data);
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};

export const updateNotificationsData = (data) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    return await service.updateNotifications(data);
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};

export default notificationsSlice.reducer;
