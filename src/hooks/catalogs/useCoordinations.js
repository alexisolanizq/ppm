import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchCoordinationsData,
  addCoordinationsData,
  updateCoordinationsData
} from '@Redux/catalogs/coordinationsSlice';
import { fetchAreas } from '@Redux/catalogs/areaSlice';
import {
  HTTP_STATUS_CREATED,
  MESSAGE_ADD_ERROR,
  MESSAGE_ADD_SUCCESS,
  MESSAGE_UPDATE_ERROR,
  MESSAGE_UPDATE_SUCCESS,
  TYPE_SUCCESS_MESSAGE,
  TYPE_ERROR_MESSAGE
} from '@Const/const';
import { useManagementsActiveService } from '@Services/managements/useManagementService';

const DEFAULT_VALUES = {
  jobArea: '',
  managment: '',
  subManagment: '',
  name: '',
  status: true
};

const useCoordinations = () => {
  const dispatch = useDispatch();
  const areasList = useSelector(({ areas }) => areas.areas);
  const { data: managementList } = useManagementsActiveService();
  const coordinationsListData = useSelector(
    ({ coordinations }) => coordinations.coordinations
  );
  const subManagementsList = useSelector(
    ({ submanagements }) => submanagements.subManagementsList
  );
  const [rowsDataGrid, setRowsDataGrid] = useState([]);
  const [modalShow, setmodalShow] = useState(false);
  const [update, setUpdate] = useState(false);
  const [alertMessage, setAlertMessage] = useState({});
  const [errors, setErrors] = useState(false);
  const [coordination, setCoordination] = useState(DEFAULT_VALUES);
  const clearFormulario = () => {
    setCoordination(DEFAULT_VALUES);
    setmodalShow(false);
    setUpdate(false);
  };
  const getErrorValue = (inputError) => !!(errors && inputError === '');
  const getHelperText = (inputError, resultA, resultB) => {
    if (errors && (inputError === '' || inputError === null)) {
      return resultA;
    }
    return resultB;
  };
  const [coordinationId, setCoordinationId] = useState(null);
  const handleShow = () => setmodalShow(true);
  const getCoordinationsListData = async (refresh = false) => {
    try {
      const response = await dispatch(fetchCoordinationsData());
      if (!refresh) {
        dispatch(fetchAreas());
      }
      setRowsDataGrid(response);
      return true;
    } catch (error) {
      return error;
    }
  };
  const updateModalShow = (prop, e, row) => {
    setmodalShow(prop);
    setUpdate(e);
    if (e) {
      setCoordination({
        jobArea: row.impiSubAddress.impiAddress.jobArea.joaId,
        managment: row.impiSubAddress.impiAddress.imadId,
        subManagment: row.impiSubAddress.imsuId,
        name: row.imcoName,
        status: row.imcoStatus
      });
      setCoordinationId(row.imcoId);
    }
  };
  const createCoordination = async () => {
    try {
      const { jobArea, managment, subManagment, name } = coordination;
      if (
        jobArea === '' ||
        managment === '' ||
        subManagment === '' ||
        name === ''
      ) {
        setErrors(true);
        return false;
      }

      const data = {
        imcoName: coordination.name,
        imcoStatus: coordination.status,
        impiSubAddress: {
          imsuId: coordination.subManagment
        }
      };

      const response = await dispatch(addCoordinationsData(data));
      if (response.status === HTTP_STATUS_CREATED) {
        setAlertMessage({
          isOpen: true,
          message: MESSAGE_ADD_SUCCESS,
          type: TYPE_SUCCESS_MESSAGE
        });
        getCoordinationsListData(true);
        clearFormulario();
        updateModalShow(false);
      } else {
        setAlertMessage({
          isOpen: true,
          message: MESSAGE_ADD_ERROR,
          type: TYPE_ERROR_MESSAGE
        });
      }
      return true;
    } catch (error) {
      return error;
    }
  };
  const editCoordination = async () => {
    try {
      const data = {
        imcoId: coordinationId,
        imcoName: coordination.name,
        imcoStatus: coordination.status,
        impiSubAddress: {
          imsuId: coordination.subManagment
        }
      };
      const response = await dispatch(
        updateCoordinationsData(coordinationId, data)
      );
      if (response.status === 202) {
        setAlertMessage({
          isOpen: true,
          message: MESSAGE_UPDATE_SUCCESS,
          type: TYPE_SUCCESS_MESSAGE
        });
        getCoordinationsListData(true);
        clearFormulario();
        updateModalShow(false);
      } else {
        setAlertMessage({
          isOpen: true,
          message: MESSAGE_UPDATE_ERROR,
          type: TYPE_ERROR_MESSAGE
        });
      }
      return true;
    } catch (error) {
      return error;
    }
  };
  const handleCoordination = async (prop, e) => {
    setCoordination({ ...coordination, [prop]: e });
  };

  return {
    errors,
    rowsDataGrid,
    coordinationsListData,
    modalShow,
    coordination,
    update,
    managementList,
    areasList,
    subManagementsList,
    alertMessage,
    setRowsDataGrid,
    setAlertMessage,
    handleShow,
    updateModalShow,
    setmodalShow,
    getCoordinationsListData,
    handleCoordination,
    createCoordination,
    editCoordination,
    getErrorValue,
    getHelperText,
    clearFormulario
  };
};
export default useCoordinations;
