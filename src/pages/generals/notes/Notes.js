import React, { useEffect } from 'react';
import { Button, Checkbox, Divider } from '@mui/material';
import {
  Delete,
  FilterAlt,
  RestartAlt,
  Search,
  Visibility
} from '@mui/icons-material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import useNotes from '@Hooks/generals/useNotes';
import ModalNoteForm from './ModalNoteForm';
import ModalNoteData from './ModalNoteData';

const Notes = () => {
  const {
    note,
    areas,
    getNotes,
    modalShow,
    handleClose,
    closeModalNote,
    getNoteFormModal,
    getNoteDataModal,
    modalNoteDataShow,
  } = useNotes();

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div className="container bg-white mt-5 shadow-sm py-4">
      <h3 className="text-center fs-5 green-color py-2 fw-bold">
        Notas pendientes por renovar
      </h3>
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <Checkbox aria-label="Select All" />
          <p className="text-muted">Seleccionar todos</p>
        </div>
        <div>
          <Button sx={{ padding: 0 }}>
            <Search />
          </Button>
          <Button sx={{ padding: 0 }}>
            <FilterAlt />
          </Button>
          <Button sx={{ padding: 0 }}>
            <RestartAlt />
          </Button>
          <Button
            onClick={() => {
              getNoteFormModal(true, false, false);
            }}
            sx={{ padding: 0 }}
          >
            <AddCircleOutlineIcon />
          </Button>
        </div>
      </div>
      <Divider sx={{ marginBottom: 4 }} />

      <div className="container d-flex flex-column flex-sm-row flex-wrap justify-content-between align-items-center gap-1 px-3">
        <div
          className="card shadow border-0 mb-4"
          style={{ width: 300, backgroundColor: '#fdeaea' }}
        >
          <div className="p-1">
            <div className="border-bottom d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <Checkbox aria-label="Select All" />
                <p className="text-danger fw-bold">Seleccionar todos</p>
              </div>
              <p className="text-danger px-2">27 feb 22</p>
            </div>
            <div className="pb-2 d-flex flex-column justify-content-between">
              <div className="pt-1 px-3">
                <p className="m-0 p-0 text-muted fw-bold">Descripción</p>
                <p className="m-0 p-0 fw-bold">
                  Cuando lleguen Títulos actualizar a anualidades por terceros
                </p>
              </div>
              <div className="pt-1 px-3">
                <p className="m-0 p-0 text-muted fw-bold">
                  Entidad relacionada
                </p>
                <p className="m-0 p-0 fw-bold">P123456MX</p>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center border-top py-2">
              <Button className="text-danger" size="small">
                <Delete fontSize="small" color="error" />{' '}
                <p className="text-sm text-danger text-capitalize ms-1">
                  Eliminar
                </p>
              </Button>
              <Button
                onClick={() => {
                  getNoteDataModal(true, 'Success');
                }}
                size="small"
              >
                <Visibility fontSize="small" color="error" />{' '}
                <p className="text-sm text-danger text-capitalize ms-1">
                  Ver más ...
                </p>
              </Button>
            </div>
          </div>
        </div>
        <div
          className="card shadow border-0 mb-4"
          style={{ width: 300, backgroundColor: '#fdeaea' }}
        >
          <div className="p-1">
            <div className="border-bottom d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <Checkbox aria-label="Select All" />
                <p className="text-danger fw-bold">Seleccionar todos</p>
              </div>
              <p className="text-danger px-2">27 feb 22</p>
            </div>
            <div className="pb-2 d-flex flex-column justify-content-between">
              <div className="pt-1 px-3">
                <p className="m-0 p-0 text-muted fw-bold">Descripción</p>
                <p className="m-0 p-0 fw-bold">
                  Cuando lleguen Títulos actualizar a anualidades por terceros
                </p>
              </div>
              <div className="pt-1 px-3">
                <p className="m-0 p-0 text-muted fw-bold">
                  Entidad relacionada
                </p>
                <p className="m-0 p-0 fw-bold">P123456MX</p>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center border-top py-2">
              <Button className="text-danger" size="small">
                <Delete fontSize="small" color="error" />{' '}
                <p className="text-sm text-danger text-capitalize ms-1">
                  Eliminar
                </p>
              </Button>
              <Button size="small">
                <Visibility fontSize="small" color="error" />{' '}
                <p className="text-sm text-danger text-capitalize ms-1">
                  Ver más ...
                </p>
              </Button>
            </div>
          </div>
        </div>
        <div
          className="card shadow border-0 mb-4"
          style={{ width: 300, backgroundColor: '#fdeaea' }}
        >
          <div className="p-1">
            <div className="border-bottom d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <Checkbox aria-label="Select All" />
                <p className="text-danger fw-bold">Seleccionar todos</p>
              </div>
              <p className="text-danger px-2">27 feb 22</p>
            </div>
            <div className="pb-2 d-flex flex-column justify-content-between">
              <div className="pt-1 px-3">
                <p className="m-0 p-0 text-muted fw-bold">Descripción</p>
                <p className="m-0 p-0 fw-bold">
                  Cuando lleguen Títulos actualizar a anualidades por terceros
                </p>
              </div>
              <div className="pt-1 px-3">
                <p className="m-0 p-0 text-muted fw-bold">
                  Entidad relacionada
                </p>
                <p className="m-0 p-0 fw-bold">P123456MX</p>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center border-top py-2">
              <Button className="text-danger" size="small">
                <Delete fontSize="small" color="error" />{' '}
                <p className="text-sm text-danger text-capitalize ms-1">
                  Eliminar
                </p>
              </Button>
              <Button size="small">
                <Visibility fontSize="small" color="error" />{' '}
                <p className="text-sm text-danger text-capitalize ms-1">
                  Ver más ...
                </p>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <ModalNoteForm
        modalShow={modalShow}
        handleClose={handleClose}
        areas={areas}
      />

      <ModalNoteData
        modalNoteDataShow={modalNoteDataShow}
        note={note}
        closeModalNote={closeModalNote}
      />
    </div>
  );
};

export default Notes;
