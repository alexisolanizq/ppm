import React from 'react';

import Form from '@Component/common/form/Form';
import DivWidth from '@Component/common/div/DivWidth';
import ButtonsForm from '@Component/common/button/ButtonsForm';
import SelectStatus from '@Component/common/select/SelectStatus';
import ButtonNewModal from '@Component/common/button/ButtonNewModal';
import SelectController from '@Component/common/select/SelectController';
import TextFieldController from '@Component/common/textField/TextFieldController';

import {
  fieldRequired,
  fieldRequiredRegexAlphaNumeric
} from '@Const/validations';

import useTempRepositoryFoldersForm from '@Hooks/catalogs/useTempRepositoryFoldersForm';

import AreasModal from '../areas/AreasModal';

const TempRepositoryFoldersForm = ({
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
  } = useTempRepositoryFoldersForm({ row, isUpdate, onEnd });
  return (
    <>
      <Form
        isLoading={isLoading}
        errors={errors}
        onSubmit={handleSubmit(onSubmit)}
      >
        <DivWidth porcentage={50}>
          <SelectController
            name="jobArea.joaId"
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
          name="tmrfName"
          label="* Nombre de la carpeta"
          control={control}
          rules={fieldRequiredRegexAlphaNumeric}
        />
        {isUpdate && (
          <DivWidth porcentage={50}>
            <SelectStatus control={control} name="tmrfStatus" />
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

export default TempRepositoryFoldersForm;
