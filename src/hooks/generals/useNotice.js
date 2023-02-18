import React, { useCallback, useState } from 'react';
import moment from 'moment';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { AttachFile } from '@mui/icons-material';
import {
  fetchHoldersNotice,
  fetchNoticeName,
  fetchNotices
} from '@Redux/generals/noticeSlice';

import { 
  MESSAGE_LIMIT_FILE
 } from '@Const/const';

const useNotice = () => {
  moment.locale('es');
  const dispatch = useDispatch();
  const { reset, control, handleSubmit } = useForm();

  //* States */
  const [noticeList, setNoticeList] = useState([]);
  const [notice, setNotice] = useState({});
  const [modalNoticeShow, setModalNoticeShow] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [noticeFiles, setNoticeFiles] = useState(null);
  const [holderList, setHolderList] = useState([]);
  const [holderName, setHolderName] = useState([]);

  //* Selectors */

  const getNoticeModal = (modalBool) => {
    setModalNoticeShow(modalBool);
  };

  const handleClose = () => {
    setModalNoticeShow(false);
    setNotice({});
    reset();
  };

  const getHolderList = async () => {
    const response = await dispatch(fetchHoldersNotice());
    setHolderList(response);
  };

  const getNoticeNames = async () => {
    const response = await dispatch(fetchNoticeName());
    setHolderName(response);
  };

  const getInitialValues = async () => {
    const response = await dispatch(fetchNotices());
    setNoticeList(response);
    getHolderList();
    getNoticeNames();
  };

  const onDropRejected = () => {
    setAlertMessage(
      MESSAGE_LIMIT_FILE
    );
  };

  const onDropAccepted = useCallback(async (acceptedFiles) => {
    setNoticeFiles(acceptedFiles[0]);
  }, []);

  const commonProperties = {
    editable: false,
    sortable: false,
    flex: 1,
    headerAlign: 'center'
  };

  const columns = [
    {
      ...commonProperties,
      field: 'notiDescription',
      headerName: 'Descripción',
      align: 'center'
    },
    {
      ...commonProperties,
      field: 'noticeNameId',
      headerName: 'Nombre del aviso',
      align: 'center',
      valueGetter: (params) => params.row.nonaId?.name
    },
    {
      ...commonProperties,
      field: 'expirationDate',
      headerName: 'Fecha de expiración',
      align: 'center',
      renderCell: (params) =>
        moment(params.row.expirationDate).format('DD MMM YYYY')
    },
    {
      ...commonProperties,
      field: 'status',
      headerName: 'Estado',
      align: 'center',
      valueGetter: (params) => params.row.status.name
    },
    {
      ...commonProperties,
      field: 'user',
      headerName: 'Reponsable',
      align: 'center',
      valueGetter: (params) => params.row.userId.name
    },
    {
      ...commonProperties,
      field: 'priority',
      headerName: 'Prioridad',
      align: 'center',
      renderCell: (params) => {
        let priorityColor = null;
        if (params.row.priority.opcgId === 1) {
          priorityColor = 'text-danger fw-bold';
        } else if (params.row.priority.opcgId === 2) {
          priorityColor = 'text-warning fw-bold';
        } else if (params.row.priority.opcgId === 3) {
          priorityColor = 'text-success fw-bold';
        }
        return (
          <span className={priorityColor}>{params.row.priority.name}</span>
        );
      }
    },
    {
      ...commonProperties,
      field: 'attach',
      headerName: 'Adjunto',
      align: 'center',
      renderCell: () => (
        <Button size="small">
          <AttachFile color="success" />
        </Button>
      )
    }
  ];

  return {
    notice,
    columns,
    holderList,
    holderName,
    // notices,
    setNotice,
    getInitialValues,
    noticeList,
    reset,
    control,
    handleSubmit,
    // isLoading,
    modalNoticeShow,
    getNoticeModal,
    handleClose,
    alertMessage,
    noticeFiles,
    setNoticeFiles,
    onDropRejected,
    onDropAccepted
  };
};

export default useNotice;
