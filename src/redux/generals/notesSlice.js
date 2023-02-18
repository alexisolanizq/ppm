import { createSlice } from '@reduxjs/toolkit';
import NotesService from '@Services/notes/notesService';

const initialState = {
  list: [],
  setLoading: false
};

const service = NotesService.getInstance();

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    setNotes: (state, action) => {
      state.list = action.payload;
    },
    setLoading: (state, action) => {
      state.setLoading = action.payload;
    }
  }
});

export const { setNotes, setLoading } = notesSlice.actions;

export const fetchNotes = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.listNotes();
    dispatch(setNotes(response));
    dispatch(setLoading(false));
    return response;
  } catch (error) {
    console.error(`No hay conexión con el endpoint.\n${error}`);
    return [];
  }
};

export const addNote = (data) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.createNote(data);
    dispatch(setNotes(response));
    dispatch(setLoading(false));
    return response;
  } catch (error) {
    dispatch(setLoading(false));
    console.error(`Ocurrió un error. \n${error}`);
    return {};
  }
};

export const editNote = (id, data) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.updateNote(id, data);
    dispatch(setNotes(response));
    dispatch(setLoading(false));
    return response;
  } catch (error) {
    dispatch(setLoading(false));
    console.error(`Ocurrió un error. \n${error}`);
    return error;
  }
};

export default notesSlice.reducer;
