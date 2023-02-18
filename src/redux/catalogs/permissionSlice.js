import { createSlice } from '@reduxjs/toolkit';
import PermissionService from '@Services/permissions/permissionService';

const initialState = {
  list: [],
  isLoading: false,
  error: null
};

const service = PermissionService.getInstance();

export const permissionSlice = createSlice({
  name: 'permissions',
  initialState,
  reducers: {
    setPermissions: (state, action) => {
      state.list = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload
    }
  }
});

export const { setPermissions, setIsLoading } = permissionSlice.actions;

export const fetchPermissionList = () => async (dispatch) => {
  try {
    dispatch(setIsLoading(true))
    const response = await service.listPermissions();
    dispatch(setPermissions(response.data));
    dispatch(setIsLoading(false))
    return response;
  } catch (error) {
    return error;
  }
};

export const addPermissionLevel = (data) => async (dispatch) => {
  try {
    dispatch(setIsLoading(true))
    const response = await service.createPermissionLevel(data);
    dispatch(setIsLoading(false))
    return response;
  } catch (error) {
    return error;
  }
};

export const editPermissionLevel = (id, data) => async (dispatch) => {
  try {
    dispatch(setIsLoading(true))
    const response = await service.updatePermissionLevel(id, data)
    dispatch(setIsLoading(false))
    return response
  } catch (error) {
    return error
  }
}

export default permissionSlice.reducer;
