import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAreaInvoiceConcept,
  fetchNoticesData,
  fetchNoticesInvoiceData,
  fetchNoticesJobAreaData,
  fetchNoticesUserData,
  fetchJobAreaUserData,
  addUserNoticeName,
  addInvoiceNoticeName,
  addJobAreaNoticeName,
  addNoticeNameData,
  updateNoticesData,
  updateJobAreaNoticeName,
  updateUserNoticeName,
  createAreaInvoiceConcept,
  fetchInvoicingConcepts,
  updateAreaInvoiceConcept
} from '@Redux/catalogs/noticeNameSlice';
import { getAreasTypes } from '@Redux/catalogs/processesManagmentSlice';
import { fetchAreas } from '@Redux/catalogs/areaSlice';
import {
  HTTP_STATUS_OK,
  MESSAGE_ADD_ERROR,
  MESSAGE_ADD_SUCCESS,
  MESSAGE_UPDATE_ERROR,
  MESSAGE_UPDATE_SUCCESS,
  TYPE_SUCCESS_MESSAGE,
  TYPE_ERROR_MESSAGE
} from '@Const/const';

const DEFAULT_VALUES = {
  jobArea: '',
  name: '',
  responsable: '',
  invoiceConcept: '',
  status: true,
  charge: false
};
const useNoticeName = () => {
  const dispatch = useDispatch();
  const userList = useSelector(({ noticeName }) => noticeName.users);
  const areasList = useSelector(({ areas }) => areas.areas);
  const invoiceConcepts = useSelector(
    ({ invoicingConcepts }) => invoicingConcepts.invoicingConceptsList
  );
  const [loadingTable, setLoadingTable] = useState(false);
  const [update, setUpdate] = useState(false);
  const [noticeId, setNoticeId] = useState(null);
  const [activeSearch, setActiveSearch] = useState(false);
  const [modalShow, setmodalShow] = useState(false);
  const [noticesListData, setNoticesListData] = useState([]);
  const [rowsDataGrid, setRowsDataGrid] = useState([]);
  const [notice, setNotice] = useState(DEFAULT_VALUES);
  const clearFormulario = () => {
    setNotice(DEFAULT_VALUES);
    setmodalShow(false);
    setUpdate(false);
  };
  const [alertMessage, setAlertMessage] = useState({});
  const [errors, setErrors] = useState(false);
  const handleShow = (open = true) => setmodalShow(open);
  const getErrorValue = (inputError) => !!(errors && inputError === '');
  const getHelperText = (inputError, resultA, resultB) => {
    if (errors && (inputError === '' || inputError === null)) {
      return resultA;
    }
    return resultB;
  };
  const getNoticesListData = async (refresh = false) => {
    try {
      setLoadingTable(true);
      const dataNotices = await dispatch(fetchNoticesData());
      const dataNoticeInvoice = await dispatch(fetchNoticesInvoiceData());
      const dataNoticesJobArea = await dispatch(fetchNoticesJobAreaData());
      const dataNoticeUser = await dispatch(fetchNoticesUserData());
      const dataAreaInvoiceConcept = await dispatch(fetchAreaInvoiceConcept());
      if (!refresh) {
        dispatch(fetchJobAreaUserData());
        dispatch(getAreasTypes());
        dispatch(fetchInvoicingConcepts());
        dispatch(fetchAreas());
      }

      const newArray = dataNotices.map((item) => {
        const selectDataNoticesJobArea = dataNoticesJobArea.find(
          (itm) => itm.noticeName.nonaId === item.nonaId
        );
        if (selectDataNoticesJobArea) {
          return {
            ...item,
            jannId: selectDataNoticesJobArea.jannId,
            joaId: selectDataNoticesJobArea.jobArea.joaId,
            jobArea: selectDataNoticesJobArea.jobArea.joaName
          };
        }
        return item;
      });
      const newArrayUser = newArray.map((item) => {
        const selectDataNoticeUser = dataNoticeUser.find(
          (itm) => itm.noticeName.nonaId === item.nonaId
        );
        if (selectDataNoticeUser) {
          return {
            ...item,
            aunnId: selectDataNoticeUser.aunnId,
            jobAreaUser: selectDataNoticeUser.jobAreaUser.jobArea.joaName,
            joauId: selectDataNoticeUser.jobAreaUser.joauId
          };
        }
        return item;
      });
      const newArrayInvoice = newArrayUser.map((item) => {
        const selectDataNoticeInvoice = dataNoticeInvoice.find(
          (itm) => itm.noticeName.nonaId === item.nonaId
        );
        if (selectDataNoticeInvoice) {
          return {
            ...item,
            icnnId: selectDataNoticeInvoice.icnnId,
            incoId:
              selectDataNoticeInvoice.areaInvoiceConcept.invoiceConcept.incoId,
            areaInco:
              selectDataNoticeInvoice.areaInvoiceConcept.invoiceConcept
                .incoNameSpa
          };
        }
        return item;
      });
      const newArrayFinal = newArrayInvoice.map((item) => {
        const selectDataAreaInvoiceConcept = dataAreaInvoiceConcept.find(
          (itm) =>
            itm.invoiceConcept.incoId === item.incoId &&
            itm.jobArea.joaId === item.joaId
        );
        if (selectDataAreaInvoiceConcept) {
          return {
            ...item,
            aricId: selectDataAreaInvoiceConcept.aricId
          };
        }
        return item;
      });
      setNoticesListData(newArrayFinal);
      setRowsDataGrid(newArrayFinal);
      setLoadingTable(false);
      return true;
    } catch (error) {
      return error;
    }
  };
  const updateModalShow = (_prop, e, row) => {
    handleShow(_prop);
    setUpdate(e);
    if (e) {
      setNotice({
        ...row,
        jobArea: row.joaId,
        name: row.nonaName,
        responsable: row.joauId,
        charge: !!row.areaInco,
        status: row.nonaStatus,
        invoiceConcept: row.areaInco ? row.incoId : ''
      });
      setNoticeId(row.nonaId);
    }
  };
  const createNotice = async () => {
    try {
      const { jobArea, name, responsable, invoiceConcept, charge, status } =
        notice;
      if (
        jobArea === '' ||
        name === '' ||
        responsable === '' ||
        (charge && invoiceConcept === '')
      ) {
        setErrors(true);
        return false;
      }
      setErrors(false);
      const dataNoticeName = {
        nonaName: name,
        nonaChargeTrigger: charge,
        nonaStatus: status
      };
      const response = await dispatch(addNoticeNameData(dataNoticeName));
      const dataUser = {
        jobAreaUser: {
          joauId: responsable
        },
        noticeName: {
          nonaId: response.data.nonaId
        }
      };
      const responseUser = await dispatch(addUserNoticeName(dataUser));
      const dataJobArea = {
        jobArea: {
          joaId: jobArea
        },
        noticeName: {
          nonaId: response.data.nonaId
        }
      };
      const responseJobArea = await dispatch(addJobAreaNoticeName(dataJobArea));

      let responseInvoice;

      if (charge) {
        const areaInvoice = {
          jobArea: {
            joaId: jobArea
          },
          invoiceConcept: {
            incoId: invoiceConcept
          }
        };
        const responsableAreaInvoice = await dispatch(
          createAreaInvoiceConcept(areaInvoice)
        );

        const dataInvoice = {
          areaInvoiceConcept: {
            aricId: responsableAreaInvoice.aricId
          },
          noticeName: {
            nonaId: response.data.nonaId
          }
        };
        responseInvoice = await dispatch(addInvoiceNoticeName(dataInvoice));
      }

      if (
        response.status === HTTP_STATUS_OK &&
        responseUser.status === HTTP_STATUS_OK &&
        responseJobArea.status === HTTP_STATUS_OK &&
        (!charge || responseInvoice.status === HTTP_STATUS_OK)
      ) {
        setAlertMessage({
          isOpen: true,
          message: MESSAGE_ADD_SUCCESS,
          type: TYPE_SUCCESS_MESSAGE
        });
        clearFormulario();
        await getNoticesListData(true);

        updateModalShow(false, false, false);
      } else {
        setAlertMessage({
          isOpen: true,
          message: MESSAGE_ADD_ERROR,
          type: TYPE_ERROR_MESSAGE
        });
      }
      return response;
    } catch (error) {
      return false;
    }
  };
  const editNotice = async () => {
    try {
      const { jobArea, name, status, charge, responsable, invoiceConcept } =
        notice;
      if (
        jobArea === '' ||
        name === '' ||
        responsable === '' ||
        (charge && invoiceConcept === '')
      ) {
        setErrors(true);
        return false;
      }
      setErrors(false);
      const dataNoticeName = {
        nonaName: name,
        nonaChargeTrigger: charge,
        nonaStatus: status
      };
      let successResponses = true;
      const response = await dispatch(
        updateNoticesData(noticeId, dataNoticeName)
      );
      if (response.status !== HTTP_STATUS_OK) successResponses = false;

      if (notice.aunnId) {
        const dataUser = {
          jobAreaUser: {
            joauId: responsable
          },
          noticeName: {
            nonaId: noticeId
          }
        };
        const responseUser = await dispatch(
          updateUserNoticeName(notice.aunnId, dataUser)
        );
        if (responseUser.status !== HTTP_STATUS_OK) successResponses = false;
      }

      if (notice.jannId) {
        const dataJobArea = {
          jobArea: {
            joaId: jobArea
          },
          noticeName: {
            nonaId: noticeId
          }
        };
        const responseJobArea = await dispatch(
          updateJobAreaNoticeName(notice.jannId, dataJobArea)
        );
        if (responseJobArea.status !== HTTP_STATUS_OK) successResponses = false;
      }

      if (invoiceConcept !== '') {
        const areaInvoice = {
          jobArea: {
            joaId: jobArea
          },
          invoiceConcept: {
            incoId: invoiceConcept
          }
        };

        if (notice.aricId) {
          const responsableAreaInvoice = await dispatch(
            updateAreaInvoiceConcept(notice.aricId, areaInvoice)
          );
          if (responsableAreaInvoice.status !== HTTP_STATUS_OK)
            successResponses = false;
        } else {
          const { aricId } = await dispatch(
            createAreaInvoiceConcept(areaInvoice)
          );

          const dataInvoice = {
            areaInvoiceConcept: {
              aricId
            },
            noticeName: {
              nonaId: response.data.nonaId
            }
          };
          const responseInvoice = await dispatch(
            addInvoiceNoticeName(dataInvoice)
          );
          if (responseInvoice.status !== HTTP_STATUS_OK)
            successResponses = false;
        }
      }

      if (successResponses) {
        setAlertMessage({
          isOpen: true,
          message: MESSAGE_UPDATE_SUCCESS,
          type: TYPE_SUCCESS_MESSAGE
        });
        clearFormulario();
        await getNoticesListData(true);
        updateModalShow(false, false, false);
      } else {
        setAlertMessage({
          isOpen: true,
          message: MESSAGE_UPDATE_ERROR,
          type: TYPE_ERROR_MESSAGE
        });
      }
      return true;
    } catch (error) {
      console.error(error);
      return error;
    }
  };
  const handleNotice = async (prop, e) => {
    setNotice({ ...notice, [prop]: e });
  };

  return {
    rowsDataGrid,
    modalShow,
    errors,
    notice,
    update,
    activeSearch,
    areasList,
    invoiceConcepts,
    alertMessage,
    noticesListData,
    userList,
    setAlertMessage,
    setmodalShow,
    handleShow,
    setRowsDataGrid,
    updateModalShow,
    getNoticesListData,
    handleNotice,
    setUpdate,
    createNotice,
    editNotice,
    setActiveSearch,
    getErrorValue,
    getHelperText,
    clearFormulario,
    loadingTable
  };
};
export default useNoticeName;
