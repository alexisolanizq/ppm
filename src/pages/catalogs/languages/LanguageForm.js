import ButtonsForm from '@Component/common/button/ButtonsForm';
import DivWidth from '@Component/common/div/DivWidth';
import Form from '@Component/common/form/Form';
import SelectStatus from '@Component/common/select/SelectStatus';
import TextFieldController from '@Component/common/textField/TextFieldController';
import { fieldRequiredRegexAlphaAcents } from '@Const/validations';
import useLanguageForm from '@Hooks/catalogs/useLanguageForm';
import React from 'react';

const LanguageForm = ({ isUpdate, onEnd, onCancel, row }) => {
  const { errors, control, handleSubmit, onSubmit, isLoadingButton } =
    useLanguageForm({ row, isUpdate, onEnd });
  return (
    <Form errors={errors} onSubmit={handleSubmit(onSubmit)}>
      <TextFieldController
        name="lanName"
        label="* Nombre del idioma"
        control={control}
        rules={fieldRequiredRegexAlphaAcents}
      />
      {isUpdate && (
        <DivWidth porcentage={50}>
          <SelectStatus control={control} name="lanStatus" />
        </DivWidth>
      )}
      <ButtonsForm onCancel={onCancel} isLoading={isLoadingButton} />
    </Form>
  );
};

export default LanguageForm;
