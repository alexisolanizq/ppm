import { createSlice } from '@reduxjs/toolkit';

import SyncfusionService from '@Services/machoteDesign/syncfusionService';
import LegalFigureService from '@Services/legalFigures/LegalFigureService';
import PPMDocumentService from '@Services/ppmDocuments/ppmDocumentsService';
import MachoteDesignService from '@Services/machoteDesign/MachoteDesignService';
import DocumentEditorService from '@Services/machoteDesign/documentEditorService';
import { 
  HTTP_STATUS_OK, 
  VALUE_YES, 
  VALUE_NO,
  MESSAGE_FILE_SAVE_SUCCESS,
  MESSAGE_FILE_NOT_SAVE,
  MESSAGE_FILE_SAVE_ERROR
} from '@Const/const';

const initialState = {
  ppmDocument: null,
  machotesDesignsList: []
};

const service = MachoteDesignService.getInstance();
const syncfusionService = SyncfusionService.getInstance();
const legalFigureService = LegalFigureService.getInstance();
const ppmDocumentService = PPMDocumentService.getInstance();
const documentEditorService = DocumentEditorService.getInstance();

export const machoteDesignSlice = createSlice({
  name: 'machoteDesign',
  initialState,
  reducers: {
    setPPMDocument: (state, action) => {
      state.ppmDocument = action.payload;
    },
    setMachoteDesigns: (state, action) => {
      state.machotesDesignsList = action.payload;
    }
  }
});

export const { setPPMDocument, setMachoteDesigns } = machoteDesignSlice.actions;

export const fetchPPMDocument = (idPPMDocument) => async (dispatch) => {
  try {
    const response = await ppmDocumentService.getPPMDocument(idPPMDocument);

    if (response.status === HTTP_STATUS_OK) {
      dispatch(setPPMDocument(response.data));
    }
  } catch (error) {
    dispatch(setPPMDocument(null));
  }
};

export const fetchPPMDocuments = () => async (dispatch) => {
  try {
    const response = await ppmDocumentService.getPPMDocuments();
    const transformData = response.map((item) => ({
      id: item.id,
      area: item.procedureManagementAction.jobAreaProcedurePhase.jobAreaName,
      phase:
        item.procedureManagementAction.jobAreaProcedurePhase.procedurePhaseName,
      action: item.procedureManagementAction.name,
      documentType: item.typeDocument.name,
      name: item.name,
      letterType: item.customerLetterType.name,
      invoice: item.invoice ? VALUE_YES : VALUE_NO
    }));

    dispatch(setMachoteDesigns(response));

    return transformData;
  } catch (error) {
    return [];
  }
};

export const fetchLegalFigures = (idArea) => async () => {
  try {
    const response = await legalFigureService.getLegalFigures();

    if (response) {
      return response.filter(
        (item) => item.jobAreaReferenceType.joaId === idArea
      );
    }

    return [];
  } catch (error) {
    return [];
  }
};

export const fetchLanguages = () => async () => {
  try {
    const response = await service.getLanguages();

    if (response.status === HTTP_STATUS_OK) {
      return response.data;
    }

    return [];
  } catch (error) {
    return [];
  }
};

export const fetchTemplateTypes = () => async () => {
  try {
    const response = await service.getTemplateTypes();

    if (response.status === HTTP_STATUS_OK) {
      return response.data;
    }

    return [];
  } catch (error) {
    return [];
  }
};

export const fetchAgents = () => async () => {
  try {
    const response = await service.getAgents();

    if (response.status === HTTP_STATUS_OK) {
      return response.data;
    }

    return [];
  } catch (error) {
    return [];
  }
};

export const fetchHolders = () => async () => {
  try {
    const response = await service.getHolders();

    if (response.status === HTTP_STATUS_OK) {
      return response.data;
    }

    return [];
  } catch (error) {
    return [];
  }
};

export const fetchGetFile = () => async () => {
  try {
    const response = await documentEditorService.getFile();

    if (response.status === HTTP_STATUS_OK) {
      return response.data;
    }

    return null;
  } catch (error) {
    return null;
  }
};

export const fetchGetFileSDT = (data) => async () => {
  try {
    const response = await syncfusionService.getFile(data);

    if (response.status === HTTP_STATUS_OK) {
      return response.data;
    }

    return null;
  } catch (error) {
    return null;
  }
};

export const fetchSendFile = (data) => async () => {
  try {
    const response = await documentEditorService.sendFile(data);

    if (response.status === HTTP_STATUS_OK) {
      return MESSAGE_FILE_SAVE_SUCCESS;
    }

    return MESSAGE_FILE_NOT_SAVE;
  } catch (error) {
    return MESSAGE_FILE_SAVE_ERROR;
  }
};

export default machoteDesignSlice.reducer;
