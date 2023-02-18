import React from 'react';

import Form from '@Component/common/form/Form';
import DivWidth from '@Component/common/div/DivWidth';
import SelectStatus from '@Component/common/select/SelectStatus';
import TextFieldController from '@Component/common/textField/TextFieldController';

import { InputPropsMaxLength } from '@Const/validations';

import useBanksForm from '@Hooks/catalogs/useBanksForm';
import ButtonsForm from '@Component/common/button/ButtonsForm';

const BanksForm = ({
  isUpdate = false,
  onCancel = () => {},
  onEnd = () => {},
  row = null
}) => {
  const {
    handleSubmit,
    onSubmit,
    control,
    fieldName,
    fieldAbreviation,
    errors,
    isLoadingMutation
  } = useBanksForm({ row, isUpdate, onEnd });
  return (
    <Form errors={errors} onSubmit={handleSubmit(onSubmit)}>
      <TextFieldController
        name="ppbaName"
        label="* Nombre de banco"
        control={control}
        inputProps={InputPropsMaxLength(20)}
        rules={fieldName}
      />
      <DivWidth porcentage={50}>
        <TextFieldController
          name="ppbaAbbreviation"
          label="* Abreviatura"
          control={control}
          rules={fieldAbreviation}
          inputProps={InputPropsMaxLength(10)}
        />
      </DivWidth>
      {isUpdate && (
        <DivWidth porcentage={50}>
          <SelectStatus control={control} name="ppbaStatus" />
        </DivWidth>
      )}
      <ButtonsForm onCancel={onCancel} isLoading={isLoadingMutation}/>
    </Form>
  );
};

export default BanksForm;
