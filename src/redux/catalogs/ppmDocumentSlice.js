import { createSlice } from '@reduxjs/toolkit';

import JobAreaService from '@Services/JobAreasService';
import PhaseService from '@Services/phases/phaseService';
import PPMDocumentService from '@Services/ppmDocuments/ppmDocumentsService';
import {
  HTTP_STATUS_OK,
  HTTP_STATUS_CREATED,
  HTTP_STATUS_ACEPTED,
  MESSAGE_ADD_ERROR,
  MESSAGE_UPDATE_ERROR
} from '@Const/const';

const initialState = {
  isLoading: false,
  ppmDocumentsList: [],
  ppmDocumentsDataGrid: [],
  jobAreasProcedurePhases: [],
  areasFilter: [],
  procedureManagementActions: [],
  documentType: [],
  customerLetterType: [],
  currentPPMDocument: {}
};

const phaseService = PhaseService.getInstance();
const service = PPMDocumentService.getInstance();
const jobAreaService = JobAreaService.getInstance();

export const ppmDocumentslice = createSlice({
  name: 'ppmDocuments',
  initialState,
  reducers: {
    setPPMDocuments: (state, action) => {
      state.ppmDocumentsList = action.payload;
    },
    setPPMDocumentsDataGrid: (state, action) => {
      state.ppmDocumentsDataGrid = action.payload;
    },
    setJobAreasProcedurePhases: (state, action) => {
      state.jobAreasProcedurePhases = action.payload;

      const proceduresMap = state.jobAreasProcedurePhases.map((item) => [
        item.joaId,
        item
      ]);
      const procedureMapArray = new Map(proceduresMap);

      state.areasFilter = [...procedureMapArray.values()];
    },
    setProcedureManagementActions: (state, action) => {
      state.procedureManagementActions = action.payload;
    },
    setDocumentType: (state, action) => {
      state.documentType = action.payload;
    },
    setCustomerLetterType: (state, action) => {
      state.customerLetterType = action.payload;
    },
    setCurrentPPMDocument: (state, action) => {
      state.currentPPMDocument = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    }
  }
});

export const {
  setPPMDocuments,
  setPPMDocumentsDataGrid,
  setJobAreasProcedurePhases,
  setProcedureManagementActions,
  setDocumentType,
  setCustomerLetterType,
  setCurrentPPMDocument,
  setIsLoading
} = ppmDocumentslice.actions;

export const fetchPPMDocuments = () => async (dispatch) => {
  try {
    dispatch(setIsLoading(true));
    const response = await service.getPPMDocuments();

    if (response.status === HTTP_STATUS_OK) {
      const transformData = response.data.map((item) => ({
        id: item.ppmdId,
        area: item.procedureManagementAction.jobAreaProcedurePhase?.joaName,
        phase: item.procedureManagementAction.jobAreaProcedurePhase?.prphName,
        action: item.procedureManagementAction.prmaName,
        documentType: item.typeDocument.tydoName,
        name: item.ppmdName,
        letterType: item.customerLetterType.typeDocument.tydoName,
        invoice: item.ppmdInvoice ? 'Sí' : 'No'
      }));

      dispatch(setPPMDocuments(response.data));
      dispatch(setPPMDocumentsDataGrid(transformData));
      dispatch(setIsLoading(false));

      return transformData;
    }

    return [];
  } catch (error) {
    return [];
  }
};

export const fetchJobAreas = () => async () => {
  try {
    const response = await jobAreaService.getJobAreas();

    return response.map((item) => item.joaName);
  } catch (error) {
    return [];
  }
};

export const fetchProcedurePhases = () => async () => {
  try {
    const response = await phaseService.procedurePhasesService();

    return response.map((item) => item.prphName);
  } catch (error) {
    return [];
  }
};

export const fetchJobAreasProcedurePhases = () => async (dispatch) => {
  try {
    const response = await phaseService.jobAreasProcedurePhasesService();
    dispatch(setJobAreasProcedurePhases(response));
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchProcedureManagementActions = () => async (dispatch) => {
  try {
    const response = await service.getProcedureManagementActions();

    if (response.status === HTTP_STATUS_OK) {
      const transformData = response.data.map((item) => item.prmaName);

      dispatch(setProcedureManagementActions(response.data));
      return transformData;
    }

    return [];
  } catch (error) {
    return [];
  }
};

export const fetchDocumentType = () => async (dispatch) => {
  try {
    const response = await service.getDocumentType();

    if (response.status === HTTP_STATUS_OK) {
      const transformData = response.data.map((item) => item.tydoName);

      dispatch(setDocumentType(response.data));
      return transformData;
    }

    return [];
  } catch (error) {
    return [];
  }
};

export const fetchCustomerLetterType = () => async (dispatch) => {
  try {
    const response = await service.getCustomerLetterType();

    if (response.status === HTTP_STATUS_OK) {
      const transformData = response.data.map((item) => item.cultName);

      dispatch(setCustomerLetterType(response.data));
      return transformData;
    }

    return [];
  } catch (error) {
    return [];
  }
};

export const createPPMDocument = (data) => async () => {
  try {
    const response = await service.createPPMDocument(data);

    if (response.status === HTTP_STATUS_CREATED) {
      return response.data;
    }

    return MESSAGE_ADD_ERROR
  } catch (error) {
    return MESSAGE_ADD_ERROR
  }
};

export const updatePPMDocument = (id, data) => async () => {
  try {
    const response = await service.updatePPMDocument(id, data);

    if (
      response.status === HTTP_STATUS_OK ||
      response.status === HTTP_STATUS_ACEPTED
    ) {
      return response.data;
    }

    return MESSAGE_UPDATE_ERROR
  } catch (error) {
    return MESSAGE_UPDATE_ERROR
  }
};

export default ppmDocumentslice.reducer;
