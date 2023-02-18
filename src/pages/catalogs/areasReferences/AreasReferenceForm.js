import AutocompleteController from '@Component/common/autocomplete/AutocompleteController';
import AutocompleteMultiple from '@Component/common/autocomplete/AutocompleteMultiple';
import ButtonNewModal from '@Component/common/button/ButtonNewModal';
import ButtonsForm from '@Component/common/button/ButtonsForm';
import DivWidth from '@Component/common/div/DivWidth';
import Form from '@Component/common/form/Form';
import SelectStatus from '@Component/common/select/SelectStatus';
import { fieldRequired } from '@Const/validations';
import useAreasReferenceForm from '@Hooks/catalogs/useAreasReferenceForm';
import React from 'react';
import AreasModal from '../areas/AreasModal';

const AreasReferenceForm = ({
  isUpdate = false,
  onCancel = () => {},
  onEnd = () => {},
  row = null
}) => {
  const {
    isLoading,
    errors,
    handleSubmit,
    onSubmit,
    control,
    referenceTypes,
    areas,
    isLoadingMutation,
    isOpenAreas,
    openModalAreas,
    closeModalAreas
  } = useAreasReferenceForm({ isUpdate, row, onEnd });

  return (
    <>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        isLoading={isLoading}
        errors={errors}
      >
        <AutocompleteController 
          name='joaId'
          label='* Área'
          rules={fieldRequired}
          control={control}
          options={areas}
          optionId="joaId"
          optionName="joaName"
          disabled={isUpdate}
          componentAdd={
            <ButtonNewModal modulo="área" onClick={openModalAreas} />
          }
        />
        {isUpdate ? (
          <AutocompleteController
            name="retyId"
            label="* Tipo de referencia"
            control={control}
            rules={fieldRequired}
            options={referenceTypes}
            optionId="retyId"
            optionName="retyName"
          />
        ) : (
          <AutocompleteMultiple
            name="retys"
            label="* Tipo de referencia"
            control={control}
            rules={fieldRequired}
            options={referenceTypes}
            optionId="retyId"
            optionName="retyName"
          />
        )}

        {isUpdate && (
          <DivWidth porcentage={50}>
            <SelectStatus control={control} name="jartStatus" />
          </DivWidth>
        )}
        <ButtonsForm onCancel={onCancel} isLoading={isLoadingMutation} />
      </Form>
      <AreasModal
        isShow={isOpenAreas}
        onCancel={closeModalAreas}
        onEnd={closeModalAreas}
      />
    </>
  );
};

export default AreasReferenceForm;
