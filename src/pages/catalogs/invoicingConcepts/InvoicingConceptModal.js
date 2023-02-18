import React from 'react';

import { Modal, Container } from 'react-bootstrap';
import FormLabel from '@mui/material/FormLabel';

import { FIELDS_REQUIRED } from '@Const/const';
import InvoicingConceptForm from './InvoicingConceptForm';

const InvoicingConceptModal = ({
  show,
  handleClose,
  isLoadingForm,
  //! Insert
  onSubmit,
  jobAreas,
  filteredPaymentsRights,
  articleTypes,
  articleTypesEnglish,
  clients,
  holders,
  conceptsTypes,
  stateModalSwitchs,
  handleChangeSwitch,
  selectedAreas,
  handleChangeArea,
  selectedPaymentsRights,
  handleChangePaymentsRights,
  isMultiple,
  selectedArticleType,
  handleChangeArticleType,
  //! Update
  isUpdate,
  invoicingConceptCurrent,
  getInfoProperty,
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
              ? 'Modificar concepto de facturación'
              : 'Alta de concepto de facturación'}
          </h4>
          <FormLabel className="text-danger mb-3">
            {FIELDS_REQUIRED}
          </FormLabel>
        </div>

        <InvoicingConceptForm
          isLoadingForm={isLoadingForm}
          isUpdate={isUpdate}
          handleClose={handleClose}
          register={register}
          errors={errors}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          jobAreas={jobAreas}
          filteredPaymentsRights={filteredPaymentsRights}
          articleTypes={articleTypes}
          articleTypesEnglish={articleTypesEnglish}
          clients={clients}
          holders={holders}
          conceptsTypes={conceptsTypes}
          stateModalSwitchs={stateModalSwitchs}
          handleChangeSwitch={handleChangeSwitch}
          selectedAreas={selectedAreas}
          handleChangeArea={handleChangeArea}
          selectedPaymentsRights={selectedPaymentsRights}
          handleChangePaymentsRights={handleChangePaymentsRights}
          isMultiple={isMultiple}
          selectedArticleType={selectedArticleType}
          handleChangeArticleType={handleChangeArticleType}
          invoicingConceptCurrent={invoicingConceptCurrent}
          getInfoProperty={getInfoProperty}
        />
      </Container>
    </Modal.Body>
    <Modal.Footer>&nbsp;</Modal.Footer>
  </Modal>
);

export default InvoicingConceptModal;
