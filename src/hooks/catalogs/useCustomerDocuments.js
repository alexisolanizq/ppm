import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import { MESSAGE_ADD_SUCCESS, 
  MESSAGE_UPDATE_SUCCESS, 
  VALUE_OBJECT,
  TYPE_ERROR_MESSAGE,
  TYPE_SUCCESS_MESSAGE 
} from '@Const/const';
import {
  fetchCustomerDocuments,
  fetchAreas,
  fetchProcedurePhases,
  fetchChargeTypes,
  fetchExpirationUnits,
  updateCustomerDocument,
  addCustomerDocument
} from '@Redux/catalogs/customerDocumentsSlice';

const useCustomerDocuments = () => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [isLoadingForm, setIsLoadingForm] = useState(true);
  const [isLoadingTable, setIsLoadingTable] = useState(false);
  const [alertMessage, setAlertMessage] = useState({});
  const [customerDocumentCurrent, setCustomerDocumentCurrent] = useState({});
  const [rowsDataGrid, setRowsDataGrid] = useState([]);

  const [jobAreas, setJobAreas] = useState([]);
  const [procedurePhases, setProcedurePhases] = useState([]);
  const [chargeTypes, setChargeTypes] = useState([]);
  const [expirationUnits, setExpirationUnits] = useState([]);

  const customerDocumentsList = useSelector(
    (state) => state.customerDocuments.customerDocumentsList
  );
  const customerDocumentsDataGrid = useSelector(
    (state) => state.customerDocuments.customerDocumentsDataGrid
  );

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const handleShow = () => {
    setShow(true);
    setIsLoadingForm(false);
  };

  const handleClose = () => {
    setIsLoadingForm(true);
    setShow(false);
    setIsUpdate(false);
    reset();
  };

  const getInfoProperty = (property) => (isUpdate ? property ?? '' : '');

  const setCustomerDocument = async (id) => {
    const currentCustomerDocumentIndex = customerDocumentsList.findIndex(
      (item) => item.cdppId === id
    );

    if (currentCustomerDocumentIndex >= 0) {
      const customerDocument =
        customerDocumentsList[currentCustomerDocumentIndex];

      setCustomerDocumentCurrent(customerDocument);

      const procedurePhasesList = await dispatch(
        fetchProcedurePhases(customerDocument.jobArea.joaId)
      );

      setProcedurePhases(procedurePhasesList);
      setIsUpdate(true);
      handleShow();
    }
  };

  const handdleAreaCombo = async (event) => {
    const {
      target: { value }
    } = event;

    const procedurePhasesList = await dispatch(fetchProcedurePhases(value));

    setProcedurePhases(procedurePhasesList);
  };

  const getCustomerDocuments = async () => {
    setIsLoadingTable(true);

    const dataRows = await dispatch(fetchCustomerDocuments());

    setRowsDataGrid(dataRows);
    setIsLoadingTable(false);
  };

  const createUpdateInitialState = async () => {
    const [
      { value: areasList },
      { value: chargeTypesList },
      { value: expirationUnitsList }
    ] = await Promise.allSettled([
      dispatch(fetchAreas()),
      dispatch(fetchChargeTypes()),
      dispatch(fetchExpirationUnits())
    ]);

    setJobAreas(areasList);
    setChargeTypes(chargeTypesList);
    setExpirationUnits(expirationUnitsList);
  };

  const insertCustomerDocument = async (payload) => {
    const response = await dispatch(addCustomerDocument(payload));

    if (typeof response === VALUE_OBJECT) {
      return response;
    }

    setAlertMessage({
      isOpen: true,
      message: response,
      type: TYPE_ERROR_MESSAGE
    });

    return null;
  };

  const editCustomerDocument = async (id, payload) => {
    const response = await dispatch(updateCustomerDocument(id, payload));

    if (typeof response === VALUE_OBJECT) {
      return response;
    }

    setAlertMessage({
      isOpen: true,
      message: response,
      type: TYPE_ERROR_MESSAGE
    });

    return null;
  };

  const onInsert = async (payload) => {
    const customerDocument = await insertCustomerDocument(payload);

    if (customerDocument) {
      setAlertMessage({
        isOpen: true,
        message: MESSAGE_ADD_SUCCESS,
        type: TYPE_SUCCESS_MESSAGE
      });

      getCustomerDocuments();
    }
  };

  const onUpdate = async (customerDocumentId, payload) => {
    const customerDocument = await editCustomerDocument(
      customerDocumentId,
      payload
    );

    if (customerDocument) {
      setAlertMessage({
        isOpen: true,
        message: MESSAGE_UPDATE_SUCCESS,
        type: TYPE_SUCCESS_MESSAGE
      });

      getCustomerDocuments();
    }
  };

  const onSubmit = (data) => {
    handleClose();

    const {
      name,
      tag,
      status,
      presentationQuantity,
      expirationUnit,
      chargeType,
      area,
      phase
    } = data;

    const payload = {
      cdppName: name,
      cdppTag: tag,
      cdppStatus: isUpdate ? status === 'true' : true,
      cdppPresentationQuantity: presentationQuantity,
      expirationUnit: {
        opcgId: expirationUnit,
        cagId: 1
      },
      chargeType: {
        opcgId: chargeType,
        cagId: 4
      },
      jobArea: {
        joaId: area
      },
      jobAreaProcedurePhase: {
        jappId: phase
      }
    };

    if (isUpdate) {
      const { cdppId } = customerDocumentCurrent;

      onUpdate(cdppId, { ...payload, cdppId });

      return;
    }

    onInsert(payload);
  };

  const initialState = async () => {
    await getCustomerDocuments();
    createUpdateInitialState();
  };

  return {
    initialState,
    //! List
    isLoadingTable,
    customerDocumentsDataGrid,
    rowsDataGrid,
    setRowsDataGrid,
    setCustomerDocument,
    //! Modal
    show,
    handleShow,
    handleClose,
    //! Alert
    alertMessage,
    setAlertMessage,
    //! Create
    jobAreas,
    procedurePhases,
    chargeTypes,
    expirationUnits,
    handdleAreaCombo,
    onSubmit,
    //! Update
    isUpdate,
    customerDocumentCurrent,
    //! useForm
    register,
    handleSubmit,
    errors,
    getInfoProperty,
    isLoadingForm
  };
};

export default useCustomerDocuments;
