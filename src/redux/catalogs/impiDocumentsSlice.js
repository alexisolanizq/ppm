import { createSlice } from '@reduxjs/toolkit';
import ImpiDocumentsService from '@Services/impiDocuments/impiDocumentsService';
import TempFoldersService from '@Services/tempFolders/TempFolderService';

import { HTTP_STATUS_OK } from '@Const/const';

const initialState = {
  impiDocuments: [],
  reminders: [],
  notifications: []
};
export const service = ImpiDocumentsService.getInstance();
const serviceTempFolder = TempFoldersService.getInstance();

const impiDocumentsSlice = createSlice({
  name: 'App/impiDocuments',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setImpiDocuments: (state, action) => {
      state.impiDocuments = action.payload;
    },
    setReminders: (state, action) => {
      state.reminders = action.payload;
    },
    setNotifications: (state, action) => {
      state.notifications = action.payload;
    }
  },
  extraReducers: {}
});

export const {
  setLoading,
  setImpiDocuments,
  setUpdateCountryEdit,
  setReminders,
  setNotifications
} = impiDocumentsSlice.actions;

export const updateCountryEdit = (params) => (dispatch) => {
  dispatch(setUpdateCountryEdit(params));
};
export const getImpiDocumentsData = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.getImpiDocuments();
    dispatch(setImpiDocuments(response));
    dispatch(setLoading(false));
    return response;
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};
export const fetchReminders = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.getReminders();
    dispatch(setReminders(response));
    dispatch(setLoading(false));
    return response;
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};
export const fetchNotifications = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.getNotifications();
    dispatch(setNotifications(response));
    dispatch(setLoading(false));
    return response;
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};

export const addImpiDocumentsData = (data) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.createImpiDocuments(data);
    dispatch(setLoading(false));
    return response;
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};

export const createDocumentNotification = (data) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.createDocumentNotification(data);
    dispatch(setLoading(false));
    return response;
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};
export const createDocumentRemainder = (data) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.createDocumentRemainder(data);
    dispatch(setLoading(false));
    return response;
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};

export const updateImpiDocumentsData = (impiId, data) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.updateImpiDocuments(impiId, data);
    dispatch(setLoading(false));
    return response;
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};

export const fetchTempFolders = () => async () => {
  try {
    const response = await serviceTempFolder.listTempRepoFolders();

    if (response.status === HTTP_STATUS_OK) {
      return response.data.map((item) => ({
        id: item.tmrfId,
        name: item.tmrfName,
        jobArea: item.jobArea.joaName
      }));
    }

    return [];
  } catch (error) {
    return [];
  }
};

export default impiDocumentsSlice.reducer;
