import { createSlice } from '@reduxjs/toolkit';

import AuthorityNotificationService from '@Services/authorityNotifications/authorityNotificationService';
import { HTTP_STATUS_OK, HTTP_STATUS_CREATED, MESSAGE_ADD_ERROR, MESSAGE_UPDATE_ERROR } from '@Const/const';

const initialState = {
  authorityNotificationsList: [],
  areaSortedPhases: null
};

const service = AuthorityNotificationService.getInstance();

const AuthorityNotificationSlice = createSlice({
  name: 'authorityNotifications',
  initialState,
  reducers: {
    setAuthorityNotificationsList: (state, action) => {
      state.authorityNotificationsList = action.payload;
    },
    setAareaSortedPhases: (state, action) => {
      state.areaSortedPhases = action.payload;
    }
  }
});

export const { setAuthorityNotificationsList, setAareaSortedPhases } =
  AuthorityNotificationSlice.actions;

export const fetchAutorityNotificationPhases = () => async (dispatch) => {
  try {
    const response = await service.getAutorityNotificationPhases();

    if (response.status === HTTP_STATUS_OK) {
      dispatch(setAuthorityNotificationsList(response.data));

      return response.data;
    }

    return [];
  } catch (error) {
    return [];
  }
};

export const fetchAreas = () => async () => {
  try {
    const response = await service.getJobAreas();

    if (response.status === HTTP_STATUS_OK) {
      return response.data;
    }

    return [];
  } catch (error) {
    return [];
  }
};

export const fetchSortedPhases = (jobAreaId) => async (dispatch) => {
  try {
    const response = await service.getAreaSortedPhases(jobAreaId);
    const responseSoPh = await service.getSortedPhases();

    if (
      response.status === HTTP_STATUS_OK &&
      responseSoPh.status === HTTP_STATUS_OK
    ) {
      dispatch(setAareaSortedPhases(response.data));

      return responseSoPh.data.filter(
        (item) => item.areaSortedPhaseDto.arspId === response.data.arspId
      );
    }

    return [];
  } catch (error) {
    return [];
  }
};

export const fetchImpiDocuments = () => async () => {
  try {
    const response = await service.getImpiDocuments();

    if (response.status === HTTP_STATUS_OK) {
      return response.data;
    }

    return [];
  } catch (error) {
    return [];
  }
};

export const fetchNotificationFequency = () => async () => {
  try {
    const response = await service.getNotificationFequency();

    if (response.status === HTTP_STATUS_OK) {
      return response.data;
    }

    return [];
  } catch (error) {
    return [];
  }
};

export const fetchNotificationPeriod = () => async () => {
  try {
    const response = await service.getNotificationPeriod();

    if (response.status === HTTP_STATUS_OK) {
      return response.data;
    }

    return [];
  } catch (error) {
    return [];
  }
};

export const fetchUsers = () => async () => {
  try {
    const response = await service.getUsers();

    if (response.status === HTTP_STATUS_OK) {
      return response.data;
    }

    return [];
  } catch (error) {
    return [];
  }
};

export const createAutorityNotification = (data) => async () => {
  try {
    const response = await service.createAutorityNotification(data);

    if (response.status === HTTP_STATUS_CREATED) {
      return response.data;
    }

    return MESSAGE_ADD_ERROR;
  } catch (error) {
    return MESSAGE_ADD_ERROR;
  }
};

export const createAutorityNotificationPhases = (data) => async () => {
  try {
    const response = await service.createAutorityNotificationPhases(data);

    if (response.status === HTTP_STATUS_CREATED) {
      return response.data;
    }

    return MESSAGE_ADD_ERROR;
  } catch (error) {
    return MESSAGE_ADD_ERROR;
  }
};

export const updateAutorityNotificationPhases = (id, data) => async () => {
  try {
    const response = await service.updateAutorityNotificationPhases(id, data);

    if (response.status === HTTP_STATUS_OK) {
      return response.data;
    }

    return MESSAGE_UPDATE_ERROR
  } catch (error) {
    return MESSAGE_UPDATE_ERROR
  }
};

export default AuthorityNotificationSlice.reducer;
