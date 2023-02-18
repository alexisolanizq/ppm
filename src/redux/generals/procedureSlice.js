import { createSlice } from '@reduxjs/toolkit';

import { HTTP_STATUS_OK } from '@Const/const';

import ProcedureService from '@Services/procedure/procedureService';
import InvoicingEntitiesService from '@Services/generals/invoicingEntitiesService';

const initialState = {
  procedure: null,
  procedures: [],
  procedureRequest: [],
  classEdit: null,
  searchJobs: [],
  motherReference: null,
  procedureRenewals: []
};

const service = ProcedureService.getInstance();
const serviceInvoicingEntities = InvoicingEntitiesService.getInstance();

const proceduresSlice = createSlice({
  name: 'App/procedures',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setProcedures: (state, action) => {
      state.procedures = action.payload;
    },
    setProcedureRenewals: (state, action) => {
      state.procedureRenewals = action.payload;
    },
    setSearchJobs: (state, action) => {
      state.searchJobs = action.payload;
    },
    setProcedure: (state, action) => {
      state.procedure = action.payload;
    },
    setMotherReference: (state, action) => {
      state.motherReference = action.payload;
    },
    setProcedureRequest: (state, action) => {
      state.procedureRequest = action.payload;
    }
  },
  extraReducers: {}
});

export const {
  setLoading,
  setProcedures,
  setSearchJobs,
  setProcedure,
  setUpdateClassEdit,
  setProcedureRenewals,
  setProcedureRequest,
  setMotherReference
} = proceduresSlice.actions;

export const fetchProcedures = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.getProcedures();
    dispatch(setProcedures(response));
    dispatch(setLoading(false));
    return response;
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};

export const fetchProcedureRenewals = (id) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.getProcedureRenewal(id);
    dispatch(setProcedureRenewals(response));
    dispatch(setLoading(false));
    return response;
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};

export const fetchProcedure = (id) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.getProcedure(id);
    dispatch(setProcedure(response));
    dispatch(setLoading(false));
    return response;
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};
export const fetchMotherReference = (id) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.getMotherReference(id);
    dispatch(setMotherReference(response));
    dispatch(setLoading(false));
    return response;
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};
export const fetchSearchJobs = (id) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.getSearchJobs(id);
    dispatch(setSearchJobs(response));
    dispatch(setLoading(false));
    return response;
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};

export const fetchProcedureRequest = (id) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.getProcedureRequest(id);
    dispatch(setProcedureRequest(response));
    dispatch(setLoading(false));
    return response;
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};

export const getProceduresData = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.getProcedures();
    dispatch(setProcedure(response));
    dispatch(setLoading(false));
    return response;
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};

export const addProcedureAgent = (data) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.createProcedureAgent(data);
    dispatch(setLoading(false));
    return response;
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};
export const addProcedureHolder = (data) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.createProcedureHolder(data);
    dispatch(setLoading(false));
    return response;
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};
export const addProceduresData = (data) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.createProcedures(data);
    dispatch(setLoading(false));
    return response;
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};

export const createReference = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.createReference();
    dispatch(setLoading(false));
    return response;
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};

export const updateProceduresData = (classeId, data) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.updateProcedures(classeId, data);
    dispatch(setLoading(false));
    return response;
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};

export const fetchInvoicingEntities = () => async () => {
  try {
    const response = await serviceInvoicingEntities.getInvoicingEntities();
    if (response.status === HTTP_STATUS_OK) {
      const transformData = response.data.map((item) => ({
        id: item.id,
        name:
          item.typePerson.opcgId === 1
            ? `${item.name} ${item.firstName} ${item.lastName}`
            : item.name,
        address: `
          ${item.street}
          ${item.outsideNumber}
          ${item.innerNumber ?? ''}
          ${item.colony}
          ${item.city}
          ${item.township}
          ${item.state}
          ${item.country.nameSpanish}
          ${item.codePostal}
          `,
        rfc: item.rfc,
        typePerson: item.typePerson.name,
        regime: item.regime.name,
        paymentMethod: item.paymentMethod.name,
        wayPay: item.wayPay.name,
        cfdi: item.cfdi.name
      }));

      return transformData;
    }

    return [];
  } catch (error) {
    return [];
  }
};

export default proceduresSlice.reducer;
