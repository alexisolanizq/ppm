import { createSlice } from '@reduxjs/toolkit';
import NoticeNameService from '@Services/noticeName/noticeNameService';
import InvoicingConceptsService from '@Services/invoicingConcepts/invoicingConceptsServices';

import {
  HTTP_STATUS_OK,
  HTTP_STATUS_CREATED,
  HTTP_STATUS_ACEPTED,
  MESSAGE_ADD_ERROR,
  VALUE_S,
  VALUE_N
} from '@Const/const';

// funtion expample post request
const initialState = {
  notices: [],
  noticeEdit: null,
  filter: '',
  noticesListDataFilter: [],
  users: [],
  invoiceConcepts: [],
  invoicingConceptsList: []
};

const service = NoticeNameService.getInstance();
const invoicingConceptService = InvoicingConceptsService.getInstance();

const noticesSlice = createSlice({
  name: 'App/noticeName',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setNotices: (state, action) => {
      state.notices = action.payload;
    },
    setNoticesUser: (state, action) => {
      state.notices = action.payload;
    },
    setNoticesInvoice: (state, action) => {
      state.notices = action.payload;
    },
    setNoticesJobArea: (state, action) => {
      state.notices = action.payload;
    },
    setUser: (state, action) => {
      state.users = action.payload;
    },
    setInvoiceConcepts: (state, action) => {
      state.invoiceConcepts = action.payload;
    },
    setInvoicingConceptsList: (state, action) => {
      state.invoicingConceptsList = action.payload;
    }
  },
  extraReducers: {}
});

export const {
  setLoading,
  setUpdateNoticeEdit,
  setUser,
  setNotices,
  setNoticesUser,
  setNoticesInvoice,
  setNoticesJobArea,
  setInvoicingConceptsList
} = noticesSlice.actions;

export const updateNoticeEdit = (params) => (dispatch) => {
  dispatch(setUpdateNoticeEdit(params));
};
export const fetchNoticesData = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.getNotices();
    dispatch(setNotices(response));
    dispatch(setLoading(false));
    return response;
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};
export const fetchNoticesUserData = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.getNoticeUser();
    dispatch(setNoticesUser(response));
    dispatch(setLoading(false));
    return response;
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};
export const fetchNoticesInvoiceData = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.getNoticeInvoice();
    dispatch(setNoticesInvoice(response));
    dispatch(setLoading(false));
    return response;
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};
export const fetchNoticesJobAreaData = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.getNoticeJobArea();
    dispatch(setNoticesJobArea(response));
    dispatch(setLoading(false));
    return response;
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};
export const fetchJobAreaUserData = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.getJobAreaUserData();
    dispatch(setUser(response));
    return response;
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};
export const fetchAreaInvoiceConcept = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    return await service.getAreaInvoiceConcept();
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};

export const addUserNoticeName = (data) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    return await service.createUserNotice(data);
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};
export const addInvoiceNoticeName = (data) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    return await service.createInvoiceNotice(data);
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};
export const addJobAreaNoticeName = (data) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    return await service.createJobAreaNotice(data);
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};
export const addNoticeNameData = (data) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    return await service.createNotices(data);
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};

export const updateNoticesData = (noticeId, data) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    return await service.updateNotices(noticeId, data);
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};
export const updateInvoiceNoticeName = (noticeId, data) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    return await service.updateInvoiceNotices(noticeId, data);
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};
export const updateJobAreaNoticeName = (noticeId, data) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    return await service.updateJobAreaNotice(noticeId, data);
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};
export const updateUserNoticeName = (noticeId, data) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    return await service.updateUserNotices(noticeId, data);
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};

export const createAreaInvoiceConcept = (data) => async () => {
  try {
    const response = await invoicingConceptService.createAreaInvoiceConcept(
      data
    );

    if (
      response.status === HTTP_STATUS_CREATED ||
      response.status === HTTP_STATUS_OK ||
      response.status === HTTP_STATUS_ACEPTED
    ) {
      return response.data;
    }

    return MESSAGE_ADD_ERROR;
  } catch (error) {
    return MESSAGE_ADD_ERROR;
  }
};

export const fetchInvoicingConcepts = () => async (dispatch) => {
  try {
    const [
      resposeInvoicingConcepts,
      { data: areasList },
      { data: paymentRightsList }
    ] = await Promise.all([
      invoicingConceptService.getInvoicingConcepts(),
      invoicingConceptService.getAreasInvoicingConcepts(),
      invoicingConceptService.getPaymentRightsInvoiceConcept()
    ]);

    if (resposeInvoicingConcepts.status === HTTP_STATUS_OK) {
      const transformData = resposeInvoicingConcepts.data.map((item) => ({
        id: item.incoId,
        jobAreas: areasList.filter(
          (joaInco) => joaInco.invoiceConcept.incoId === item.incoId
        ),
        nameSpanish: item.incoNameSpa,
        nameEnglish: item.incoNameEng,
        description: item.incoDescription,
        paymentRights: paymentRightsList.filter(
          (pariInco) => pariInco.incoId.incoId === item.incoId
        ),
        multiple: item.incoMultiple ? VALUE_S : VALUE_N,
        article: item.articleType.name,
        feePeso: item.incoFeePeso,
        feeDollar: item.incoFeeDollar,
        uniqKey: item.incoUniqKey,
        agent: item.agent.ageName
          ? `${item.agent?.ageName} ${item.agent?.ageFirstName}`
          : '',
        holder: item.holder.holName
          ? `${item.holder?.holName} ${item.holder?.holFirstName}`
          : '',
        concept: item.conceptType.name,
        incoPrepayment: item.incoPrepayment
      }));

      dispatch(setInvoicingConceptsList(resposeInvoicingConcepts.data));

      return transformData;
    }

    return [];
  } catch (error) {
    return [];
  }
};

export const updateAreaInvoiceConcept = (aricId, data) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    return await invoicingConceptService.updateAreaInvoiceConcept(aricId, data);
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};

export default noticesSlice.reducer;
