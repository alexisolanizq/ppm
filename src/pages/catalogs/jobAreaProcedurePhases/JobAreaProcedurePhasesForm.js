import React from 'react';
import Form from '@Component/common/form/Form';
import useJobAreProcedurePhaseForm from '@Hooks/catalogs/useJobAreProcedurePhaseForm';
import DivWidth from '@Component/common/div/DivWidth';
import SelectController from '@Component/common/select/SelectController';
import ButtonsForm from '@Component/common/button/ButtonsForm';
import { fieldRequired } from '@Const/validations';
import {
  JOBAREAPROCEDUREPHASE_AREA_FIELD,
  JOBAREAPROCEDUREPHASE_PROCEDUREPHASE_FIELD
} from '@Const/catalogs';
import ButtonNewModal from '@Component/common/button/ButtonNewModal';
import SelectStatus from '@Component/common/select/SelectStatus';
import PhasesModal from '@Pages/catalogs/phases/PhasesModal';
import AreasModal from '@Pages/catalogs/areas/AreasModal';

const JobAreaProcedurePhasesForm = ({
  onEnd,
  onCancel,
  row = null,
  isUpdate = false
}) => {
  const {
    areas,
    procedurePhases,
    control,
    handleSubmit,
    onSubmit,
    isLoadingMutation,
    errors,
    isLoading,

    //* Areas Modal
    isAreaOpen,
    openAreaModal,
    closeAreaModal,

    //* Phases Modal
    isPhaseOpen,
    openPhaseModal,
    closePhaseModal
  } = useJobAreProcedurePhaseForm({ row, onEnd, isUpdate });

  return (
    <>
      <Form
        errors={errors}
        onSubmit={handleSubmit(onSubmit)}
        isLoading={isLoading}
      >
        <SelectController
          name="joaId"
          optionId="joaId"
          optionName="joaName"
          control={control}
          options={areas}
          rules={fieldRequired}
          label={JOBAREAPROCEDUREPHASE_AREA_FIELD}
          disabled={isUpdate}
          componentAdd={
            <ButtonNewModal modulo="área" onClick={openAreaModal} />
          }
        />

        <SelectController
          name="prphId"
          optionId="prphId"
          optionName="prphName"
          control={control}
          options={procedurePhases}
          rules={fieldRequired}
          label={JOBAREAPROCEDUREPHASE_PROCEDUREPHASE_FIELD}
          disabled={isUpdate}
          componentAdd={
            <ButtonNewModal modulo="fase" onClick={openPhaseModal} />
          }
        />

        {isUpdate && (
          <DivWidth porcentage={50}>
            <SelectStatus control={control} name="jappStatus" />
          </DivWidth>
        )}

        <ButtonsForm onCancel={onCancel} isLoading={isLoadingMutation} />
      </Form>
      <PhasesModal
        isShow={isPhaseOpen}
        onCancel={closePhaseModal}
        onEnd={closePhaseModal}
      />
      <AreasModal
        isShow={isAreaOpen}
        onCancel={closeAreaModal}
        onEnd={closeAreaModal}
      />
    </>
  );
};

export default JobAreaProcedurePhasesForm;
