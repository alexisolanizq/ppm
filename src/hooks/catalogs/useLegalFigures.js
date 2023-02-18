import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import {
  fetchReferenceTypes,
  fetchLegalFigures,
  editLegalFigure,
  addLegalFigure
} from '@Redux/catalogs/legalFiguresSlice';
import { fetchAreas } from '@Redux/catalogs/areaSlice';
import { HTTP_STATUS_CREATED, 
  HTTP_STATUS_OK,
  TYPE_SUCCESS_MESSAGE,
  TYPE_ERROR_MESSAGE,
  ACTION_NONE,
  ACTION_UPDATE,
  MESSAGE_ADD_SUCCESS_LEGAL_FIGURE,
  MESSAGE_ADD_ERROR,
  MESSAGE_UPDATE_ERROR,
  MESSAGE_UPDATE_SUCCESS_LEGAL_FIGURE
 } from '@Const/const';

const useLegalFigures = () => {
  const dispatch = useDispatch();
  const [legalFiguresListData, setLegalFiguresListData] = useState([]);
  const [areas, setAreas] = useState([]);
  const [referenceTypes, setReferenceTypes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [action, setAction] = useState(ACTION_NONE);
  const [legalFigure, setLegalFigure] = useState([]);
  const [legalFiguresListDataFilter, setLegalFiguresListDataFilter] = useState(
    []
  );
  const [filter, setFilterData] = useState('');
  const [activeSearch, setActiveSearch] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  useEffect(() => {
    reset(null);
  }, [null]);

  const getErrorValue = (inputError) =>
    action === ACTION_UPDATE ? false : Boolean(inputError);

  const getInfoProperty = (property) => {
    if (action === ACTION_NONE) {
      return '';
    }

    if (property === undefined) {
      return '';
    }

    return property ?? '';
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setAction(ACTION_NONE);
    reset();
    setLegalFigure([]);
  };

  const setFilter = (e) => {
    setFilterData(e.toLowerCase());
    const filtered = legalFiguresListData.filter(
      (c) =>
        c.jobAreaReferenceType.jobAreaName.toLowerCase().includes(e) ||
        c.jobAreaReferenceType.referenceTypeName.toLowerCase().includes(e) ||
        c.lefiSpanishName.toLowerCase().includes(e) ||
        c.lefiEnglishName.toLowerCase().includes(e)
    );
    setLegalFiguresListDataFilter(filtered);
  };

  const toggleSearchButton = () => {
    setFilterData('');
    setActiveSearch(!activeSearch);
  };

  const toggleLegalFigure = (e) => {
    setLegalFigure(e);
    setIsModalOpen(true);
    setAction(ACTION_UPDATE);
  };

  const getAreas = async () => {
    try {
      const response = await dispatch(fetchAreas());
      setAreas(response);
    } catch (error) {
      console.error(`Ocurrió un error.\n${error}`);
      setAreas([]);
    }
  };

  const getReferenceTypes = async (id) => {
    try {
      const response = await dispatch(fetchReferenceTypes(id));
      setReferenceTypes(response);
    } catch (error) {
      console.error(`Ocurrió un error.\n${error}`);
      setReferenceTypes([]);
    }
  };

  const getLegalFiguresListData = async () => {
    try {
      const response = await dispatch(fetchLegalFigures());
      setLegalFiguresListData(response);
    } catch (error) {
      console.error(`Ocurrió un error.\n${error}`);
      setLegalFiguresListData([]);
    }
  };

  const insertLegalFigure = async (data) => {
    const tempReferenceType = referenceTypes.filter(
      (referenceType) =>
        referenceType.referenceTypeId ===
        Number(data.jobAreaReferenceType.referenceTypeId)
    );

    const payload = {
      lefiSpanishName: data.lefiSpanishName,
      lefiEnglishName: data.lefiEnglishName,
      jobAreaReferenceType: {
        jartId: tempReferenceType[0].jartId
      },
      lefiStatus: 'true'
    };

    try {
      const response = await dispatch(addLegalFigure(payload));
      if (response === HTTP_STATUS_CREATED) {
        getLegalFiguresListData();
        setIsModalOpen(false);
        setAction(ACTION_NONE);
        setAlertMessage({
          isOpen: true,
          message: MESSAGE_ADD_SUCCESS_LEGAL_FIGURE,
          type: TYPE_SUCCESS_MESSAGE
        });
        setLegalFigure([]);
      } else {
        setIsModalOpen(false);
        setAlertMessage({
          isOpen: true,
          message: MESSAGE_ADD_ERROR,
          type: TYPE_ERROR_MESSAGE
        });
        console.error(`Ocurrió un error.\n${response}`);
      }
    } catch (error) {
      setIsModalOpen(false);
      setAlertMessage({
        isOpen: true,
        message: MESSAGE_OPERATION_ERROR,
        type: TYPE_ERROR_MESSAGE
      });
      console.error(`Ocurrió un error.\n${error}`);
    }
  };

  const modifyLegalFigure = async (data) => {
    const payload = {
      lefiId: data.lefiId,
      lefiSpanishName: data.lefiSpanishName,
      lefiEnglishName: data.lefiEnglishName,
      jobAreaReferenceType: {
        jartId: data.jobAreaReferenceType.jartId
      },
      lefiStatus: data.lefiStatus
    };

    try {
      const response = await dispatch(editLegalFigure(payload.lefiId, payload));
      if (response === HTTP_STATUS_OK) {
        getLegalFiguresListData();
        setIsModalOpen(false);
        setAction(ACTION_NONE);
        setAlertMessage({
          isOpen: true,
          message: MESSAGE_UPDATE_SUCCESS_LEGAL_FIGURE,
          type: TYPE_SUCCESS_MESSAGE
        });
        setLegalFigure([]);
      } else {
        setIsModalOpen(false);
        setAlertMessage({
          isOpen: true,
          message: MESSAGE_UPDATE_ERROR,
          type: TYPE_ERROR_MESSAGE
        });
        console.error(`Ocurrió un error.\n${response}`);
      }
    } catch (error) {
      setIsModalOpen(false);
      setAlertMessage({
        isOpen: true,
        message: MESSAGE_UPDATE_ERROR,
        type: TYPE_ERROR_MESSAGE
      });
      console.error(`Ocurrió un error.\n${error}`);
    }
  };

  const handleLegalFigure = (prop, e, schema = ACTION_NONE, type = 'text') => {
    let searchName = [];

    if (prop === 'jobAreaId') {
      getReferenceTypes(e.target.value);
    }

    switch (type) {
      case 'text':
        setLegalFigure({
          ...legalFigure,
          [prop]: e.target.value
        });

        break;
      case 'select':
        if (schema === 'areas') {
          searchName = areas.find((item) => item.id === e.target.value);
          setLegalFigure({
            ...legalFigure,
            jobAreaReferenceType: {
              ...legalFigure.jobAreaReferenceType,
              joaId: e.target.value,
              joaName: searchName.name
            }
          });
        } else if (schema === 'referenceTypes') {
          searchName = referenceTypes.find(
            (item) => item.referenceTypeId === e.target.value
          );
          setLegalFigure({
            ...legalFigure,
            jobAreaReferenceType: {
              ...legalFigure.jobAreaReferenceType,
              referenceTypeId: e.target.value,
              referenceTypeName: searchName.jobAreaReferenceType.retyName
            }
          });
        }
        break;
      default:
        setLegalFigure({ ...legalFigure, [prop]: e.target.value });
    }
  };

  const onSubmit = () => {
    if (action === 'Dar de alta') {
      insertLegalFigure(legalFigure);
    } else {
      modifyLegalFigure(legalFigure);
    }
  };

  const init = () => {
    getLegalFiguresListData();
    getAreas();
  };

  return {
    init,
    getLegalFiguresListData,
    legalFiguresListData,
    isModalOpen,
    setIsModalOpen,
    action,
    setAction,
    legalFigure,
    setLegalFigure,
    toggleLegalFigure,
    handleLegalFigure,
    addLegalFigure,
    editLegalFigure,
    modifyLegalFigure,
    getAreas,
    areas,
    setAreas,
    getReferenceTypes,
    referenceTypes,
    setReferenceTypes,
    legalFiguresListDataFilter,
    setLegalFiguresListDataFilter,
    filter,
    setFilterData,
    activeSearch,
    setActiveSearch,
    alertMessage,
    setAlertMessage,
    register,
    handleSubmit,
    reset,
    errors,
    setFilter,
    toggleSearchButton,
    onSubmit,
    getErrorValue,
    getInfoProperty,
    handleClose
  };
};

export default useLegalFigures;
