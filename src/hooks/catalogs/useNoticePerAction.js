import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProcedurePhases } from '@Redux/catalogs/customerDocumentsSlice';
import {
  getNotificationsData,
  addNotificationsData,
  updateNotificationsData,
  fetchActionNotification,
  fetchCoresponsible,
  addActionsNotificationRecipient
} from '@Redux/catalogs/noticePerActionSlice';
import { fetchAreas } from '@Redux/catalogs/areaSlice';
import { getProcessesData } from '@Redux/catalogs/processesManagmentSlice';
import { MESSAGE_ADD_SUCCESS, MESSAGE_UPDATE_SUCCESS } from '@Const/const';
import { fetchUsers } from '@Redux/catalogs/authorityNotificationSlice';

const useNoticePerAction = () => {
  const dispatch = useDispatch();
  const [rowsDataGrid, setRowsDataGrid] = useState([]);
  const areasList = useSelector(({ areas }) => areas.areas);
  const userList = useSelector(({ users }) => users.usersDataList);
  const [notificationsListData, setNotificationsListData] = useState([]);
  const [modalShow, setmodalShow] = useState(false);
  const [update, setUpdate] = useState(false);
  const [managmentActions, setManagmentActions] = useState([]);
  const [actionNotificaiton, setActionNotificaiton] = useState([]);
  const [alertMessage, setAlertMessage] = useState({});
  const [coresponsible, setCoresponsible] = useState([]);
  const [procedurePhases, setProcedurePhases] = useState([]);
  const [notice, setNotice] = useState({
    jobArea: '',
    procedurePhase: '',
    gestion: '',
    descripcion: '',
    responsable: '',
    coresponsible: '',
    name: '',
    status: true
  });

  const handleShow = () => setmodalShow(true);
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
  const updateModalShow = async (prop, e, row) => {
    setmodalShow(prop);
    setUpdate(e);
    if (e) {
      setNotice({
        jobArea: row.procedureManagementAction.jobAreaProcedurePhase.joaId,
        procedurePhase:
          row.procedureManagementAction.jobAreaProcedurePhase.prphId,
        gestion: row.procedureManagementAction.prmaId,
        descripcion: row.acnoDescription,
        name: row.acnoName,
        status: row.acnoStatus,
        responsable: '',
        coresponsible: ''
      });
      getPhasesListData(
        row.procedureManagementAction.jobAreaProcedurePhase.joaId
      );
    }
  };
  const getCoresponsible = async (id) => {
    try {
      const response = await dispatch(fetchCoresponsible(id));
      setCoresponsible(response);
      return response;
    } catch (error) {
      return error;
    }
  };
  const createNotice = async () => {
    try {
      const dataNot = {
        acnoName: notice.name,
        acnoDescription: notice.descripcion,
        procedureManagementAction: {
          prmaId: notice.gestion
        },
        acnoStatus: notice.status
      };

      const response = await dispatch(addNotificationsData(dataNot));

      const coresponsibleSelect = coresponsible.find(
        (item) => item.coreId === notice.coresponsible
      );
      const data = {
        actionNotification: {
          acnoId: response.acnoId
        },
        user: {
          usrId: notice.responsable
        },
        coreUser: {
          usrId: coresponsibleSelect.user.usrId
        },
        acnrStatus: true
      };
      await dispatch(addActionsNotificationRecipient(data));
      updateModalShow(false, false, false);
      setAlertMessage(MESSAGE_ADD_SUCCESS);
      return response;
    } catch (error) {
      return error;
    }
  };
  const editNotice = async () => {
    try {
      const response = await dispatch(updateNotificationsData(notice));
      setAlertMessage(MESSAGE_UPDATE_SUCCESS);
      return response;
    } catch (error) {
      return error;
    }
  };
  const handleNotice = async (prop, e) => {
    setNotice({ ...notice, [prop]: e });
  };

  const getNotificationsListData = async () => {
    try {
      dispatch(fetchAreas());
      const responseProcess = await dispatch(getProcessesData());
      const response = await dispatch(getNotificationsData());
      const responseActionNotificaiton = await dispatch(
        fetchActionNotification()
      );
      await dispatch(fetchUsers());
      setManagmentActions(responseProcess);
      setNotificationsListData(response);
      setRowsDataGrid(response);
      setActionNotificaiton(responseActionNotificaiton);
      return response;
    } catch (error) {
      return error;
    }
  };
  return {
    notificationsListData,
    managmentActions,
    modalShow,
    notice,
    update,
    rowsDataGrid,
    userList,
    procedurePhases,
    areasList,
    alertMessage,
    coresponsible,
    actionNotificaiton,
    handleShow,
    setRowsDataGrid,
    getPhasesListData,
    updateModalShow,
    setmodalShow,
    getNotificationsListData,
    handleNotice,
    createNotice,
    editNotice,
    setAlertMessage,
    getCoresponsible
  };
};
export default useNoticePerAction;
