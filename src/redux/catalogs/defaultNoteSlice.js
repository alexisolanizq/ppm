import { createSlice } from '@reduxjs/toolkit';

import DefaultNotesService from '@Services/defaultNotes/defaultNotesService';
import { HTTP_STATUS_OK, HTTP_STATUS_CREATED, MESSAGE_ADD_ERROR, MESSAGE_UPDATE_ERROR } from '@Const/const';

const initialState = {
  defaultNotesList: [],
  defaultNotesDataList: [],
  prioritiesList: [],
  currentDefaultNote: {}
};

const service = DefaultNotesService.getInstance();

export const defaultNoteSlice = createSlice({
  name: 'defaultNotes',
  initialState,
  reducers: {
    setDefaultNotes: (state, action) => {
      state.defaultNotesList = action.payload;
    },
    setDefaultNotesDataList: (state, action) => {
      state.defaultNotesDataList = action.payload;
    },
    setPriorities: (state, action) => {
      state.prioritiesList = action.payload;
    },
    setCurrentDefaultNote: (state, action) => {
      state.currentDefaultNote = action.payload;
    }
  }
});

export const {
  setDefaultNotes,
  setDefaultNotesDataList,
  setPriorities,
  setCurrentDefaultNote
} = defaultNoteSlice.actions;

export const fetchDefaultNotes = () => async (dispatch) => {
  try {
    const response = await service.getDefaultNotes();

    if (response.status === HTTP_STATUS_OK) {
      const transformData = response.data.map((item) => ({
        id: item.prnoId,
        name: item.prnoName,
        description: item.prnoDescription,
        priorityId: item.priority.opcgId,
        priority: item.priority.name
      }));

      dispatch(setDefaultNotes(response.data));
      dispatch(setDefaultNotesDataList(transformData));

      return transformData;
    }

    return [];
  } catch (error) {
    return [];
  }
};

export const fetchPriorities = () => async (dispatch) => {
  try {
    const response = await service.getPriorities();

    if (response.status === HTTP_STATUS_OK) {
      dispatch(setPriorities(response.data));
    }
  } catch (error) {
    dispatch(setPriorities([]));
  }
};

export const createDefaultNote = (data) => async () => {
  try {
    const response = await service.createDefaultNote(data);

    if (response.status === HTTP_STATUS_CREATED) {
      return response.data;
    }

    return MESSAGE_ADD_ERROR
  } catch (error) {
    return MESSAGE_ADD_ERROR
  }
};

export const updateDefaultNote = (id, data) => async () => {
  try {
    const response = await service.updateDefaultNote(id, data);

    if (response.status === HTTP_STATUS_OK) {
      return response.data;
    }

    return MESSAGE_UPDATE_ERROR
  } catch (error) {
    return MESSAGE_UPDATE_ERROR
  }
};

export default defaultNoteSlice.reducer;
