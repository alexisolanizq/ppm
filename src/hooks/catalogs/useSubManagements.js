import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import {
  MESSAGE_ADD_SUCCESS,
  MESSAGE_UPDATE_SUCCESS,
  COMBO_REQUIRED,
  TYPE_SUCCESS_MESSAGE,
  VALUE_OBJECT,
  TYPE_ERROR_MESSAGE
} from '@Const/const';
import {
  fetchManagementsList,
  fetchSubManagements,
  setCurrentSubManagement,
  createSubManagement,
  updateSubManagement
} from '@Redux/catalogs/subManagementSlice';


const useSubManagements = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [isLoadingTable, setIsLoadingTable] = useState(false);
  const [alertMessage, setAlertMessage] = useState({});
  const [managementsList, setManagementsList] = useState([]);
  const [rowsDataGrid, setRowsDataGrid] = useState([]);
  const [areasList, setAreasList] = useState([]);
  const [allManagementsList, setAllManagementsList] = useState([]);

  const areas = useSelector((state) => state.managements.areasList);
  const managements = useSelector(
    (state) => state.submanagements.managementsList
  );
  const subManagements = useSelector(
    (state) => state.submanagements.subManagementsList
  );
  const subManagementsDataGrid = useSelector(
    (state) => state.submanagements.subManagementsDataGrid
  );
  const currentSubManagement = useSelector(
    (state) => state.submanagements.currentSubManagement
  );

  const {
    reset,
    register,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
    setIsUpdate(false);
    reset();
    setManagementsList([]);
  };

  const setSubManagement = (id) => {
    const currentSubManagementIndex = subManagements.findIndex(
      (item) => item.imsuId === id
    );

    if (currentSubManagementIndex >= 0) {
      reset();
      const subManagement = subManagements[currentSubManagementIndex];
      dispatch(setCurrentSubManagement(subManagement));
      setIsUpdate(true);
      setShow(true);
    }
  };

  const maganementsFilter = (id) =>
    managements.filter((management) => {
      if (management.jobArea.joaId === id) {
        return management;
      }
      return null;
    });

  const handdleAreaCombo = (e) => {
    if (e.target.value === '') {
      setManagementsList([]);
    }

    setManagementsList(maganementsFilter(parseInt(e.target.value, 10)));
  };

  const getSubManagement = async () => {
    setIsLoadingTable(true);
    const dataRows = await dispatch(fetchSubManagements());
    setRowsDataGrid(dataRows);
    setIsLoadingTable(false);
  };

  const insertSubManagement = async (payload) => {
    const response = await dispatch(createSubManagement(payload));

    if (typeof response === VALUE_OBJECT) {
      setAlertMessage({
        isOpen: true,
        message: MESSAGE_ADD_SUCCESS,
        type: TYPE_SUCCESS_MESSAGE
      });

      getSubManagement();
      return;
    }

    setAlertMessage({
      isOpen: true,
      message: response,
      type: TYPE_ERROR_MESSAGE
    });
  };

  const onSubmit = (data) => {
    let isOk = true;

    handleClose();

    if (data.area === '0') {
      setError('area', COMBO_REQUIRED);
      isOk = false;
    }
    if (data.impiAddress === '0') {
      setError('impiAddress', COMBO_REQUIRED);
      isOk = false;
    }

    if (!isOk) return;

    const currentManagementIndex = managements.findIndex(
      (management) => management.imadId === parseInt(data.impiAddress, 10)
    );

    if (currentManagementIndex >= 0) {
      const management = managements[currentManagementIndex];
      const {
        imadId,
        imadName,
        imadStatus,
        jobArea: { joaId, joaName }
      } = management;

      const payload = {
        imsuName: data.name,
        imsuStatus: true,
        impiAddress: {
          imadId,
          imadName,
          imadStatus,
          jobArea: {
            joaId,
            joaName
          }
        }
      };

      insertSubManagement(payload);
    }
  };

  const editSubManagement = async (id, payload) => {
    const response = await dispatch(updateSubManagement(id, payload));

    if (typeof response === VALUE_OBJECT) {
      setAlertMessage({
        isOpen: true,
        message: MESSAGE_UPDATE_SUCCESS,
        type: TYPE_SUCCESS_MESSAGE
      });

      getSubManagement();
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

    if (data.name !== '') {
      const { name, status } = data;
      const {
        imsuId,
        impiAddress: {
          imadId,
          imadName,
          imadStatus,
          jobArea: { joaId, joaName }
        }
      } = currentSubManagement;

      const payload = {
        imsuId,
        imsuName: name,
        imsuStatus: status,
        impiAddress: {
          imadId,
          imadName,
          imadStatus,
          jobArea: {
            joaId,
            joaName
          }
        }
      };

      editSubManagement(imsuId, payload);
    }
  };

  const initialState = async () => {
    getSubManagement();

    const areasDataList = await dispatch(fetchJobAreas());
    setAreasList(areasDataList);

    const managementsDataList = await dispatch(fetchManagementsList());
    setAllManagementsList(managementsDataList);
  };

  return {
    initialState,
    //! List
    areasList,
    allManagementsList,
    subManagementsDataGrid,
    rowsDataGrid,
    setRowsDataGrid,
    setSubManagement,
    isLoadingTable,
    //! Modal
    show,
    handleShow,
    handleClose,
    //! Alert
    alertMessage,
    setAlertMessage,
    //! Create
    areas,
    managementsList,
    handdleAreaCombo,
    onSubmit,
    //! Update
    isUpdate,
    onUpdate,
    currentSubManagement,
    //! useForm
    register,
    handleSubmit,
    errors
  };
};

export default useSubManagements;
