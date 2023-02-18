import { createSlice } from '@reduxjs/toolkit';
import MailService from '@Services/mails/mailService';

const initialState = {
  mail: null,
  mailList: [],
  mailsListSend: [],
  mailsListDraft: [],
  mailsDataGrid: [],
  currencyList: [],
  currentMail: {},
  attachmentFile: [],
  mailFindList: [],
  error: [],
  isLoading: false
};

const service = MailService.getInstance();

const mailSlice = createSlice({
  name: 'mails',
  initialState,
  reducers: {
    setMails: (state, action) => {
      state.mailList = action.payload;
    },
    setFindMails: (state, action) => {
      state.mailFindList = action.payload;
    },
    setMailsSend: (state, action) => {
      state.mailsListSend = action.payload;
    },
    setMailsDraft: (state, action) => {
      state.mailsListDraft = action.payload;
    },
    setMail: (state, action) => {
      state.mail = action.payload;
    },
    setAttachmentFile: (state, action) => {
      state.attachmentFile.push(action.payload);
    },
    setMailsDataGrid: (state, action) => {
      state.mailsDataGrid = action.payload;
    },
    setCurrencies: (state, action) => {
      state.currencyList = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setCurrentMail: (state, action) => {
      state.currentMail = action.payload;
    },
    hasError: (state, action) => {
      state.error = action.payload;
    }
  }
});

export const {
  setMail,
  setMails,
  setMailsDataGrid,
  setCurrencies,
  setCurrentMail,
  startLoading,
  getMailSuccess,
  hasError,
  setMailsSend,
  setAttachmentFile,
  setMailsDraft,
  setFindMails,
  setIsLoading
} = mailSlice.actions;

export const fetchMail = (messageId) => async (dispatch) => {
  try {
    dispatch(setIsLoading(true));
    const response = await service.getMail(messageId);
    dispatch(setMail(response));
    dispatch(setIsLoading(false));
    return response;
  } catch (error) {
    dispatch(setIsLoading(false));
    dispatch(hasError(error));
    return error;
  }
};

export const fetchAttachment = (data) => async (dispatch) => {
  try {
    dispatch(setIsLoading(true));
    const response = await service.getAttachmentFile(data);
    dispatch(setAttachmentFile(response));
    dispatch(setIsLoading(false));
    return response;
  } catch (error) {
    dispatch(setIsLoading(false));
    dispatch(hasError(error));
    return error;
  }
};

export const fetchMails = () => async (dispatch) => {
  try {
    dispatch(setIsLoading(true));
    const response = await service.getMails();
    dispatch(setMails(response));
    dispatch(setIsLoading(false));
    return response;
  } catch (error) {
    dispatch(hasError(error));
    dispatch(setIsLoading(false));
    return error;
  }
};

export const findListMail = (data) => async (dispatch) => {
  try {
    dispatch(setIsLoading(true));
    const response = await service.findMails(data);
    dispatch(setFindMails(response));
    dispatch(setIsLoading(false));
    return response;
  } catch (error) {
    dispatch(hasError(error));
    dispatch(setIsLoading(true));
    return error;
  }
};

export const fetchMailsSend = () => async (dispatch) => {
  try {
    dispatch(setIsLoading(true));
    const response = await service.getMailsSends();
    dispatch(setMailsSend(response));
    dispatch(setIsLoading(false));
    return response;
  } catch (error) {
    dispatch(hasError(error));
    dispatch(setIsLoading(false));
    return error;
  }
};
export function fetchMailsDraft() {
  return async (dispatch) => {
    try {
      dispatch(setIsLoading(true));
      const response = await service.getMailsAttachment();
      dispatch(setMailsDraft(response));
      dispatch(setIsLoading(false));
      return response;
    } catch (error) {
      dispatch(hasError(error));
      dispatch(setIsLoading(false));
      return error;
    }
  };
}

export const addMail = (data) => async (dispatch) => {
  try {
    return await service.createMail(data);
  } catch (error) {
    dispatch(hasError(error));
    dispatch(setIsLoading(false));
    return error;
  }
};
export const addMailDraft = (data) => async (dispatch) => {
  try {
    return await service.createMailDraft(data);
  } catch (error) {
    dispatch(hasError(error));
    dispatch(setIsLoading(false));
    return error;
  }
};

export default mailSlice.reducer;
