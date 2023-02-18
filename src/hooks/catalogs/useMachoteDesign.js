import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useForm } from 'react-hook-form';

import {
  fetchAgents,
  fetchHolders,
  fetchLanguages,
  fetchLegalFigures,
  fetchPPMDocument,
  fetchTemplateTypes,
  fetchGetFile,
  fetchGetFileSDT,
  fetchSendFile
} from '@Redux/catalogs/machoteDesignSlice';
import { EDITOR_API_URL } from '@Const/config';

const useMachoteDesign = () => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [alertMessage, setAlertMessage] = useState({});

  const ppmDocument = useSelector((state) => state.machoteDesign.ppmDocument);

  const [legalFigures, setLegalFigures] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [templateTypes, setTemplateTypes] = useState([]);
  const [clients, setClients] = useState([]);
  const [holders, setHolders] = useState([]);

  const [container, setContainer] = useState(null);

  const [selectedVariables, setSelectedVariables] = useState([]);

  const listValiables = [
    {
      id: 1,
      name: 'FechaActual'
    },
    {
      id: 2,
      name: 'Cliente'
    },
    {
      id: 3,
      name: 'NumeroSolicitud'
    },
    {
      id: 4,
      name: 'FechaSolicitud'
    },
    {
      id: 5,
      name: 'Pais'
    },
    {
      id: 6,
      name: 'FiguraLegal'
    }
  ];

  const {
    register,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
    setIsUpdate(false);
  };

  const loadFile = async (file) => {
    const formData = new FormData();
    formData.append('files', file);

    const response = await dispatch(fetchGetFileSDT(formData));

    if (response) {
      container.documentEditor.open(response);
    }
  };

  const onOpen = async () => {
    const file = await dispatch(fetchGetFile());

    if (file) {
      loadFile(file);
    }
  };

  const saveFile = async (data) => {
    const file = await dispatch(fetchSendFile(data));
    console.log(file);
  };

  const onSave = async () => {
    // You can save the document as below
    container.documentEditor.saveAsBlob('Docx').then((blob) => {
      const exportedDocument = blob;

      // Now, save the document on server.
      const formData = new FormData();
      formData.append('fileName', 'sample.docx');
      formData.append('data', exportedDocument);

      saveFile(formData);
    });
  };

  const insertVariable = (name) => {
    const fieldCode = `MERGEFIELD \${${name}} \\* MERGEFORMAT`;
    const fieldResult = `«\${${name}}»`;
    container.documentEditor.editor.insertField(fieldCode, fieldResult);
  };

  const handleChangeArea = (event) => {
    const {
      target: { value }
    } = event;

    const values = typeof value === 'string' ? value.split(',') : value;

    const difference = selectedVariables
      .filter((x) => !values.includes(x))
      .concat(values.filter((x) => !selectedVariables.includes(x)));

    insertVariable(difference[0]);

    setSelectedVariables(values);
  };

  const getMachoteDesigns = async (ppmDocumentId) => {
    await dispatch(fetchPPMDocument(ppmDocumentId));
  };

  const createInitialstate = async () => {
    const {
      procedureManagementAction: { jobAreaProcedurePhase: joaId }
    } = ppmDocument;

    const [
      { value: legalFiguresList },
      { value: languagesList },
      { value: templateTypesList },
      { value: clientsList },
      { value: holdersList }
    ] = await Promise.allSettled([
      dispatch(fetchLegalFigures(joaId)),
      dispatch(fetchLanguages()),
      dispatch(fetchTemplateTypes()),
      dispatch(fetchAgents()),
      dispatch(fetchHolders())
    ]);

    setLegalFigures(legalFiguresList);
    setLanguages(languagesList);
    setTemplateTypes(templateTypesList);
    setClients(clientsList);
    setHolders(holdersList);
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  const initialState = (ppmDocumentId) => {
    getMachoteDesigns(ppmDocumentId);
  };

  return {
    initialState,
    //! List
    ppmDocument,
    //! Modal
    show,
    handleShow,
    handleClose,
    //! Alert
    alertMessage,
    setAlertMessage,
    //! Document Editor
    serviceUrl: EDITOR_API_URL,
    container,
    setContainer,
    onOpen,
    onSave,
    //! Create
    createInitialstate,
    legalFigures,
    languages,
    templateTypes,
    clients,
    holders,
    onSubmit,
    //! Variables
    listValiables,
    selectedVariables,
    handleChangeArea,
    //! Update
    isUpdate,
    //! Form
    register,
    handleSubmit,
    setError,
    errors
  };
};

export default useMachoteDesign;
