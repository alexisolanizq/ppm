import { createSlice } from '@reduxjs/toolkit';

import CustomerDocumentService from '@Services/customerDocuments/CustomerDocumentService';
import { HTTP_STATUS_OK, HTTP_STATUS_CREATED, MESSAGE_ADD_ERROR, MESSAGE_UPDATE_ERROR } from '@Const/const';

const initialState = {
  customerDocumentsList: [],
  customerDocumentsDataGrid: [],
  currentBank: {}
};

const service = CustomerDocumentService.getInstance();

export const customerDocumentSlice = createSlice({
  name: 'customerDocuments',
  initialState,
  reducers: {
    setCustomerDocumentsList: (state, action) => {
      state.customerDocumentsList = action.payload;
    },
    setCustomerDocumentsDataGrid: (state, action) => {
      state.customerDocumentsDataGrid = action.payload;
    },

    setCustomerDocuments: (state, action) => {
      state.customerDocuments = action.payload;
    },
    setAreas: (state, action) => {
      state.areas = action.payload;
    },
    setCountries: (state, action) => {
      state.countries = action.payload;
    },
    setExpirationUnits: (state, action) => {
      state.expirationUnits = action.payload;
    },
    setProcedurePhases: (state, action) => {
      state.procedurePhases = action.payload;
    },
    setChargeTypes: (state, action) => {
      state.chargeTypes = action.payload;
    }
  }
});

export const {
  setCustomerDocumentsList,
  setCustomerDocumentsDataGrid,
  setCustomerDocuments,
  setAreas,
  setCountries,
  setExpirationUnits,
  setProcedurePhases,
  setChargeTypes
} = customerDocumentSlice.actions;

export const fetchCustomerDocuments = () => async (dispatch) => {
  try {
    const response = await service.getCustomerDocuments();

    if (response.status === HTTP_STATUS_OK) {
      const transformData = response.data.map((item) => ({
        id: item.cdppId,
        area: item.jobArea.joaName,
        phase: item.jobAreaProcedurePhase.prphName,
        name: item.cdppName,
        chargeType: item.chargeType.name,
        tag: item.cdppTag
      }));

      dispatch(setCustomerDocumentsList(response.data));
      dispatch(setCustomerDocumentsDataGrid(transformData));

      return transformData;
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

export const fetchProcedurePhases = (id) => async () => {
  try {
    const response = await service.getJobAreasProcedurePhases(id);

    if (response.status === HTTP_STATUS_OK) {
      return response.data;
    }

    return [];
  } catch (error) {
    return [];
  }
};

export const fetchChargeTypes = () => async () => {
  try {
    const response = await service.getChargeTypes();

    if (response.status === HTTP_STATUS_OK) {
      return response.data;
    }

    return [];
  } catch (error) {
    return [];
  }
};

export const fetchExpirationUnits = () => async () => {
  try {
    const response = await service.getExpirationUnits();

    if (response.status === HTTP_STATUS_OK) {
      return response.data;
    }

    return [];
  } catch (error) {
    return [];
  }
};

export const updateCustomerDocument = (id, data) => async () => {
  try {
    const response = await service.updateCustomerDocument(id, data);

    if (response.status === HTTP_STATUS_OK) {
      return response.data;
    }

    return MESSAGE_UPDATE_ERROR
  } catch (error) {
    return MESSAGE_UPDATE_ERROR
  }
};

export const addCustomerDocument = (data) => async () => {
  try {
    const response = await service.createCustomerDocument(data);

    if (
      response.status === HTTP_STATUS_OK ||
      response.status === HTTP_STATUS_CREATED
    ) {
      return response.data;
    }

    return MESSAGE_ADD_ERROR
  } catch (error) {
    return MESSAGE_ADD_ERROR
  }
};

export default customerDocumentSlice.reducer;
