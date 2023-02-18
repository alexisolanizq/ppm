import { Delete, Edit } from '@mui/icons-material';
import { Button, DialogContent, Typography } from '@mui/material';
import React from 'react';
import CustomDialogComponent from '@Component/common/bootstrapDialog/CustomBootstrapDialog';

const ModalNoteData = ({ closeModalNote, modalNoteDataShow }) => {
  const { BootstrapDialog, BootstrapDialogTitle } = CustomDialogComponent();

  return (
    <div>
      <BootstrapDialog
        open={modalNoteDataShow}
        onClose={closeModalNote}
        sx={{ padding: 0 }}
      >
        <BootstrapDialogTitle
          className="text-center green-color fw-bold fs-5"
          onClose={closeModalNote}
        >
          Ver Nota
        </BootstrapDialogTitle>
        <div className="py-3 px-4 d-flex justify-content-between fw-bold">
          <p>Actualizar anualidades </p>
          <p>27 Feb 22</p>
        </div>
        <DialogContent>
          <div className="mb-3 fw-bold">
            <p className="text-muted">Descripción</p>
            <p>Cuando lleguen títulos actualizar anualidades por terceros</p>
          </div>
          <div className="mb-3 fw-bold">
            <p className="text-muted">Entidad relacionada</p>
            <p>P123456MX</p>
          </div>
          <div className="mb-3 fw-bold">
            <p className="text-muted">Nombre de la entidad relacionada</p>
            <p>Juan Pérez</p>
          </div>
          <div className="mb-3 fw-bold">
            <p className="text-muted">Oficina</p>
            <p>Oaxaca</p>
          </div>
          <div className="mb-3 fw-bold">
            <p className="text-muted">Nombre del titular</p>
            <p>Alberto Medina</p>
          </div>
          <div className="mb-3 fw-bold">
            <p className="text-muted">Area destinataria</p>
            <p>Patente</p>
          </div>
          <div className="mb-3 fw-bold">
            <p className="text-muted">Duración</p>
            <p>6 meses</p>
          </div>
        </DialogContent>
        <div className="d-flex justify-content-between">
          <Button className="d-flex align-items-center" size="small">
            <Edit fontSize="small" />
            <Typography className="text-capitalize text-small ms-2">Modificar</Typography>
          </Button>
          <Button size="small" className='d-flex align-items-center'>
            <Delete fontSize="small" />
            <Typography className="text-capitalize text-small ms-2">Eliminar</Typography>
          </Button>
        </div>
      </BootstrapDialog>
    </div>
  );
};

export default ModalNoteData;
