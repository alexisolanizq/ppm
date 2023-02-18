import React from 'react';

import Form from '@Component/common/form/Form';
import Text from '@Component/common/text/Text';
import DivWidth from '@Component/common/div/DivWidth';
import ButtonsForm from '@Component/common/button/ButtonsForm';
import SelectStatus from '@Component/common/select/SelectStatus';
import ButtonNewModal from '@Component/common/button/ButtonNewModal';
import SelectController from '@Component/common/select/SelectController';
import TextFieldController from '@Component/common/textField/TextFieldController';
import FileUploadController from '@Component/common/fileUpload/FileUploadController';
import AutocompleteMultiple from '@Component/common/autocomplete/AutocompleteMultiple';

import {
  fieldRequired,
  fieldRequiredRegexAlphaAcents
} from '@Const/validations';

import useSignatoriesForm from '@Hooks/catalogs/useSignatoriesForm';

import AreasModal from '../areas/AreasModal';

const SignatoriesForm = ({
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
  } = useSignatoriesForm({ row, isUpdate, onEnd });
  return (
    <>
      <Form
        isLoading={isLoading}
        errors={errors}
        onSubmit={handleSubmit(onSubmit)}
      >
        {isUpdate ? (
          <SelectController
            name="areaDTO.joaId"
            label="* Area"
            control={control}
            rules={fieldRequired}
            options={areas}
            optionId="joaId"
            optionName="joaName"
            disabled
          />
        ) : (
          <AutocompleteMultiple
            name="jobAreas"
            label="* Area"
            control={control}
            rules={fieldRequired}
            options={areas}
            optionId="joaId"
            optionName="joaName"
            componentAdd={
              <ButtonNewModal modulo="área" onClick={openModalAreas} />
            }
          />
        )}

        <TextFieldController
          name="signName"
          label="* Nombre del firmante"
          control={control}
          rules={fieldRequiredRegexAlphaAcents}
        />
        <Text className="mb-3" isBold>
          Adjuntar firma
        </Text>
        <FileUploadController
          name="signature"
          control={control}
          rules={fieldRequired}
        />
        {isUpdate && (
          <DivWidth porcentage={50} className="mt-3">
            <SelectStatus control={control} name="signStatus" />
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

export default SignatoriesForm;
