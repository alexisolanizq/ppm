import React from 'react';
import Form from '@Component/common/form/Form';
import { fieldRequired } from '@Const/validations';
import AreasModal from '@Pages/catalogs/areas/AreasModal';
import ButtonsForm from '@Component/common/button/ButtonsForm';
import SelectStatus from '@Component/common/select/SelectStatus';
import ButtonNewModal from '@Component/common/button/ButtonNewModal';
import ManagementModal from '@Pages/catalogs/managements/ManagementModal';
import AutocompleteController from '@Component/common/autocomplete/AutocompleteController';
import useAreaManagementSubManagementForm from '@Hooks/catalogs/useAreaManagementSubManagementForm';
import SubManagementModal from '../subManagements/SubManagementModal';

const AreaManagementSubManagementsForm = ({
  isUpdate = false,
  onEnd,
  onCancel,
  row = null
}) => {
  const {
    areas,
    managements,
    errors,
    control,
    onSubmit,
    handleSubmit,
    isLoading,
    isLoadingMutation,
    isAreaOpen,
    closeAreaModal,
    openAreaModal,
    isManagementOpen,
    closeManagementModal,
    openManagementModal,
    subManagements,
    isSubManagementOpen,
    closeSubManagementModal,
    openSubManagementModal
  } = useAreaManagementSubManagementForm({ row, isUpdate, onEnd });
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
          label="* Áreas"
          optionId="joaId"
          optionName="joaName"
          rules={fieldRequired}
          disabled={isUpdate}
          componentAdd={
            <ButtonNewModal modulo="área" onClick={openAreaModal} />
          }
        />
        <AutocompleteController
          name="management.imadId"
          control={control}
          options={managements}
          label="* Direcciones"
          optionId="imadId"
          optionName="imadName"
          rules={fieldRequired}
          disabled={isUpdate}
          componentAdd={
            <ButtonNewModal modulo="dirección" onClick={openManagementModal} />
          }
        />
        <AutocompleteController
          name="submanagement.imsuId"
          control={control}
          options={subManagements}
          label="* Subdirecciones"
          optionId="imsuId"
          optionName="imsuName"
          rules={fieldRequired}
          disabled={isUpdate}
          componentAdd={
            <ButtonNewModal
              modulo="subdirección"
              onClick={openSubManagementModal}
            />
          }
        />
        {isUpdate && <SelectStatus name="imsuStatus" control={control} />}
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
      <SubManagementModal
        isShow={isSubManagementOpen}
        onCancel={closeSubManagementModal}
        onEnd={closeSubManagementModal}
      />
    </>
  );
};

export default AreaManagementSubManagementsForm;
