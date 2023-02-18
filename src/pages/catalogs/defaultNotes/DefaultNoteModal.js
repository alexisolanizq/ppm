import React from 'react';

import { Modal, Container } from 'react-bootstrap';
import FormLabel from '@mui/material/FormLabel';

import { FIELDS_REQUIRED } from '@Const/const';
import CreateDefaultNote from './CreateDefaultNote';
import UpdateDefaultNote from './UpdateDefaultNote';

const DefaultNoteModal = ({
  show,
  handleClose,
  //! Insert
  priorities,
  onSubmit,
  //! Update
  isUpdate,
  currentDefaultNote,
  onUpdate,
  //! Form
  register,
  handleSubmit,
  errors
}) => (
  <Modal size="lg" show={show} onHide={handleClose}>
    <Modal.Header closeButton onClick={handleClose} />
    <Modal.Body>
      <Container className="col-md-10 mx-auto">
        <div className="mb-3">
          <h4 className="text-center green-title fw-bold fs-8 mb-4">
            {isUpdate
              ? 'Modificar nota predeterminada'
              : 'Dar de alta nota predeterminada'}
          </h4>
          <FormLabel className="text-danger mb-4">
            {FIELDS_REQUIRED}
          </FormLabel>
        </div>

        {isUpdate ? (
          <UpdateDefaultNote
            handleClose={handleClose}
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            priorities={priorities}
            currentDefaultNote={currentDefaultNote}
            onUpdate={onUpdate}
          />
        ) : (
          <CreateDefaultNote
            handleClose={handleClose}
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            priorities={priorities}
            onSubmit={onSubmit}
          />
        )}
      </Container>
    </Modal.Body>
    <Modal.Footer>&nbsp;</Modal.Footer>
  </Modal>
);

export default DefaultNoteModal;
