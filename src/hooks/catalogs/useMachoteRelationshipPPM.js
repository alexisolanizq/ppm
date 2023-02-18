import React, { useState } from 'react';
import { Edit } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import {
  addMachoteRelationship,
  fetchMachoteRelationship
} from '@Redux/catalogs/machoteRelationshipPPMSlice';
import { fetchAreas } from '@Redux/catalogs/areaSlice';
import { getProcessesData } from '@Redux/catalogs/processesManagmentSlice';
import { fetchDocumentType } from '@Redux/catalogs/ppmDocumentSlice';
import { HTTP_STATUS_CREATED, 
  HTTP_STATUS_OK, 
  TYPE_SUCCESS_MESSAGE,
  TYPE_ERROR_MESSAGE,
  ACTION_NONE,
  MESSAGE_OPERATION_SUCCESS,
  MESSAGE_OPERATION_ERROR,
  HTTP_STATUS_SERVER_ERROR
 } from '@Const/const';
import { useProcedurePhaseService } from '@Services/phases/usePhaseService';

const useMachoteRelationshipPPM = () => {
  const dispatch = useDispatch();
  //* Selectors
  const machoteRelationshipListData = useSelector(
    ({ machoteRelationship }) => machoteRelationship.list
  );
  const documentsType = useSelector((state) => state.ppmDocuments.documentType);

  const [machoteRelationship, setMachoteRelationship] = useState({});
  const [machoteRelationships, setMachoteRelationships] = useState([]);
  const [documentsTypeList, setDocumentsTypeList] = useState([]);
  const [updateMachoteRelationship, setUpdateMachoteRelationship] =
    useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [action, setAction] = useState(ACTION_NONE);
  const [alertMessage, setAlertMessage] = useState('');

  const [jobAreas, setJobAreas] = useState([]);
  const {data: procedurePhases} = useProcedurePhaseService()
  const [procedureManagementAction, setProcedureManagementAction] = useState(
    []
  );
  const { reset, handleSubmit, control } = useForm();

  const updateModalShow = (modalBool, updateBool, row) => {
    setModalShow(modalBool);
    setUpdateMachoteRelationship(updateBool);
    if (updateBool) {
      setMachoteRelationship(row);
    }
  };

  const handleClose = () => {
    setModalShow(false);
    setMachoteRelationship({});
    setAction(ACTION_NONE);
    reset();
  };

  const handleShow = () => setModalShow(true);

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

  const getRowIdData = (row) => row.mrpdId;

  const getMachoteRelationshipPPM = async () => {
    try {
      const response = await dispatch(fetchMachoteRelationship());
      setMachoteRelationships(response);
    } catch (error) {
      setMachoteRelationships([]);
    }
  };

  const getOptionsForm = async () => {
    try {
      const areas = await dispatch(fetchAreas());
      setJobAreas(areas);
      const procedureManagementActionList = await dispatch(getProcessesData());
      setProcedureManagementAction(procedureManagementActionList);
      const documentTypeResponse = await dispatch(fetchDocumentType());
      setDocumentsTypeList(documentTypeResponse);
    } catch (error) {
      setJobAreas([]);
    }
  };

  const insertMachoteRelationshipPPM = async (data) => {
    const payload = {
      position: 0,
      machoteRelationship: {
        procedureManagementAction: {
          id: data.procedureManagementActions
        }
      },
      ppmDocument: {
        id: 8662,
        procedureManagementAction: {
          id: 827,
          tmpRepoFolder: {
            id: 499,
            jobArea: {
              id: 2
            }
          },
          expiration: true,
          status: true,
          jobAreaProcedurePhase: {
            id: 844,
            jobArea: {
              id: data.jobAreaId
            },
            procedurePhase: {
              id: data.procedurePhase
            },
            status: true
          },
          priority: {
            opcgId: 0,
            cagId: 0,
            name: 'string',
            abbreviation: 'string',
            status: true
          },
          level: {
            id: 0,
            idHierarchy: 0,
            name: 'string'
          }
        },
        typeDocument: {
          id: 3
        },
        customerLetterType: {
          id: 0,
          name: 'string',
          status: true,
          typeDocument: {
            id: 1
          }
        },
        invoice: true,
        tag: 'string',
        status: true
      }
    };

    try {
      const response = await dispatch(addMachoteRelationship(payload));
      if (response === HTTP_STATUS_CREATED) {
        setModalShow(false);
        reset();
        getMachoteRelationshipPPM();
        setMachoteRelationship({});
        setUpdateMachoteRelationship(false);
        handleMessage(response);
      }
    } catch (error) {
      setMachoteRelationship({});
      setAction(ACTION_NONE);
      setUpdateMachoteRelationship(false);
      handleMessage(HTTP_STATUS_SERVER_ERROR);
    }
  };

  const handleMachoteRelationshipSubmit = (data) => {
    if (action === 'agregar') {
      dispatch(insertMachoteRelationshipPPM(data));
    }
  };

  const columns = [
    {
      field: 'area',
      headerAlign: 'center',
      align: 'center',
      headerName: 'Área',
      valueGetter: (params) =>
        params.row.machoteRelationship?.procedureManagementAction
          ?.jobAreaProcedurePhase?.joaName,
      width: '180'
    },
    {
      field: 'phase',
      headerAlign: 'center',
      align: 'center',
      headerName: 'Fase',
      valueGetter: (params) =>
        params.row.machoteRelationship?.procedureManagementAction
          ?.jobAreaProcedurePhase?.prphName,
      width: '180'
    },
    {
      field: 'phase_gestion',
      headerAlign: 'center',
      align: 'center',
      headerName: 'Acción de la gestión del trámite',
      valueGetter: (params) =>
        params.row.machoteRelationship?.procedureManagementAction?.prmaName,
      width: '180'
    },
    {
      field: 'document_type',
      headerAlign: 'center',
      align: 'center',
      headerName: 'Tipo de documento',
      valueGetter: (params) =>
        params.row.ppmDocument?.customerLetterType?.typeDocument?.tydoName,
      width: '180'
    },
    {
      field: 'ppmDocument',
      headerAlign: 'center',
      align: 'center',
      headerName: 'Tipo carta cliente',
      valueGetter: (params) =>
        params.row.ppmDocument?.customerLetterType?.cultName,
      width: '180'
    },
    {
      field: 'document_type_n',
      headerAlign: 'center',
      align: 'center',
      headerName: 'Nombre del documento',
      valueGetter: (params) => params.row.ppmDocument?.typeDocument?.tydoName,
      width: '180'
    },
    {
      field: 'letter_name',
      headerAlign: 'center',
      align: 'center',
      headerName: 'Tipo de documento',
      valueGetter: (params) =>
        params.row.ppmDocument?.customerLetterType?.cultName,
      width: '180'
    },
    {
      field: 'edit',
      headerAlign: 'center',
      align: 'center',
      headerName: 'Modificar',
      renderCell: (params) => (
        <IconButton
          aria-label="Modificar"
          onClick={() => {
            updateModalShow(true, true, params.row);
          }}
        >
          <Edit color="success" />
        </IconButton>
      )
    }
  ];

  return {
    columns,
    machoteRelationship,
    setMachoteRelationship,
    machoteRelationships,
    setMachoteRelationships,
    updateMachoteRelationship,
    setUpdateMachoteRelationship,
    modalShow,
    setModalShow,
    action,
    setAction,
    getMachoteRelationshipPPM,
    updateModalShow,
    handleMachoteRelationshipSubmit,
    insertMachoteRelationshipPPM,
    reset,
    handleSubmit,
    control,
    documentsTypeList,
    machoteRelationshipListData,
    getRowIdData,
    // ***** Options ***** //
    getOptionsForm,
    jobAreas,
    procedurePhases,
    procedureManagementAction,
    documentsType,
    handleClose,
    alertMessage,
    setAlertMessage,
    handleShow
  };
};

export default useMachoteRelationshipPPM;
