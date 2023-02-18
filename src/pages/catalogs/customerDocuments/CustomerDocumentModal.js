import React from 'react';

import { Modal, Container } from 'react-bootstrap';
import FormLabel from '@mui/material/FormLabel';

import { FIELDS_REQUIRED } from '@Const/const';
import CustomerDocumentForm from './CustomerDocumentForm';

const CustomerDocumentModal = ({
  show,
  handleClose,
  //! Create
  jobAreas,
  procedurePhases,
  chargeTypes,
  expirationUnits,
  handdleAreaCombo,
  onSubmit,
  //! Update
  isUpdate,
  customerDocumentCurrent,
  //! Form
  register,
  handleSubmit,
  errors,
  getInfoProperty,
  isLoadingForm
}) => (
  <Modal size="lg" show={show} onHide={handleClose}>
    <Modal.Header closeButton onClick={handleClose} />
    <Modal.Body>
      <Container className="col-md-10 mx-auto">
        <div className="mb-3">
          <h4 className="text-center green-title fw-bold fs-8 mb-4">
            {isUpdate ? 'Modificar' : 'Registrar'} documentos-cliente por fase
          </h4>
          <FormLabel className="text-danger mb-3">
            {FIELDS_REQUIRED}
          </FormLabel>
        </div>

        <CustomerDocumentForm
          isLoadingForm={isLoadingForm}
          isUpdate={isUpdate}
          handleClose={handleClose}
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
          customerDocumentCurrent={customerDocumentCurrent}
          jobAreas={jobAreas}
          procedurePhases={procedurePhases}
          chargeTypes={chargeTypes}
          expirationUnits={expirationUnits}
          handdleAreaCombo={handdleAreaCombo}
          onSubmit={onSubmit}
          getInfoProperty={getInfoProperty}
        />
      </Container>
    </Modal.Body>
    <Modal.Footer>&nbsp;</Modal.Footer>
  </Modal>
);

export default CustomerDocumentModal;
