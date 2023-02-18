// import libraries
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getProcessesData,
  addProcessesData,
  updateProcessesData,
  getLevelsList,
  fetchTempFolders
} from '@Redux/catalogs/processesManagmentSlice';
import { fetchAreas } from '@Redux/catalogs/areaSlice';
import { fetchPriorities } from '@Redux/catalogs/defaultNoteSlice';
import {
  HTTP_STATUS_CREATED,
  HTTP_STATUS_OK,
  TYPE_SUCCESS_MESSAGE,
  TYPE_ERROR_MESSAGE,
  MESSAGE_UPDATE_SUCCESS
} from '@Const/const';

const DEFAULT_VALUES = {
  jobArea: '',
  expiration: true,
  permission: '',
  procedurePhase: '',
  processName: '',
  priority: '',
  folder: '',
  abbreviation: '',
  status: true
};

const useProcessesManagment = () => {
  const dispatch = useDispatch();
  const tempFolderListData = useSelector(
    ({ tempFolder }) => tempFolder.tempRepoFolders
  );
  const priorities = useSelector((state) => state.defaultNotes.prioritiesList);
  const processesListData = useSelector(
    ({ processesManagment }) => processesManagment.processes
  );
  const procedurePhases = useSelector(({ phases }) => phases.phases);
  const areasList = useSelector(({ areas }) => areas.areasDataGrid);
  const levels = useSelector(
    ({ processesManagment }) => processesManagment.levelList
  );
  const permissions = [];
  const [modalShow, setmodalShow] = useState(false);
  const [update, setUpdate] = useState(false);
  const [rowsDataGrid, setRowsDataGrid] = useState([]);
  const [alertMessage, setAlertMessage] = useState({});
  const [phases, setPhases] = useState([]);
  const [errors, setErrors] = useState(false);
  const [process, setProcess] = useState(DEFAULT_VALUES);
  const cleanProcess = () => {
    setErrors(false);
    setProcess(DEFAULT_VALUES);
  };
  const [processId, setProcessId] = useState(null);
  const [activeSearch, setActiveSearch] = useState(false);
  const getErrorValue = (inputError) => !!(errors && inputError === '');
  const getHelperText = (inputError, resultA, resultB) => {
    if (errors && (inputError === '' || inputError === null)) {
      return resultA;
    }
    return resultB;
  };
  const handleShow = () => setmodalShow(true);
  const phasesFilter = (jobAreaId) =>
    procedurePhases.filter((item) => item.joaId === jobAreaId);
  const updateModalShow = async (prop, e, row) => {
    try {
      setmodalShow(prop);
      setUpdate(e);
      if (e) {
        setProcess({
          jobArea: row.jobAreaProcedurePhase.joaId,
          expiration: row.prmaExpiration,
          procedurePhase: row.jobAreaProcedurePhase.prphId,
          processName: row.prmaName,
          permission: row.level.levId,
          abbreviation: row.prmaAbbreviation,
          priority: row.priority.opcgId,
          folder: row.tmpRepoFolder.tmrfId,
          status: row.prmaStatus
        });
        setProcessId(row.prmaId);
        setPhases(phasesFilter(row.jobAreaProcedurePhase.joaId));
      }
      return true;
    } catch (error) {
      return error;
    }
  };
  const cleanFormulario = () => {
    setProcess({});
    setmodalShow(false);
  };
  const getProcessesListData = async () => {
    try {
      const response = await dispatch(getProcessesData());
      setRowsDataGrid(response);
      dispatch(fetchAreas());
      dispatch(fetchTempFolders());
      dispatch(fetchPriorities());
      dispatch(getLevelsList());
      return true;
    } catch (error) {
      return false;
    }
  };
  const handleProcess = async (prop, e) => {
    setProcess({ ...process, [prop]: e });
  };
  const resetCombos = () => {
    setPhases([]);
    handleProcess('procedurePhase', '');
  };
  const handdleAreaCombo = (e) => {
    resetCombos();
    setProcess({ ...process, procedurePhase: '', jobArea: e.target.value });
    setPhases(phasesFilter(parseInt(e.target.value, 10)));
  };
  const createProcess = async () => {
    try {
      const {
        jobArea,
        procedurePhase,
        processName,
        priority,
        folder,
        abbreviation,
        expiration,
        status,
        permission
      } = process;
      if (
        jobArea === '' ||
        procedurePhase === '' ||
        processName === '' ||
        priority === '' ||
        folder === '' ||
        abbreviation === '' ||
        permission === ''
      ) {
        setErrors(true);
        return false;
      }

      const procedurePhaseSelect = procedurePhases.find(
        (item) => item.prphId === procedurePhase
      );
      const prioritieSelect = priorities.find(
        (item) => item.idOptionCatGeneric === priority
      );
      const levelSelect = levels.find((item) => item.levId === permission);
      const data = {
        prmaName: processName,
        prmaAbbreviation: abbreviation,
        tmpRepoFolder: {
          tmrfId: folder
        },
        prmaExpiration: expiration,
        prmaStatus: status,
        jobAreaProcedurePhase: procedurePhaseSelect,
        priority: {
          opcgId: prioritieSelect.idOptionCatGeneric,
          cagId: prioritieSelect.idCatGeneric,
          name: prioritieSelect.description,
          abbreviation: prioritieSelect.abbreviation,
          status: prioritieSelect.status
        },
        level: levelSelect
      };

      const response = await dispatch(addProcessesData(data));
      if (response.status === HTTP_STATUS_CREATED) {
        setAlertMessage({
          isOpen: true,
          message: MESSAGE_UPDATE_SUCCESS,
          type: TYPE_SUCCESS_MESSAGE
        });
        await getProcessesListData();
        updateModalShow(false, false, false);
      } else {
        setAlertMessage({
          isOpen: true,
          message: 'Ocurrió un error al modificar',
          type: TYPE_ERROR_MESSAGE
        });
      }
      return response;
    } catch (error) {
      return error;
    }
  };
  const editProcess = async () => {
    try {
      const {
        jobArea,
        procedurePhase,
        processName,
        priority,
        folder,
        abbreviation,
        expiration,
        status,
        permission
      } = process;
      if (
        jobArea === '' ||
        procedurePhase === '' ||
        processName === '' ||
        priority === '' ||
        folder === '' ||
        abbreviation === '' ||
        permission === ''
      ) {
        setErrors(true);
        return false;
      }

      const procedurePhaseSelect = procedurePhases.find(
        (item) => item.prphId === procedurePhase
      );
      const tmpFolderSelect = tempFolderListData.find(
        (item) => item.tmrfId === folder
      );
      const prioritieSelect = priorities.find(
        (item) => item.idOptionCatGeneric === priority
      );
      const levelSelect = levels.find((item) => item.levId === permission);

      const data = {
        prmaId: processId,
        prmaName: processName,
        prmaAbbreviation: abbreviation,
        tmpRepoFolder: tmpFolderSelect,
        prmaExpiration: expiration,
        prmaStatus: status,
        jobAreaProcedurePhase: procedurePhaseSelect,
        priority: {
          opcgId: prioritieSelect.idOptionCatGeneric,
          cagId: prioritieSelect.idCatGeneric,
          name: prioritieSelect.description,
          abbreviation: prioritieSelect.abbreviation,
          status: prioritieSelect.status
        },
        level: levelSelect
      };

      const response = await dispatch(updateProcessesData(processId, data));
      if (response.status === HTTP_STATUS_OK) {
        setAlertMessage({
          isOpen: true,
          message: MESSAGE_UPDATE_SUCCESS,
          type: TYPE_SUCCESS_MESSAGE
        });
        await getProcessesListData();
        updateModalShow(false, false, false);
      } else {
        setAlertMessage({
          isOpen: true,
          message: 'Ocurrió un error al modificar',
          type: TYPE_ERROR_MESSAGE
        });
      }
      return response;
    } catch (error) {
      return error;
    }
  };

  return {
    processesListData,
    procedurePhases,
    phases,
    modalShow,
    process,
    update,
    activeSearch,
    areasList,
    tempFolderListData,
    priorities,
    permissions,
    rowsDataGrid,
    alertMessage,
    levels,
    errors,
    handdleAreaCombo,
    cleanProcess,
    handleShow,
    setAlertMessage,
    setRowsDataGrid,
    updateModalShow,
    setmodalShow,
    getProcessesListData,
    handleProcess,
    setUpdate,
    createProcess,
    editProcess,
    setActiveSearch,
    getHelperText,
    getErrorValue,
    cleanFormulario
  };
};
export default useProcessesManagment;
