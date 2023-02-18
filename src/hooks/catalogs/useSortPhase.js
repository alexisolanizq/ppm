import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAreas } from '@Redux/catalogs/areaSlice';
import { fetchCountries } from '@Redux/catalogs/countriesSlice';
import {
  addAreaSortedPhase,
  addSortedPhases,
  fetchAreaSortedPhases,
  fetchJobAreaProcedurePhases,
  fetchSortedPhasesById
} from '@Redux/catalogs/sortedPhaseSlice';
import { HTTP_STATUS_CREATED, 
  HTTP_STATUS_OK,
  TYPE_SUCCESS_MESSAGE,
  TYPE_ERROR_MESSAGE,
  MESSAGE_OPERATION_SUCCESS,
  MESSAGE_OPERATION_ERROR,
  VALUE_LOADING,
  VALUE_NO_MATCH
} from '@Const/const';

const useSortPhase = () => {
  const dispatch = useDispatch();
  const { handleSubmit, control, watch } = useForm();
  const [sortedPhase, setSortedPhase] = useState({});
  const [sortedPhases, setSortedPhases] = useState([]);
  const [sortedPhaseId, setSortedPhaseId] = useState(null);
  const [areas, setAreas] = useState([]);
  const [jobArea, setJobArea] = useState();
  const [countries, setCountries] = useState([]);
  const [procedurePhases, setProcedurePhases] = useState([]);
  const [alertMessage, setAlertMessage] = useState({});

  //* State selectors
  const isLoading = useSelector((state) => state.phases.isLoading);

  const reorder = (list, startIndex, endIndex) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const handleMessage = (status) => {
    if (status === HTTP_STATUS_OK || status === HTTP_STATUS_CREATED) {
      setAlertMessage({
        isOpen: true,
        message: MESSAGE_OPERATION_SUCCESS,
        type: TYPE_SUCCESS_MESSAGE
      }) 
    } else {

      setAlertMessage({
        isOpen: true,
        message: MESSAGE_OPERATION_ERROR,
        type: TYPE_ERROR_MESSAGE
      })
    }
  }

  const getStatusDisplayName = () =>
    isLoading ? VALUE_LOADING : VALUE_NO_MATCH;

  const dataForm = ({ sophPosition, arspId, jappId }) => ({
    sophPosition,
    areaSortedPhase: {
      arspId
    },
    jobAreaProcedurePhase: {
      jappId
    }
  });

  const getAreasList = async () => {
    try {
      const response = await dispatch(fetchAreas());
      setAreas(response);
    } catch (error) {
      console.error(`Ocurrió un error.\n${error}`);
      setAreas([]);
    }
  };

  const getCountriesList = async () => {
    try {
      const response = await dispatch(fetchCountries());
      setCountries(response);
    } catch (error) {
      console.error(`Ocurrió un error.\n${error}`);
      setCountries([]);
    }
  };

  const getAreaSortedPhase = async (joaId, counId) => {
    try {
      const response = await dispatch(fetchAreaSortedPhases(joaId, counId));

      if (!response?.arspId) {
        const payload = {
          jobArea: {
            joaId
          },
          arspStatus: true,
          country: {
            counId
          }
        };

        const areaSortedPhaseResponse = await dispatch(addAreaSortedPhase(payload));
        console.log(areaSortedPhaseResponse)

        if (areaSortedPhaseResponse?.arspId) {
          const resultByArea = await dispatch(fetchJobAreaProcedurePhases());
          const newResult = resultByArea.filter((resp) => resp.joaId === joaId);
          console.log(resultByArea)
          console.log(newResult)
          //* Assing ProcedurePhases Array and SortedPhaseId to Submit Form
          setProcedurePhases(newResult);
          setSortedPhaseId(areaSortedPhaseResponse?.arspId)
        }
        return response;
      }

      const responseSortedPhases = await dispatch(
        fetchSortedPhasesById(response?.arspId)
      );
      
      setSortedPhaseId(response?.arspId)

      setProcedurePhases(responseSortedPhases);

      return responseSortedPhases;

    } catch (error) {
      setProcedurePhases([]);
      return error;
    }
  };

  const insertSortedPhase = async () => {
    try {
      if(procedurePhases.length && sortedPhaseId !== null){

        procedurePhases.forEach((item, index) => {
          const sortedPhaseData = dataForm({
            sophPosition: index + 1,
            arspId: sortedPhaseId,
            jappId: item.jappId
          });

          const response = dispatch(
            addSortedPhases(sortedPhaseData)
          );
          handleMessage(response)
        })

      }
    } catch (error) {
      console.error(`Ocurrió un error.\n${error}`);
      setSortedPhase({});
    }
  };

  return {
    alertMessage,
    setAlertMessage,
    areas,
    jobArea,
    countries,
    getAreasList,
    getCountriesList,
    getAreaSortedPhase,
    sortedPhases,
    setSortedPhases,
    sortedPhase,
    insertSortedPhase,
    procedurePhases,
    setProcedurePhases,
    setJobArea,
    handleSubmit,
    control,
    watch,
    reorder,
    isLoading,
    getStatusDisplayName,
  };
};

export default useSortPhase;
