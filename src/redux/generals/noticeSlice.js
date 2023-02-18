import { HTTP_STATUS_OK } from '@Const/const';
import { createSlice } from '@reduxjs/toolkit';
import NoticeService from '@Services/notice/noticeService';

const initialState = {
  isLoading: false,
  noticeList: [],
  noticeName: [],
  holderList: [],
  currentNotice: {},
  noticeDataGrid: {}
};

const service = NoticeService.getInstance();

export const noticeSlice = createSlice({
  name: 'notice',
  initialState,
  reducers: {
    setNoticeList: (state, action) => {
      state.noticeList = action.payload;
    },
    setNoticeName: (state, action) => {
      state.noticeName = action.payload;
    },
    setNoticeDataGrid: (state, action) => {
      state.noticeDataGrid = action.payload;
    },
    setCurrentNotice: (state, action) => {
      state.currentNotice = action.payload;
    },
    setHolderList: (state, action) => {
      state.holderList = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    }
  }
});

export const {
  setNoticeList,
  setNoticeDataGrid,
  setCurrentNotice,
  setHolderList,
  setNoticeName,
  setLoading
} = noticeSlice.actions;

export const fetchNotices = () => async (dispatch) => {
  try {
    const response = await service.getNotices();

    if (response.status === HTTP_STATUS_OK) {
      dispatch(setNoticeList(response.data));
      return response.data;
    }
    return [];
  } catch (error) {
    console.error('Error', error);
    return [];
  }
};

export const fetchHoldersNotice = () => async (dispatch) => {
  try {
    const response = await service.getHolders();
    const transformData = response.map((item) => ({
      id: item.id,
      label: `${item.name} ${item.firstName} ${item.lastName}`
    }));
    dispatch(setHolderList(transformData));
    return transformData;
  } catch (error) {
    return [];
  }
};

export const fetchNoticeName = () => async (dispatch) => {
  try {
    const response = await service.getNoticeNames();
    const transformData = response.map((item) => ({
      id: item.nonaId,
      label: `${item.nonaName}`
    }));
    dispatch(setHolderList(transformData));
    return transformData;
  } catch (error) {
    return [];
  }
};

export default noticeSlice.reducer;
