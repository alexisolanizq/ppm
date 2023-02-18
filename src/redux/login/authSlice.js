import { HTTP_STATUS_OK } from '@Const/const';
import { LINK_MAIL_GOOGLE } from '@Const/const';
import { createSlice } from '@reduxjs/toolkit';
import AuthService from '@Services/auth/authService';

const initialState = {
  authed: false,
  isValidate: false
};

const service = AuthService.getInstance();

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthed: (state, action) => {
      state.authed = action.payload;
    },
    setIsValidate: (state, action) => {
      state.isValidate = action.payload;
    }
  }
});

export const { setAuthed, setIsValidate } = AuthSlice.actions;

export const getToken = (code, appDebug) => async (dispatch) => {
  try {
    const debug = appDebug === 'true' ? 'false' : 'true';
    const accessToken = await service.getTokenID(
      LINK_MAIL_GOOGLE,
      code,
      debug
    );

    const userEmail = await service.getEmail(accessToken.id_token);

    const generateToken = await service.getToken(userEmail);

    if (!generateToken.token || generateToken.token === '') {
      return false;
    }

    localStorage.setItem('access_token', accessToken.access_token);
    localStorage.setItem('id_token', accessToken.id_token);
    localStorage.setItem('refresh_token', accessToken.refresh_token);
    localStorage.setItem('token', generateToken.token);

    dispatch(setAuthed(true));

    return true;
  } catch (error) {
    return false;
  }
};

export const fetchValidateToken = (token) => async (dispatch) => {
  try {
    const response = await service.getValidateToken(token);

    if (response.status === HTTP_STATUS_OK) {
      dispatch(setIsValidate(true));
      return true;
    }

    dispatch(setIsValidate(false));
    return false;
  } catch (error) {
    return false;
  }
};

export default AuthSlice.reducer;
