import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Edit } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import {
  addPermissionLevel,
  editPermissionLevel,
  fetchPermissionList
} from '@Redux/catalogs/permissionSlice';
import { HTTP_STATUS_CREATED, 
  HTTP_STATUS_OK,
  TYPE_SUCCESS_MESSAGE,
  TYPE_ERROR_MESSAGE,
  ACTION_NONE,
  MESSAGE_OPERATION_SUCCESS,
  MESSAGE_OPERATION_ERROR,
  HTTP_STATUS_SERVER_ERROR
 } from '@Const/const';

const usePermissionLevels = () => {
  const dispatch = useDispatch();

  //* Selectors
  const permissionLevelListData = useSelector(
    ({ permissions }) => permissions.list
  );
  const isLoading = useSelector(({ permissions }) => permissions.isLoading);

  const { reset, handleSubmit, control } = useForm();
  const [action, setAction] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [alertMessage, setAlertMessage] = useState({});
  const [permissionLevel, setPermissionLevel] = useState({});
  const [permissionLevels, setPermissionLevels] = useState([]);
  const [updatePermissionLevel, setUpdatePermissionLevel] = useState(false);

  const getRowIdData = (row) => row.levId;

  const dataForm = ({
    levId = null,
    levIdHierarchy,
    levName,
    levStatus = true
  }) => ({
    levId,
    levIdHierarchy,
    levName,
    levStatus
  });

  const updateModalShow = (modalBool, row) => {
    setModalShow(modalBool);
    if (row?.levId) {
      setPermissionLevel(row);
    }
  };

  const handleShow = () => setModalShow(true);

  const handleClose = () => {
    setModalShow(false);
    setPermissionLevel({});
    setUpdatePermissionLevel(false);
    setAction(ACTION_NONE);
    reset();
  };

  const handleMessage = (status) => {
    if (status === HTTP_STATUS_OK || status === HTTP_STATUS_CREATED) {
      setAlertMessage({
        isOpen: true,
        message: MESSAGE_OPERATION_SUCCESS,
        type: TYPE_SUCCESS_MESSAGE
      });
    } else {
      setAlertMessage({
        isOpen: true,
        message: MESSAGE_OPERATION_ERROR,
        type: TYPE_ERROR_MESSAGE
      });
    }
  };

  const getPermissionLevels = async () => {
    try {
      const response = await dispatch(fetchPermissionList());
      setPermissionLevels(response.data);
    } catch (error) {
      setPermissionLevels([]);
    }
  };

  const insertPermissionLevel = async (data) => {
    const payload = dataForm(data);

    try {
      const response = await dispatch(addPermissionLevel(payload));
      if (response.status === HTTP_STATUS_CREATED) {
        handleClose();
        getPermissionLevels();
        handleMessage(response.status);
      } else {
        handleClose();
        handleMessage(response.status);
      }
    } catch (error) {
      handleClose();
      handleMessage(HTTP_STATUS_SERVER_ERROR);
    }
  };

  const modifyPermissionLevel = async (data) => {
    const payload = dataForm(data);

    try {
      const response = await dispatch(
        editPermissionLevel(payload.levId, payload)
      );
      if (response.status === HTTP_STATUS_OK) {
        handleClose();
        getPermissionLevels();
        handleMessage(response.status);
      } else {
        handleClose();
        handleMessage(response.status);
      }
    } catch (error) {
      handleClose();
      handleMessage(HTTP_STATUS_SERVER_ERROR);
    }
  };

  const handlePermissionLevelSubmit = (data) => {
    if (data.levId) {
      modifyPermissionLevel(data);
      return;
    }
    insertPermissionLevel(data);
  };

  const commonProperties = {
    editable: false,
    sortable: false,
    flex: 1,
    headerAlign: 'center'
  };

  const columns = [
    {
      ...commonProperties,
      field: 'levName',
      align: 'center',
      headerName: 'Nombre del permiso'
    },
    {
      ...commonProperties,
      field: 'levIdHierarchy',
      align: 'center',
      headerName: 'Nivel de permiso'
    },
    {
      ...commonProperties,
      field: 'edit',
      align: 'center',
      headerName: 'Modificar',
      renderCell: (params) => (
        <IconButton
          aria-label="Modificar"
          onClick={() => {
            updateModalShow(true, params.row);
          }}
        >
          <Edit color="success" />
        </IconButton>
      )
    }
  ];

  return {
    action,
    control,
    columns,
    setAction,
    isLoading,
    modalShow,
    handleShow,
    handleClose,
    alertMessage,
    handleSubmit,
    getRowIdData,
    setModalShow,
    permissionLevel,
    setAlertMessage,
    updateModalShow,
    permissionLevels,
    setPermissionLevel,
    getPermissionLevels,
    setPermissionLevels,
    updatePermissionLevel,
    permissionLevelListData,
    setUpdatePermissionLevel,
    handlePermissionLevelSubmit
  };
};

export default usePermissionLevels;
