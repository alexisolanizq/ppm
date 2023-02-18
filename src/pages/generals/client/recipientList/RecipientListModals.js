import React from 'react';
import AnnuityRenewal from './AnnuityRenewal';
import Associated from './Associated';
import Procedure from './Procedure';

const RecipientListModals = ({
  control,
  handleSubmit,
  watch,
  procedureModal,
  associatedModal,
  annuityRenewalModal,
  handleCloseListTypeModals
}) => {
  const onSubmit = () => {};

  return (
    <>
      <Associated
        handleCloseListTypeModals={handleCloseListTypeModals}
        associatedModal={associatedModal}
        onSubmit={onSubmit}
        control={control}
        handleSubmit={handleSubmit}
      />
      <Procedure
        handleCloseListTypeModals={handleCloseListTypeModals}
        procedureModal={procedureModal}
        onSubmit={onSubmit}
        control={control}
        handleSubmit={handleSubmit}
      />
      <AnnuityRenewal
        handleCloseListTypeModals={handleCloseListTypeModals}
        annuityRenewalModal={annuityRenewalModal}
        watch={watch}
        onSubmit={onSubmit}
        control={control}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default RecipientListModals;
