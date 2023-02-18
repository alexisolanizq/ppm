import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import {
  fetchCustomerLetterType,
  fetchDocumentType,
  fetchJobAreas,
  fetchJobAreasProcedurePhases,
  fetchPPMDocuments,
  fetchProcedureManagementActions,
  fetchProcedurePhases,
  setCurrentPPMDocument,
  createPPMDocument,
  updatePPMDocument
} from '@Redux/catalogs/ppmDocumentSlice';

import { 
  TYPE_SUCCESS_MESSAGE,
  VALUE_OBJECT,
  TYPE_ERROR_MESSAGE
 } from '@Const/const';

const usePPMDocuments = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [currentArea, setCurrentArea] = useState(0);
  const [alertMessage, setAlertMessage] = useState({});
  const [phases, setPhases] = useState([]);
  const [actions, setActions] = useState([]);
  const [rowsDataGrid, setRowsDataGrid] = useState([]);
  const [areasList, setAreasList] = useState([]);
  const [documentsTypeList, setDocumentsTypeList] = useState([]);
  const [customersLettersList, setCustomersLettersList] = useState([]);
  const [phasesList, setPhasesList] = useState([]);
  const [actionsDataList, setActionsList] = useState([]);

  const isLoading = useSelector((state) => state.ppmDocuments.isLoading);
  const areas = useSelector((state) => state.ppmDocuments.areasFilter);

  const ppmDocuments = useSelector(
    (state) => state.ppmDocuments.ppmDocumentsList
  );
  const ppmDocumentsDataGrid = useSelector(
    (state) => state.ppmDocuments.ppmDocumentsDataGrid
  );
  const jobAreasProcedurePhases = useSelector(
    (state) => state.ppmDocuments.jobAreasProcedurePhases
  );
  const procedureManagementActions = useSelector(
    (state) => state.ppmDocuments.procedureManagementActions
  );
  const documentType = useSelector((state) => state.ppmDocuments.documentType);
  const customerLetterType = useSelector(
    (state) => state.ppmDocuments.customerLetterType
  );
  const currentPPMDocument = useSelector(
    (state) => state.ppmDocuments.currentPPMDocument
  );

  const {
    reset,
    register,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const setPPMDocument = (id) => {
    const currentPPMDocumentIndex = ppmDocuments.findIndex(
      (item) => item.ppmdId === id
    );

    if (currentPPMDocumentIndex >= 0) {
      reset();
      const document = ppmDocuments[currentPPMDocumentIndex];
      dispatch(setCurrentPPMDocument(document));
      setShow(true);
      setIsUpdate(true);
    }
  };

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
    setIsUpdate(false);
    reset();
  };

  const phasesFilter = (id) =>
    jobAreasProcedurePhases.filter((item) => {
      if (item.joaId === id) {
        return item;
      }
      return null;
    });

  const actionsFilter = (id) =>
    procedureManagementActions.filter((item) => {
      if (
        item.jobAreaProcedurePhase.joaId === currentArea &&
        item.jobAreaProcedurePhase.prphId === id
      ) {
        return item;
      }
      return null;
    });

  const resetCombos = () => {
    reset({ phase: '0', action: '0' });
    setPhases([]);
    setActions([]);
  };

  const handdleAreaCombo = (e) => {
    resetCombos();

    setCurrentArea(parseInt(e.target.value, 10));
    setPhases(phasesFilter(parseInt(e.target.value, 10)));
  };

  const handdlePhaseCombo = (e) => {
    if (e.target.value === '0') {
      setActions([]);
    }

    setActions(actionsFilter(parseInt(e.target.value, 10)));
  };

  const getPPMDocuments = async () => {
    const dataRows = await dispatch(fetchPPMDocuments());
    setRowsDataGrid(dataRows);
  };

  const createUpdateInitialState = async () => {
    await dispatch(fetchJobAreasProcedurePhases());

    const [
      { value: areasDataList },
      { value: documentDataList },
      { value: customerLetterDataList },
      { value: phasesDataList },
      { value: managementActionsDataList }
    ] = await Promise.allSettled([
      dispatch(fetchJobAreas()),
      dispatch(fetchDocumentType()),
      dispatch(fetchCustomerLetterType(true)),
      dispatch(fetchProcedurePhases(false)),
      dispatch(fetchProcedureManagementActions())
    ]);

    setAreasList(areasDataList);
    setDocumentsTypeList(documentDataList);
    setCustomersLettersList(customerLetterDataList);
    setPhasesList(phasesDataList);
    setActionsList(managementActionsDataList);
  };

  const insertPPMDocument = async (payload) => {
    const response = await dispatch(createPPMDocument(payload));

    if (typeof response === VALUE_OBJECT) {
      setAlertMessage({
        isOpen: true,
        message: 'Documento PPM agregado exitosamente',
        type: TYPE_SUCCESS_MESSAGE
      });

      await getPPMDocuments();
      return;
    }

    setAlertMessage({
      isOpen: true,
      message: response,
      type: TYPE_ERROR_MESSAGE
    });
  };

  const onSubmit = (data) => {
    let validated = true;
    const message = 'Seleccione una opcion';
    const keys = ['area', 'phase', 'action', 'documentType', 'letterType'];

    handleClose();

    keys.forEach((key) => {
      if (data[key] === '0') {
        setError(key, message);
        validated = false;
      }
    });

    if (!validated) return;

    const currentActionIndex = procedureManagementActions.findIndex(
      (item) => item.prmaId === parseInt(data.action, 10)
    );

    if (currentActionIndex >= 0) {
      const selectedAction = procedureManagementActions[currentActionIndex];

      if (
        selectedAction.jobAreaProcedurePhase.joaId !==
          parseInt(data.area, 10) ||
        selectedAction.jobAreaProcedurePhase.prphId !== parseInt(data.phase, 10)
      )
        return;

      const { prmaId } = selectedAction;
      const {
        documentType: documentId,
        name,
        letterType: letterId,
        invoice
      } = data;

      const payload = {
        procedureManagementAction: {
          prmaId
        },
        typeDocument: {
          tydoId: parseInt(documentId, 10)
        },
        ppmdName: name,
        customerLetterType: {
          cultId: parseInt(letterId, 10)
        },
        ppmdInvoice: invoice,
        ppmdTag: name,
        ppmdStatus: true
      };

      insertPPMDocument(payload);
    }
  };

  const editPPMDocument = async (id, payload) => {
    const response = await dispatch(updatePPMDocument(id, payload));

    if (typeof response === VALUE_OBJECT) {
      setAlertMessage({
        isOpen: true,
        message: 'Documento PPM modificado exitosamente',
        type: TYPE_SUCCESS_MESSAGE
      });

      await getPPMDocuments();
      return;
    }

    setAlertMessage({
      isOpen: true,
      message: response,
      type: TYPE_ERROR_MESSAGE
    });
  };

  const onUpdate = (data) => {
    handleClose();

    if (data.name === '') return;

    const currentPPMDocumentIndex = ppmDocuments.findIndex(
      (item) => item.ppmdId === currentPPMDocument.ppmdId
    );

    if (currentPPMDocumentIndex >= 0) {
      const selectedPPMDocument = ppmDocuments[currentPPMDocumentIndex];

      const { name, invoice, status } = data;
      const {
        ppmdId,
        procedureManagementAction: { prmaId },
        typeDocument: { tydoId },
        customerLetterType: { cultId }
      } = selectedPPMDocument;

      const payload = {
        ppmdId,
        procedureManagementAction: {
          prmaId
        },
        typeDocument: {
          tydoId
        },
        customerLetterType: {
          cultId
        },
        ppmdName: name,
        ppmdInvoice: invoice,
        ppmdTag: name,
        ppmdStatus: status
      };

      editPPMDocument(ppmdId, payload);
    }
  };

  const initialState = () => {
    getPPMDocuments();
    createUpdateInitialState();
  };

  return {
    initialState,
    //! List
    areasList,
    documentsTypeList,
    customersLettersList,
    phasesList,
    actionsDataList,
    ppmDocumentsDataGrid,
    isLoading,
    rowsDataGrid,
    setRowsDataGrid,
    setPPMDocument,
    //! Modal
    show,
    handleShow,
    handleClose,
    //! Alert
    alertMessage,
    setAlertMessage,
    //! Create
    areas,
    phases,
    actions,
    documentType,
    customerLetterType,
    handdleAreaCombo,
    handdlePhaseCombo,
    currentPPMDocument,
    onSubmit,
    //! Update
    isUpdate,
    onUpdate,
    //! Form
    register,
    handleSubmit,
    setError,
    errors
  };
};

export default usePPMDocuments;
