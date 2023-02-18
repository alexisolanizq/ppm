import React from 'react';

import { Modal, Container } from 'react-bootstrap';
import FormLabel from '@mui/material/FormLabel';

import { FIELDS_REQUIRED } from '@Const/const';
import CreateMachoteDesign from './CreateMachoteDesign';

const MachoteDesignModal = ({
  //! Modal
  show,
  handleClose,
  isUpdate,
  //! Form
  register,
  handleSubmit,
  errors,
  //! Insert
  legalFigures,
  languages,
  templateTypes,
  clients,
  holders,
  onSubmit
}) => (
  <Modal size="xl" show={show} onHide={handleClose}>
    <Modal.Header closeButton onClick={handleClose} />
    <Modal.Body>
      <Container className="col-md-10 mx-auto">
        <div className="mb-3">
          <h4 className="text-center green-title fw-bold fs-8 mb-4">
            {isUpdate
              ? 'Modificar diseño de machote'
              : 'Dar de alta diseño de machote'}
          </h4>
          <FormLabel className="text-danger mb-3">
            {FIELDS_REQUIRED}
          </FormLabel>
        </div>

        {isUpdate ? (
          <p>Update</p>
        ) : (
          <CreateMachoteDesign
            handleClose={handleClose}
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            legalFigures={legalFigures}
            languages={languages}
            templateTypes={templateTypes}
            clients={clients}
            holders={holders}
            onSubmit={onSubmit}
          />
        )}
      </Container>
    </Modal.Body>
    <Modal.Footer>&nbsp;</Modal.Footer>
  </Modal>
);

export default MachoteDesignModal;
