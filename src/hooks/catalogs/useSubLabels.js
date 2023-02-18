import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getSubLabelsData,
  addSubLabelsData,
  updateSubLabelsData,
  getSubTagsTypesData,
  fetchCountriesList,
  fetchSubtagTypes,
  fetchReferenceTypes
} from '@Redux/catalogs/subLabelsSlice';
import { fetchAreas } from '@Redux/catalogs/areaSlice';

const useSubLabels = () => {
  const dispatch = useDispatch();
  const subtagTypes = useSelector(({ subLabels }) => subLabels.subTagsTypes);
  const referenceTypes = useSelector(
    ({ subLabels }) => subLabels.referenceTypes
  );
  const areasList = useSelector(({ areas }) => areas.areas);
  const countriesList = useSelector(({ subLabels }) => subLabels.countriesList);
  const [subLabelsListData, setSubLabelsListData] = useState([]);
  const [rowsDataGrid, setRowsDataGrid] = useState([]);
  const [alertMessage, setAlertMessage] = useState({});
  const [modalShow, setmodalShow] = useState(false);
  const [update, setUpdate] = useState(false);
  const [errors, setErrors] = useState(false);
  const [subLabel, setSubLabel] = useState({
    subtagType: '',
    jobArea: '',
    jobAreaReference: '',
    name: '',
    status: true
  });
  const [subLabelId, setSubLabelId] = useState(null);
  const handleShow = () => setmodalShow(true);
  const getErrorValue = (inputError) => !!(errors && inputError === '');
  const getHelperText = (inputError, resultA, resultB) => {
    if (errors && (inputError === '' || inputError === null)) {
      return resultA;
    }
    return resultB;
  };
  const updateModalShow = (prop, e, row) => {
    setmodalShow(prop);
    setUpdate(e);
    if (e) {
      const data = {
        subtagType: row.subtagType.opcgId,
        value: row.subtagType.abbreviation,
        jobArea: row.jobArea.id,
        jobAreaReference: row.jobAreaReferenceType.id,
        name: row.name,
        status: row.status
      };
      setSubLabel(data);
      setSubLabelId(row.sutaId);
    }
  };
  const getSubLabelsListData = async () => {
    try {
      const response = await dispatch(getSubLabelsData());
      dispatch(getSubTagsTypesData());
      dispatch(fetchAreas());
      dispatch(fetchCountriesList());
      dispatch(fetchReferenceTypes());
      dispatch(fetchSubtagTypes());
      setRowsDataGrid(response);
      return true;
    } catch (error) {
      return error;
    }
  };
  const createSubLabel = async () => {
    const { subtagType, jobArea, jobAreaReference, name } = subLabel;
    if (
      subtagType === '' ||
      jobArea === '' ||
      jobAreaReference === '' ||
      name === ''
    ) {
      setErrors(true);
      return false;
    }
    try {
      const data = {
        sutaName: subLabel.name,
        sutaStatus: subLabel.status,
        jobArea: {
          joaId: subLabel.jobArea
        },
        country: {
          counId: 1
        },
        subtagType: {
          opcgId: subLabel.subtagType,
          cagId: 10
        },
        jobAreaReferenceType: {
          id: subLabel.jobAreaReference
        }
      };
      const response = await dispatch(addSubLabelsData(data));
      const newArr = subLabelsListData.push(response);
      setSubLabelsListData(newArr);
      updateModalShow({ open: false, edit: false, subLabel: false });
      return true;
    } catch (error) {
      return error;
    }
  };
  const editSubLabel = async () => {
    try {
      const { subtagType, jobArea, jobAreaReference, name } = subLabel;
      if (
        subtagType === '' ||
        jobArea === '' ||
        jobAreaReference === '' ||
        name === ''
      ) {
        setErrors(true);
        return false;
      }
      const data = {
        sutaName: subLabel.name,
        sutaStatus: subLabel.status,
        jobArea: {
          id: subLabel.jobArea
        },
        country: {
          opcgId: 1,
          cagId: 9
        },
        subtagType: {
          opcgId: subLabel.subtagType,
          cagId: 10
        },
        jobAreaReferenceType: {
          id: subLabel.jobAreaReference
        }
      };
      const response = await dispatch(updateSubLabelsData(subLabelId, data));
      const newArr = subLabelsListData.push(response);
      setSubLabelsListData(newArr);
      updateModalShow(false, false, false);
      return true;
    } catch (error) {
      return error;
    }
  };
  const handleSubLabel = async (prop, e) => {
    setSubLabel({ ...subLabel, [prop]: e });
  };

  return {
    errors,
    rowsDataGrid,
    subLabelsListData,
    modalShow,
    subLabel,
    update,
    subtagTypes,
    areasList,
    countriesList,
    alertMessage,
    referenceTypes,
    setRowsDataGrid,
    setAlertMessage,
    handleShow,
    updateModalShow,
    setmodalShow,
    getSubLabelsListData,
    handleSubLabel,
    createSubLabel,
    editSubLabel,
    getHelperText,
    getErrorValue
  };
};
export default useSubLabels;
