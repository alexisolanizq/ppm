import React from 'react';

import { Modal, Container } from 'react-bootstrap';
import FormLabel from '@mui/material/FormLabel';

import { FIELDS_REQUIRED } from '@Const/const';
import CreatePPMDocument from './CreatePPMDocument';
import UpdatePPMDocument from './UpdatePPMDocument';

const PPMDocumentModal = ({
  show,
  handleClose,
  isUpdate,
  //! Form
  register,
  handleSubmit,
  errors,
  //! Insert
  areas,
  phases,
  actions,
  documentType,
  customerLetterType,
  handdleAreaCombo,
  handdlePhaseCombo,
  onSubmit,
  //! Update
  currentPPMDocument,
  onUpdate
}) => (
  <Modal size="lg" show={show} onHide={handleClose}>
    <Modal.Header closeButton onClick={handleClose} />
    <Modal.Body>
      <Container className="col-md-10 mx-auto">
        <div className="mb-3">
          <h4 className="text-center green-title fw-bold fs-8 mb-4">
            {isUpdate ? 'Modificar documento PPM' : 'Dar de alta Documento PPM'}
          </h4>
          <FormLabel className="text-danger mb-3">
            {FIELDS_REQUIRED}
          </FormLabel>
        </div>

        {isUpdate ? (
          <UpdatePPMDocument
            handleClose={handleClose}
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            currentPPMDocument={currentPPMDocument}
            onUpdate={onUpdate}
          />
        ) : (
          <CreatePPMDocument
            handleClose={handleClose}
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            areas={areas}
            phases={phases}
            actions={actions}
            documentType={documentType}
            customerLetterType={customerLetterType}
            handdleAreaCombo={handdleAreaCombo}
            handdlePhaseCombo={handdlePhaseCombo}
            onSubmit={onSubmit}
          />
        )}
      </Container>
    </Modal.Body>
    <Modal.Footer>&nbsp;</Modal.Footer>
  </Modal>
);

export default PPMDocumentModal;
