import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getInstructionsData,
  addInstructionsData,
  updateInstructionsData,
  getInstructionsPayments,
  getPaymentsRight,
  addPaymentsRight,
  getPPMDocumentsData
} from '@Redux/catalogs/instructionsSlice';
import { fetchAreas } from '@Redux/catalogs/areaSlice';
import { fetchProcedurePhases } from '@Redux/catalogs/customerDocumentsSlice';
import { fetchPPMDocuments } from '@Redux/catalogs/ppmDocumentSlice';

const useInstructions = () => {
  const dispatch = useDispatch();
  const areasList = useSelector(({ areas }) => areas.areas);
  const instructionsListData = useSelector(
    ({ instructions }) => instructions.instruction
  );
  const instructionsPayments = useSelector(
    ({ instructions }) => instructions.instruction
  );
  const paymentsRight = useSelector(
    ({ instructions }) => instructions.paymentsRight
  );
  const ppmDocumentList = useSelector(
    ({ ppmDocuments }) => ppmDocuments.ppmDocumentsList
  );
  const [modalShow, setmodalShow] = useState(false);
  const [update, setUpdate] = useState(false);
  const [showArticle, setShowArticle] = useState(false);
  const [procedurePhases, setProcedurePhases] = useState([]);
  const [rowsDataGrid, setRowsDataGrid] = useState([]);
  const [alertMessage, setAlertMessage] = useState({});
  const [errors, setErrors] = useState(false);
  const [instruction, setInstruction] = useState({
    name: '',
    jobAreaPhase: '',
    jobArea: '',
    ppmDocument: '',
    article: '',
    status: true
  });
  const [instructionId, setInstructionId] = useState(null);
  const [instructionIds, setInstructionIds] = useState(null);
  const handleShow = () => setmodalShow(true);
  const getErrorValue = (inputError) => !!(errors && inputError === '');
  const getHelperText = (inputError, resultA, resultB) => {
    if (errors && (inputError === '' || inputError === null)) {
      return resultA;
    }
    return resultB;
  };
  const getProcedurePhases = async (id) => {
    try {
      const response = await dispatch(fetchProcedurePhases(id));
      setProcedurePhases(response);
      return true;
    } catch (error) {
      return error;
    }
  };
  const updateModalShow = async (prop, e, row) => {
    setmodalShow(prop);
    setUpdate(e);
    if (e) {
      await getProcedurePhases(row.jobAreaProcedurePhase.jobAreaId);
      setInstruction({
        name: row.intyName,
        jobAreaPhase: row.jobAreaProcedurePhase.procedurePhaseId,
        jobArea: row.jobAreaProcedurePhase.jobAreaId,
        ppmDocument: row.ppmdocument.ppmdId,
        status: row.intyStatus
      });
      setInstructionId(row.intyId);
      setInstructionIds(row.intyId);
    }
  };
  const getInstructionsListData = async () => {
    try {
      const response = await dispatch(getInstructionsData());
      dispatch(fetchAreas());
      dispatch(getInstructionsPayments());
      dispatch(getPaymentsRight());
      dispatch(getPPMDocumentsData());
      dispatch(fetchPPMDocuments());
      setRowsDataGrid(response);
      return true;
    } catch (error) {
      return error;
    }
  };
  const createInstruction = async () => {
    try {
      const { name, jobAreaPhase, jobArea, ppmDocument, article } = instruction;
      if (
        name === '' ||
        jobAreaPhase === '' ||
        jobArea === '' ||
        ppmDocument === '' ||
        article === ''
      ) {
        setErrors(true);
        return false;
      }
      const procedurePhasesSelect = procedurePhases.find(
        (item) => item.procedurePhaseId === jobAreaPhase
      );
      const data = {
        intyName: instruction.name,
        intyStatus: instruction.status,
        jobAreaProcedurePhase: {
          jappId: procedurePhasesSelect.jappId
        },
        ppmdocument: {
          ppmdId: instruction.ppmDocument
        }
      };
      const response = await dispatch(addInstructionsData(data));
      const dataPaymentsRight = {
        instructionType: {
          intyId: response.intyId
        },
        paymentRight: {
          pariId: instruction.article
        }
      };
      dispatch(addPaymentsRight(dataPaymentsRight));
      getInstructionsListData();
      updateModalShow(false, false, false);
      return true;
    } catch (error) {
      return error;
    }
  };
  const editInstruction = async () => {
    try {
      const { name, jobAreaPhase, jobArea, ppmDocument, article } = instruction;
      if (
        name === '' ||
        jobAreaPhase === '' ||
        jobArea === '' ||
        ppmDocument === '' ||
        article === ''
      ) {
        setErrors(true);
        return false;
      }
      const data = {
        instructionType: {
          intyId: instructionId
        },
        paymentRight: {
          pariId: instruction.article
        }
      };
      await dispatch(updateInstructionsData(instructionId, data));
      getInstructionsListData();
      updateModalShow(false, false, false);
    } catch (error) {
      return error;
    }
    return true;
  };
  const handleInstruction = async (prop, e) => {
    setInstruction({ ...instruction, [prop]: e });
  };

  const togleInstruction = (e) => {
    setInstruction(e);
    setmodalShow(true);
    setUpdate(true);
  };
  return {
    errors,
    modalShow,
    instruction,
    update,
    rowsDataGrid,
    areasList,
    procedurePhases,
    alertMessage,
    instructionsListData,
    instructionsPayments,
    paymentsRight,
    ppmDocumentList,
    showArticle,
    instructionIds,
    setShowArticle,
    updateModalShow,
    setAlertMessage,
    handleShow,
    setmodalShow,
    setRowsDataGrid,
    getProcedurePhases,
    getInstructionsListData,
    handleInstruction,
    createInstruction,
    editInstruction,
    togleInstruction,
    getErrorValue,
    getHelperText
  };
};
export default useInstructions;
