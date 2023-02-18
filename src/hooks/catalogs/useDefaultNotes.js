import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import {
  MESSAGE_ADD_SUCCESS,
  MESSAGE_UPDATE_SUCCESS,
  COMBO_REQUIRED,
  TYPE_SUCCESS_MESSAGE,
  VALUE_OBJECT,
  TYPE_ERROR_MESSAGE,
  VALUE_PRIORITY,
  VALUE_ZERO_STRING
} from '@Const/const';
import {
  fetchDefaultNotes,
  fetchPriorities,
  setCurrentDefaultNote,
  createDefaultNote,
  updateDefaultNote
} from '@Redux/catalogs/defaultNoteSlice';

const useDefaultNotes = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [alertMessage, setAlertMessage] = useState({});
  const [rowsDataList, setRowsDataList] = useState([]);

  const defaultNotes = useSelector(
    (state) => state.defaultNotes.defaultNotesList
  );
  const defaultNotesRowsDataList = useSelector(
    (state) => state.defaultNotes.defaultNotesDataList
  );
  const priorities = useSelector((state) => state.defaultNotes.prioritiesList);
  const currentDefaultNote = useSelector(
    (state) => state.defaultNotes.currentDefaultNote
  );

  const {
    reset,
    register,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
    setIsUpdate(false);
    reset();
  };

  const setDefaultNote = (id) => {
    const currentDefaultNoteIndex = defaultNotes.findIndex(
      (item) => item.prnoId === id
    );

    if (currentDefaultNoteIndex >= 0) {
      reset();
      const note = defaultNotes[currentDefaultNoteIndex];
      dispatch(setCurrentDefaultNote(note));
      setIsUpdate(true);
      setShow(true);
    }
  };

  const getDefaultNotes = async () => {
    const list = await dispatch(fetchDefaultNotes());
    setRowsDataList(list);
  };

  const insertDefaultNote = async (payload) => {
    const response = await dispatch(createDefaultNote(payload));

    if (typeof response === VALUE_OBJECT) {
      setAlertMessage({
        isOpen: true,
        message: MESSAGE_ADD_SUCCESS,
        type: TYPE_SUCCESS_MESSAGE
      });

      getDefaultNotes();
      return;
    }

    setAlertMessage({
      isOpen: true,
      message: response,
      type: TYPE_ERROR_MESSAGE
    });
  };

  const onSubmit = (data) => {
    handleClose();

    if (data.priority === VALUE_ZERO_STRING) {
      setError(VALUE_PRIORITY, COMBO_REQUIRED);
      return;
    }

    const currentPriorityIndex = priorities.findIndex(
      (priority) => priority.idOptionCatGeneric === parseInt(data.priority, 10)
    );

    if (currentPriorityIndex >= 0) {
      const priority = priorities[currentPriorityIndex];
      const { idOptionCatGeneric: priorityId, idCatGeneric: catalogId } =
        priority;

      const payload = {
        prnoName: data.name,
        prnoDescription: data.description,
        prnoStatus: true,
        priority: {
          opcgId: priorityId,
          cagId: catalogId
        }
      };

      insertDefaultNote(payload);
    }
  };

  const editDefaultNote = async (id, payload) => {
    const response = await dispatch(updateDefaultNote(id, payload));

    if (typeof response === VALUE_OBJECT) {
      setAlertMessage({
        isOpen: true,
        message: MESSAGE_UPDATE_SUCCESS,
        type: TYPE_SUCCESS_MESSAGE
      });

      await getDefaultNotes();
      return;
    }

    setAlertMessage({
      isOpen: true,
      message: response,
      type: TYPE_ERROR_MESSAGE
    });
  };

  const onUpdate = (data) => {
    handleClose();

    if (data.priority === '') {
      setError(VALUE_PRIORITY, COMBO_REQUIRED);
      return;
    }

    const currentPriorityIndex = priorities.findIndex(
      (priority) => priority.idOptionCatGeneric === parseInt(data.priority, 10)
    );

    if (currentPriorityIndex >= 0) {
      const priority = priorities[currentPriorityIndex];

      const { prnoId, prnoName } = currentDefaultNote;
      const { description: prnoDescription, status: prnoStatus } = data;
      const { idOptionCatGeneric: priorityId, idCatGeneric: catalogId } =
        priority;

      const payload = {
        prnoId,
        prnoName,
        prnoDescription,
        prnoStatus,
        priority: {
          opcgId: priorityId,
          cagId: catalogId
        }
      };

      editDefaultNote(prnoId, payload);
    }
  };

  const initialState = async () => {
    await getDefaultNotes();
    dispatch(fetchPriorities());
  };

  return {
    initialState,
    defaultNotesRowsDataList,
    //! List
    rowsDataList,
    setRowsDataList,
    //! Modal
    show,
    handleShow,
    handleClose,
    //! Alert
    alertMessage,
    setAlertMessage,
    //! Create
    priorities,
    onSubmit,
    //! Update
    isUpdate,
    setDefaultNote,
    currentDefaultNote,
    onUpdate,
    //! useForm
    register,
    handleSubmit,
    errors
  };
};

export default useDefaultNotes;
