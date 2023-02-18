import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HTTP_STATUS_CREATED, HTTP_STATUS_OK, MESSAGE_ADD_ERROR, MESSAGE_ADD_SUCCESS, MESSAGE_UPDATE_ERROR, MESSAGE_UPDATE_SUCCESS, TYPE_SUCCESS_MESSAGE, TYPE_ERROR_MESSAGE, VALUE_SERVICES, VALUE_PRODUCTS } from '@Const/const';
import {
  addClassesData,
  updateClassesData,
  updatePPMClassesData,
  fetchReferenceTypeClasses,
  fetchPPMClasses,
  fetchTypeClass,
  addPPMClassData
} from '@Redux/catalogs/classesSlice';
import { fetchReferenceTypes } from '@Redux/catalogs/legalFiguresSlice';
import { fetchAreas } from '@Redux/catalogs/areaSlice';

const DEFAULT_VALUES = {
  jobArea: '',
  jobAreaReference: '',
  typeClasse: true,
  numberClass: '',
  description: '',
  status: true
}

const useClasses = () => {
  const dispatch = useDispatch();
  const areasList = useSelector(({ areas }) => areas.areas);
  const typeClasses = useSelector(({ classes }) => classes.typeClasses);
  const referenceTypeClasses = useSelector(
    ({ classes }) => classes.referenceTypeClasses
  );
  const [classesListData, setClassesListData] = useState([]);
  const [references, setReferenceTypes] = useState([]);
  const [rowsDataGrid, setRowsDataGrid] = useState([]);
  const [alertMessage, setAlertMessage] = useState({});
  const [errors, setErrors] = useState(false);
  const [modalShow, setmodalShow] = useState(false);
  const [update, setUpdate] = useState(false);
  const [classe, setClasse] = useState(DEFAULT_VALUES);
  const [classeId, setClasseId] = useState(null);
  const [activeSearch, setActiveSearch] = useState(false);
  const getErrorValue = (inputError) => !!(errors && inputError === '');
  const getHelperText = (inputError, resultA, resultB) => {
    if (errors && (inputError === '' || inputError === null)) {
      return resultA;
    }
    return resultB;
  };
  const handleShow = () => setmodalShow(true);
  const clearFormulario = () => {
    setClasse(DEFAULT_VALUES)
    setmodalShow(false)
    setUpdate(false)
  }
  const getReferenceTypes = async (id) => {
    try {
      const response = await dispatch(fetchReferenceTypes(id));
      setReferenceTypes(response);
      return true;
    } catch (error) {
      return error;
    }
  };
  const updateModalShow = async (prop, e, row) => {
    try {
      setmodalShow(prop);
      setUpdate(e);
      if (e) {
        await getReferenceTypes(row.jobAreaReferenceType.joaId);
        await setClasse({
          jobArea: row.jobAreaReferenceType.joaId,
          jobAreaReference: row.jobAreaReferenceType.retyId,
          typeClasse: row.ppmClass.classType.cltyId === 2,
          numberClass: row.ppmClass.ppclNumber,
          description: row.ppmClass.ppclDescription,
          status: row.ppmClass.ppclStatus,
          ppclId: row.ppmClass.ppclId
        });
        setClasseId(row.retcId);
      }
      return true;
    } catch (error) {
      return error;
    }
  };
  const getClassesListData = async () => {
    try {
      const response = await dispatch(fetchReferenceTypeClasses());
      dispatch(fetchPPMClasses());
      dispatch(fetchTypeClass());
      dispatch(fetchAreas());
      setRowsDataGrid(response);
      setClassesListData(response);
      return true;
    } catch (error) {
      return error;
    }
  };
  const createClasse = async () => {
    
    try {
      const {
        jobArea,
        jobAreaReference,
        numberClass,
        description
      } = classe;
      
      if (
        jobArea === '' ||
        jobAreaReference === '' ||
        numberClass === '' ||
        description === ''
      ) {
        setErrors(true);
        return false;
      }
      const data = {
        ppclNumber: classe.numberClass,
        ppclDescription: classe.description,
        ppclStatus: classe.status,
        classType: {
          cltyId: classe.typeClasse ? 2 : 1,
          cltyName: classe.typeClasse ? VALUE_SERVICES : VALUE_PRODUCTS,
          cltyStatus: true
        }
      };
      const response = await dispatch(addPPMClassData(data));
      const dataClass = {
        ppmClass: response,
        jobAreaReferenceType: references.find((item) => item.retyId === jobAreaReference)
      };
      const responseClass = await dispatch(addClassesData(dataClass));
      if (responseClass.status === HTTP_STATUS_OK) {
        setAlertMessage({
          isOpen: true,
          message: MESSAGE_ADD_SUCCESS,
          type: TYPE_SUCCESS_MESSAGE
        });
        await fetchPPMClasses();
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
  const editClasse = async () => {
    try {
      const data = {
        ppclId: classe.ppclId,
        ppclNumber: classe.numberClass,
        ppclDescription: classe.description,
        ppclStatus: classe.status,
        classType: {
          cltyId: classe.typeClasse ? 2 : 1,
          cltyName: classe.typeClasse ? VALUE_SERVICES : VALUE_PRODUCTS,
          cltyStatus: true
        }
      };
      const response = await dispatch(
        updatePPMClassesData(classe.ppclId, data)
      );
      const dataClass = {
        retcId: classeId,
        ppmClass: response,
        jobAreaReferenceType: references.find((item) => item.retyId === classe.jobAreaReference)
      };
      const responseClass = await dispatch(
        updateClassesData(classeId, dataClass)
      );
      if (responseClass.status === HTTP_STATUS_OK || response.status === HTTP_STATUS_CREATED) {
        setAlertMessage({
          isOpen: true,
          message: MESSAGE_UPDATE_SUCCESS,
          type: TYPE_SUCCESS_MESSAGE
        });
        await fetchPPMClasses();
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
      return error;
    }
  };
  const handleClasse = (prop, e) => {
    setClasse({ ...classe, [prop]: e });
  };

  const togleClasse = (e) => {
    setClasse(e);
    setmodalShow(true);
    setUpdate(true);
  };

  return {
    errors,
    classesListData,
    modalShow,
    classe,
    update,
    activeSearch,
    areasList,
    references,
    rowsDataGrid,
    alertMessage,
    typeClasses,
    referenceTypeClasses,
    getErrorValue,
    getHelperText,
    getReferenceTypes,
    setAlertMessage,
    handleShow,
    setRowsDataGrid,
    updateModalShow,
    clearFormulario,
    setmodalShow,
    getClassesListData,
    handleClasse,
    setUpdate,
    togleClasse,
    createClasse,
    editClasse,
    setActiveSearch
  };
};
export default useClasses;
