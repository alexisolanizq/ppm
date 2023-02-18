import React from 'react';

import Form from '@Component/common/form/Form';
import DivWidth from '@Component/common/div/DivWidth';
import ButtonsForm from '@Component/common/button/ButtonsForm';
import SelectStatus from '@Component/common/select/SelectStatus';
import ButtonNewModal from '@Component/common/button/ButtonNewModal';
import SelectController from '@Component/common/select/SelectController';
import TextFieldController from '@Component/common/textField/TextFieldController';

import { fieldRequired, fieldRequiredRegexAlphaAcents } from '@Const/validations';

import useAuthoritiesForm from '@Hooks/catalogs/useAuthoritiesForm';

import AreasModal from '../areas/AreasModal';

const AuthoritiesForm = ({
  isUpdate = false,
  onCancel = () => {},
  onEnd = () => {},
  row = null
}) => {
  const {
    handleSubmit,
    onSubmit,
    control,
    errors,
    isLoading,
    isLoadingMutation,
    areas,
    isOpenAreas,
    openModalAreas,
    closeModalAreas
  } = useAuthoritiesForm({ row, isUpdate, onEnd });
  return (
    <>
      <Form
        isLoading={isLoading}
        errors={errors}
        onSubmit={handleSubmit(onSubmit)}
      >
        <DivWidth porcentage={50}>
          <SelectController
            name="joaId"
            label="* Área"
            control={control}
            rules={fieldRequired}
            options={areas}
            optionId="joaId"
            optionName="joaName"
            disabled={isUpdate}
            componentAdd={
              <ButtonNewModal modulo="área" onClick={openModalAreas} />
            }
          />
        </DivWidth>
        <TextFieldController
          name="autName"
          label="* Nombre de la autoridad"
          control={control}
          rules={fieldRequiredRegexAlphaAcents}
        />
        {isUpdate && (
          <DivWidth porcentage={50}>
            <SelectStatus control={control} name="autStatus" />
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

export default AuthoritiesForm;
