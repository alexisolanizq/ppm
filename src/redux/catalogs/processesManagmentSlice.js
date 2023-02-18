import { createSlice } from '@reduxjs/toolkit';
import ProcessesManagementService from '@Services/processes/processesService';
import TempFoldersService from '@Services/tempFolders/TempFolderService';

import { HTTP_STATUS_OK } from '@Const/const';

const initialState = {
  processes: [],
  processEdit: null,
  filter: '',
  processesListDataFilter: [],
  tempFolderListData: [],
  levelList: []
};
const service = ProcessesManagementService.getInstance();
const serviceTempFolder = TempFoldersService.getInstance();

const processesSlice = createSlice({
  name: 'App/processes',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setProcesses: (state, action) => {
      state.processes = action.payload;
    },
    setTempFolderListData: (state, action) => {
      state.tempFolderListData = action.payload;
    },
    setLevelsList: (state, action) => {
      state.levelList = action.payload;
    },
    setPriorities: (state, action) => {
      state.priorities = action.payload;
    }
  },
  extraReducers: {}
});

export const {
  setLoading,
  setProcesses,
  setUpdateProcessEdit,
  setTempFolderListData,
  setLevelsList,
  setPriorities
} = processesSlice.actions;

export const updateProcessEdit = (params) => (dispatch) => {
  dispatch(setUpdateProcessEdit(params));
};
export const getProcessesData = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.getProcesses();
    dispatch(setProcesses(response));
    dispatch(setLoading(false));
    return response;
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};
export const getLevelsList = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.getLevels();
    dispatch(setLevelsList(response));
    dispatch(setLoading(false));
    return response;
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};

export const getJobAreaProcedurePhase = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.getJobAreasProcedurePhasesService();
    dispatch(setLoading(false));
    return response;
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};

export const getAreasTypes = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.getJobAreas();
    dispatch(setLoading(false));
    return response;
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};

export const addProcessesData = (data) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    return await service.createProcesses(data);
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};

export const getPermissionList = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    return await service.listPermissions();
  } catch (error) {
    dispatch(setLoading(false));
    console.error(error);
    return error;
  }
};

export const updateProcessesData = (processId, data) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    return await service.updateProcesses(processId, data);
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

export default processesSlice.reducer;
