import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getLegalFiguresData,
  updateLegalFiguresData,
  fetchFigureTypes,
  addLegalFigure
} from '@Redux/catalogs/legalProcedureFiguresSlice';
import { fetchLegalFigures } from '@Redux/catalogs/legalFiguresSlice';
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

const DEFAULT_VALUES = {
  figureLegalID: '',
  typeId: '',
  nameEnglish: '',
  nameSpanish: '',
  status: true
};

const useLegalProcedureFigures = () => {
  const dispatch = useDispatch();
  const legalFiguresList = useSelector(
    ({ legalFigures }) => legalFigures.legalFigures
  );
  const referenceTypesList = useSelector(
    ({ legalFigures }) => legalFigures.referenceTypes
  );
  const areasList = useSelector(({ areas }) => areas.areas);
  const legalFiguresListData = useSelector(({ areas }) => areas.areas);
  const procedureTypes = useSelector(
    ({ legalProcedureFigures }) => legalProcedureFigures.figuresTypes
  );
  const [modalShow, setmodalShow] = useState(false);
  const [update, setUpdate] = useState(false);
  const [rowsDataGrid, setRowsDataGrid] = useState([]);
  const [errors, setErrors] = useState(false);
  const handleShow = () => setmodalShow(true);
  const [alertMessage, setAlertMessage] = useState({});
  const getErrorValue = (inputError) => !!(errors && inputError === '');
  const [legalFigure, setLegalFigure] = useState(DEFAULT_VALUES);
  const [legalFigureId, setLegalFigureId] = useState(null);
  const [procedureTypesFilter, setProcedureTypesFilter] = useState([]);
  const clearFormulario = () => {
    setUpdate(false);
    setLegalFigure(DEFAULT_VALUES);
    setmodalShow(false);
  };
  const getProcedureTypes = (figureLegalID) => {
    const legalFigureSelect = legalFiguresList.find(
      (item) => item.lefiId === figureLegalID
    );
    const jobAreaId = legalFigureSelect.jobAreaReferenceType?.joaId;
    const procedureTypesNews = procedureTypes.filter(
      (item) => item.jobArea.joaId === jobAreaId
    );
    setProcedureTypesFilter(procedureTypesNews);
  };
  const onChangeFigureLegal = (figureLegalID) => {
    const legalFigureSelect = legalFiguresList.find(
      (item) => item.lefiId === figureLegalID
    );
    setLegalFigure({
      ...legalFigure,
      figureLegalID: legalFigureSelect.lefiId,
      nameSpanish: legalFigureSelect.lefiSpanishName,
      nameEnglish: legalFigureSelect.lefiEnglishName
    });
    getProcedureTypes(figureLegalID);
  };

  const updateModalShow = async (prop, e, row) => {
    try {
      setmodalShow(prop);
      setUpdate(e);
      let response;
      if (e) {
        getProcedureTypes(row.lefiId);
        setLegalFigure({
          figureLegalID: row.lefiId,
          typeId: row.procedureTypeId,
          status: row.lfptStatus,
          nameSpanish: row.lefiSpanishName,
          nameEnglish: row.lefiEnglishName
        });
        setLegalFigureId(row.lfptId);
      }
      return response;
    } catch (error) {
      return error;
    }
  };
  const getLegalFiguresListData = async (refresh = false) => {
    try {
      if (!refresh) {
        dispatch(fetchLegalFigures());
        dispatch(fetchFigureTypes());
      }
      const response = await dispatch(getLegalFiguresData());
      setRowsDataGrid(response);
      return true;
    } catch (error) {
      return error;
    }
  };
  const createLegalFigure = async () => {
    try {
      const { figureLegalID, typeId } = legalFigure;
      if (figureLegalID === '' || typeId === '') {
        setErrors(true);
        return false;
      }

      const data = {
        lefiId: legalFigure.figureLegalID,
        prtyId: legalFigure.typeId,
        lfptStatus: legalFigure.status
      };

      const response = await dispatch(addLegalFigure(data));
      if (response.status === HTTP_STATUS_CREATED) {
        setAlertMessage({
          isOpen: true,
          message: MESSAGE_ADD_SUCCESS,
          type: TYPE_SUCCESS_MESSAGE
        });
        getLegalFiguresListData(true);
        clearFormulario();
        updateModalShow(false, false, false);
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
  const updateLegalFigure = async () => {
    try {
      const { figureLegalID, typeId } = legalFigure;
      if (figureLegalID === '' || typeId === '') {
        setErrors(true);
        return false;
      }
      const data = {
        lfptId: legalFigureId,
        lefiId: legalFigure.figureLegalID,
        prtyId: legalFigure.typeId,
        lfptStatus: legalFigure.status
      };

      const response = await dispatch(
        updateLegalFiguresData(legalFigureId, data)
      );
      if (response.status === HTTP_STATUS_OK) {
        setAlertMessage({
          isOpen: true,
          message: MESSAGE_UPDATE_SUCCESS,
          type: TYPE_SUCCESS_MESSAGE
        });
        getLegalFiguresListData(true);
        clearFormulario();
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
  const handleLegalFigure = async (prop, e) => {
    setLegalFigure({ ...legalFigure, [prop]: e });
  };

  return {
    errors,
    legalFiguresListData,
    rowsDataGrid,
    modalShow,
    legalFigure,
    update,
    areasList,
    legalFiguresList,
    alertMessage,
    procedureTypes,
    referenceTypesList,
    handleShow,
    setRowsDataGrid,
    updateModalShow,
    setmodalShow,
    getLegalFiguresListData,
    handleLegalFigure,
    createLegalFigure,
    updateLegalFigure,
    setAlertMessage,
    getErrorValue,
    clearFormulario,
    procedureTypesFilter,
    onChangeFigureLegal
  };
};
export default useLegalProcedureFigures;
