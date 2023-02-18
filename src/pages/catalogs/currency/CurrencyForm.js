import React from 'react';
import Form from '@Component/common/form/Form';
import ButtonsForm from '@Component/common/button/ButtonsForm';
import SelectStatus from '@Component/common/select/SelectStatus';
import TextFieldController from '@Component/common/textField/TextFieldController';
import { fieldRequired } from '@Const/validations';
import useCurrencyForm from '@Hooks/catalogs/useCurrencyForm';

const CurrencyForm = ({ isUpdate = false, onEnd, onCancel, row = null }) => {
  const { errors, control, onSubmit, handleSubmit, isLoadingMutation } =
    useCurrencyForm({ row, isUpdate, onEnd });
  return (
    <Form errors={errors} onSubmit={handleSubmit(onSubmit)}>
      <TextFieldController
        control={control}
        name="currName"
        label="* Nombre"
        rules={fieldRequired}
      />
      <TextFieldController
        control={control}
        name="currAbbreviation"
        label="* Abreviación"
        rules={fieldRequired}
      />
      {isUpdate && <SelectStatus control={control} name="currStatus" />}
      <ButtonsForm isLoading={isLoadingMutation} onCancel={onCancel} />
    </Form>
  );
};

export default CurrencyForm;
