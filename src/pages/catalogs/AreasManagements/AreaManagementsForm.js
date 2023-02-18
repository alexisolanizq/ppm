import React from 'react';
import AutocompleteController from '@Component/common/autocomplete/AutocompleteController';
import ButtonNewModal from '@Component/common/button/ButtonNewModal';
import ButtonsForm from '@Component/common/button/ButtonsForm';
import Form from '@Component/common/form/Form';
import SelectStatus from '@Component/common/select/SelectStatus';
import { fieldRequired } from '@Const/validations';
import AreasModal from '@Pages/catalogs/areas/AreasModal';
import useAreaManagementsForm from '@Hooks/catalogs/useAreaManagementsForm';
import ManagementModal from '../managements/ManagementModal';

const AreaManagementsForm = ({
  isUpdate = false,
  onEnd,
  onCancel,
  row = null
}) => {
  const {
    areas,
    errors,
    control,
    onSubmit,
    handleSubmit,
    isLoading,
    isLoadingMutation,
    isAreaOpen,
    closeAreaModal,
    openAreaModal,
    managements,
    isManagementOpen,
    closeManagementModal,
    openManagementModal
  } = useAreaManagementsForm({ row, isUpdate, onEnd });
  return (
    <>
      <Form
        isLoading={isLoading}
        errors={errors}
        onSubmit={handleSubmit(onSubmit)}
      >
        <AutocompleteController
          name="jobArea.joaId"
          control={control}
          options={areas}
          label="* Área"
          optionId="joaId"
          optionName="joaName"
          rules={fieldRequired}
          disabled={isUpdate}
          componentAdd={
            <ButtonNewModal modulo="área" onClick={openAreaModal} />
          }
        />
        <AutocompleteController
          name="impiAddress.imadId"
          control={control}
          options={managements}
          label="* Dirección"
          optionId="imadId"
          optionName="imadName"
          rules={fieldRequired}
          disabled={isUpdate}
          componentAdd={
            <ButtonNewModal modulo="dirección" onClick={openManagementModal} />
          }
        />
        {isUpdate && <SelectStatus name="jaiaStatus" control={control} />}
        <ButtonsForm isLoading={isLoadingMutation} onCancel={onCancel} />
      </Form>
      <AreasModal
        isShow={isAreaOpen}
        onCancel={closeAreaModal}
        onEnd={closeAreaModal}
      />
      <ManagementModal
        isShow={isManagementOpen}
        onCancel={closeManagementModal}
        onEnd={closeManagementModal}
      />
    </>
  );
};

export default AreaManagementsForm;
