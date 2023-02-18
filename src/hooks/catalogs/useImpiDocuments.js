import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getImpiDocumentsData,
  addImpiDocumentsData,
  createDocumentNotification,
  createDocumentRemainder,
  updateImpiDocumentsData,
  fetchReminders,
  fetchNotifications,
  fetchTempFolders
} from '@Redux/catalogs/impiDocumentsSlice';
import { getProcessesData } from '@Redux/catalogs/processesManagmentSlice';
import { fetchProcedurePhases } from '@Redux/catalogs/customerDocumentsSlice';
import { fetchAreas } from '@Redux/catalogs/areaSlice';
import {
  HTTP_STATUS_CREATED,
  HTTP_STATUS_OK,
  MESSAGE_ADD_ERROR,
  MESSAGE_ADD_SUCCESS,
  MESSAGE_UPDATE_ERROR,
  MESSAGE_UPDATE_SUCCESS,
  TYPE_SUCCESS_MESSAGE,
  TYPE_ERROR_MESSAGE
} from '@Const/const';

const useImpiDocuments = () => {
  const dispatch = useDispatch();
  const areasList = useSelector(({ areas }) => areas.areas);
  const impiDocumentsListData = useSelector(
    ({ impiDocuments }) => impiDocuments.list
  );

  const managmentActions = useSelector(
    ({ processesManagment }) => processesManagment.processes
  );
  const tempFolders = useSelector(
    ({ tempFolder }) => tempFolder.tempRepoFolders
  );
  const reminders = useSelector(({ impiDocuments }) => impiDocuments.reminders);
  const notifications = useSelector(
    ({ impiDocuments }) => impiDocuments.notifications
  );
  const [rowsDataGrid, setRowsDataGrid] = useState([]);
  const [notificationData, setNotificationData] = useState([]);
  const [remainderData, setRemainderData] = useState([]);
  const [modalShow, setmodalShow] = useState(false);
  const [modalNotificationShow, setmodalNotificationShow] = useState(false);
  const [modalRemainderShow, setmodalRemainderShow] = useState(false);
  const [errors, setErrors] = useState(false);
  const [update, setUpdate] = useState(false);
  const [alertMessage, setAlertMessage] = useState({});
  const [procedurePhases, setProcedurePhases] = useState([]);
  const [impiId, setImpiId] = useState(null);
  const [impiDocument, setImpiDocument] = useState({
    jobArea: '',
    procedurePhase: '',
    gestion: '',
    time: '',
    lapse: '',
    tmpFolder: '',
    name: '',
    businessDay: false,
    acronym: '',
    status: true
  });

  const handleShow = () => setmodalShow(true);
  const cleanImpiDocument = () =>
    setImpiDocument({
      jobArea: '',
      procedurePhase: '',
      gestion: '',
      time: '',
      lapse: '',
      tmpFolder: '',
      name: '',
      businessDay: false,
      status: true
    });
  const getErrorValue = (inputError) => !!(errors && inputError === '');
  const getHelperText = (inputError, resultA, resultB) => {
    if (errors && (inputError === '' || inputError === null)) {
      return resultA;
    }
    return resultB;
  };
  const updateModalNotificationShow = (prop, e, row) => {
    setmodalNotificationShow(prop);
    setUpdate(e);
    const notificationsFilter = notifications.filter(
      (item) => item.impiDocument.id === row.id
    );
    if (notificationsFilter) {
      setNotificationData(notificationsFilter);
    }
  };
  const updateModalRemainderShow = (prop, e, row) => {
    setmodalRemainderShow(prop);
    setUpdate(e);
    const remindersFilter = reminders.filter(
      (item) => item.impiDocument.id === row.id
    );
    if (remindersFilter) {
      setRemainderData(remindersFilter);
    }
  };
  const handleNotificationData = (index, prop) => (e) => {
    const updatedArray = [...notificationData];
    updatedArray[index][prop] = e.target.value;
    setNotificationData(updatedArray);
  };
  const handleRemainderData = (index, prop) => (e) => {
    const updatedArray = [...remainderData];
    updatedArray[index][prop] = e.target.value;
    setRemainderData(updatedArray);
  };
  const deleteNotification = (index) => {
    setNotificationData([
      ...notificationData.slice(0, index),
      ...notificationData.slice(index + 1, notificationData.length)
    ]);
  };
  const deleteRemainder = (index) => {
    setNotificationData([
      ...remainderData.slice(0, index),
      ...remainderData.slice(index + 1, remainderData.length)
    ]);
  };
  const addNotification = () => {
    setNotificationData([
      ...notificationData,
      {
        id: notificationData.length,
        time: '',
        timeLimit: '',
        user: ''
      }
    ]);
  };
  const addRemainder = () => {
    setRemainderData([
      ...remainderData,
      {
        id: remainderData.length,
        time: '',
        timeLimit: ''
      }
    ]);
  };

  const createNotification = async () => {
    try {
      const response = await dispatch(createDocumentNotification());
      if (response.status === HTTP_STATUS_CREATED) {
        setAlertMessage({
          isOpen: true,
          message: MESSAGE_UPDATE_SUCCESS,
          type: TYPE_SUCCESS_MESSAGE
        });
        setmodalNotificationShow(false);
      } else {
        setAlertMessage({
          isOpen: true,
          message: MESSAGE_UPDATE_ERROR,
          type: TYPE_ERROR_MESSAGE
        });
      }
      return response;
    } catch (error) {
      return error;
    }
  };
  const createRemainder = async () => {
    try {
      const response = await dispatch(createDocumentRemainder());
      if (response.status === HTTP_STATUS_CREATED) {
        setAlertMessage({
          isOpen: true,
          message: MESSAGE_ADD_SUCCESS,
          type: TYPE_SUCCESS_MESSAGE
        });
        setmodalNotificationShow(false);
      } else {
        setAlertMessage({
          isOpen: true,
          message: MESSAGE_ADD_ERROR,
          type: TYPE_ERROR_MESSAGE
        });
      }
      return response;
    } catch (error) {
      return error;
    }
  };
  const getImpiDocumentsListData = async () => {
    try {
      const response = await dispatch(getImpiDocumentsData());
      dispatch(getProcessesData());
      dispatch(fetchTempFolders());
      dispatch(fetchAreas());
      dispatch(fetchReminders());
      dispatch(fetchNotifications());
      setRowsDataGrid(response);
      return response;
    } catch (error) {
      return error;
    }
  };

  const getPhasesListData = async (id) => {
    try {
      const response = await dispatch(fetchProcedurePhases(id));
      setProcedurePhases(response);
      return response;
    } catch (error) {
      setProcedurePhases([]);
      return error;
    }
  };

  const updateModalShow = (prop, e, row) => {
    setmodalShow(prop);
    setUpdate(e);
    if (e) {
      getPhasesListData(
        row.procedureManagementAction.jobAreaProcedurePhase.joaId
      );
      setImpiDocument({
        jobArea: row.procedureManagementAction.jobAreaProcedurePhase.joaId,
        procedurePhase:
          row.procedureManagementAction.jobAreaProcedurePhase.prphId,
        gestion: row.procedureManagementAction.prmaId,
        time: row.imdoExpirationQuantity,
        lapse: 1,
        tmpFolder: row.tmpRepoFolder.tmrfId,
        businessDay: row.imdoBusinessDay,
        name: row.imdoName,
        acronym: row.imdoAcronym,
        status: row.imdoStatus
      });
      setImpiId(row.imdoId);
    }
  };
  const createImpiDocument = async () => {
    try {
      const {
        jobArea,
        procedurePhase,
        gestion,
        time,
        lapse,
        name,
        businessDay,
        tmpFolder,
        acronym,
        status
      } = impiDocument;
      const tmpFolderSelect = tempFolders.find(
        (item) => item.tmrfId === tmpFolder
      );
      if (
        jobArea === '' ||
        procedurePhase === '' ||
        gestion === '' ||
        time === '' ||
        lapse === '' ||
        name === '' ||
        tmpFolder === ''
      ) {
        setErrors(true);
        return false;
      }
      setErrors(false);
      const data = {
        procedureManagementAction: {
          prmaId: gestion
        },
        imdoType: 'Oficio IMPI',
        imdoName: name,
        imdoExpiration: false,
        imdoBusinessDay: businessDay,
        imdoExpirationQuantity: parseInt(time, 10),
        imdoExpirationPeriodSecond: false,
        tmpRepoFolder: {
          tmrfId: tmpFolder
        },
        imdoAcronym: acronym,
        imdoTag: `${tmpFolderSelect.tmrfName} - ${acronym}`,
        imdoStatus: status,
        expirationUnit: {
          opcgId: 1,
          cagId: 2
        }
      };
      const response = await dispatch(addImpiDocumentsData(data));
      if (response.status === HTTP_STATUS_CREATED) {
        setAlertMessage({
          isOpen: true,
          message: MESSAGE_ADD_SUCCESS,
          type: TYPE_SUCCESS_MESSAGE
        });
        getImpiDocumentsListData();
        updateModalShow(false);
      } else {
        setAlertMessage({
          isOpen: true,
          message: MESSAGE_ADD_ERROR,
          type: TYPE_ERROR_MESSAGE
        });
      }
      return response;
    } catch (error) {
      return error;
    }
  };
  const editImpiDocument = async () => {
    try {
      const {
        jobArea,
        procedurePhase,
        gestion,
        time,
        lapse,
        name,
        businessDay,
        tmpFolder,
        acronym,
        status
      } = impiDocument;
      const tmpFolderSelect = tempFolders.find(
        (item) => item.tmrfId === tmpFolder
      );
      if (
        jobArea === '' ||
        procedurePhase === '' ||
        gestion === '' ||
        time === '' ||
        lapse === '' ||
        name === '' ||
        tmpFolder === ''
      ) {
        setErrors(true);
        return false;
      }
      setErrors(false);
      const data = {
        imdoId: impiId,
        procedureManagementAction: {
          prmaId: gestion
        },
        imdoType: 'Oficio IMPI',
        imdoName: name,
        imdoExpiration: false,
        imdoBusinessDay: businessDay,
        imdoExpirationQuantity: parseInt(time, 10),
        imdoExpirationPeriodSecond: false,
        tmpRepoFolder: {
          tmrfId: tmpFolder
        },
        imdoAcronym: acronym,
        imdoTag: `${tmpFolderSelect.tmrfName} - ${acronym}`,
        imdoStatus: status,
        expirationUnit: {
          opcgId: 1,
          cagId: 2
        }
      };
      const response = await dispatch(updateImpiDocumentsData(impiId, data));
      if (response.status === HTTP_STATUS_OK) {
        setAlertMessage({
          isOpen: true,
          message: MESSAGE_UPDATE_SUCCESS,
          type: TYPE_SUCCESS_MESSAGE
        });
        const responseD = await getImpiDocumentsListData();
        setRowsDataGrid(responseD);
        updateModalShow(false);
      } else {
        setAlertMessage({
          isOpen: true,
          message: MESSAGE_UPDATE_ERROR,
          type: TYPE_ERROR_MESSAGE
        });
      }
      return response;
    } catch (error) {
      return error;
    }
  };
  const handleImpiDocument = async (prop, e) => {
    setImpiDocument({ ...impiDocument, [prop]: e });
  };

  return {
    impiDocumentsListData,
    modalShow,
    modalNotificationShow,
    modalRemainderShow,
    impiDocument,
    update,
    alertMessage,
    rowsDataGrid,
    areasList,
    errors,
    procedurePhases,
    managmentActions,
    tempFolders,
    notificationData,
    remainderData,
    getErrorValue,
    getHelperText,
    handleNotificationData,
    cleanImpiDocument,
    editImpiDocument,
    getPhasesListData,
    handleShow,
    setRowsDataGrid,
    setAlertMessage,
    updateModalShow,
    updateModalNotificationShow,
    updateModalRemainderShow,
    setmodalShow,
    setmodalNotificationShow,
    setmodalRemainderShow,
    getImpiDocumentsListData,
    handleImpiDocument,
    createImpiDocument,
    createNotification,
    addNotification,
    deleteNotification,
    handleRemainderData,
    createRemainder,
    addRemainder,
    deleteRemainder
  };
};
export default useImpiDocuments;
