import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { fetchNotes } from '@Redux/generals/notesSlice';
import { fetchAreas } from '@Redux/catalogs/areaSlice';
import { fetchUsers } from '@Redux/catalogs/authorityNotificationSlice';

const useNotes = () => {
  const dispatch = useDispatch();
  const [notes, setNotes] = useState([]);
  const [areas, setAreas] = useState([]);
  const [note, setNote] = useState({});
  const [updateNote, setUpdateNote] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [modalNoteDataShow, setModalNoteDataShow] = useState(false);
  const { handleSubmit, reset, control } = useForm();
  const [areaName, setAreaName] = useState([]);
  const [users, setUsers] = useState([]);

  const getNoteFormModal = (modalBool, updateBool, row) => {
    setModalShow(modalBool);
    setUpdateNote(updateBool);
    if (updateBool) {
      setNote(row);
    }
  };

  const getNoteDataModal = (modalBool, row) => {
    setModalNoteDataShow(modalBool);
    setNote(row);
  };

  const handleClose = () => {
    setModalShow(false);
    setNote({});
    reset();
  };

  const closeModalNote = () => {
    setModalNoteDataShow(false);
    setNote({});
  };

  const getNotes = async () => {
    try {
      const response = await dispatch(fetchNotes());
      const fetchAreasList = await dispatch(fetchAreas());
      const usersData = await dispatch(fetchUsers());
      setUsers(usersData);
      setAreas(fetchAreasList);
      setNotes(response);
    } catch (error) {
      setNotes([]);
    }
  };

  const submitForm = (e) => e

  return {
    note,
    notes,
    areas,
    users,
    reset,
    setNote,
    control,
    setNotes,
    getNotes,
    setAreas,
    areaName,
    modalShow,
    submitForm,
    updateNote,
    handleClose,
    setAreaName,
    handleSubmit,
    closeModalNote,
    getNoteFormModal,
    getNoteDataModal,
    modalNoteDataShow,
    setModalNoteDataShow
  };
};

export default useNotes;
