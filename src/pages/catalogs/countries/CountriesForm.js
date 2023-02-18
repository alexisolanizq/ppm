import React from 'react';

import Form from '@Component/common/form/Form';
import DivWidth from '@Component/common/div/DivWidth';
import ButtonsForm from '@Component/common/button/ButtonsForm';
import SelectStatus from '@Component/common/select/SelectStatus';
import TextFieldController from '@Component/common/textField/TextFieldController';

import { fieldRequired } from '@Const/validations';

import useCountriesForm from '@Hooks/catalogs/useCountriesForm';

const CountriesForm = ({
  isUpdate = false,
  onCancel = () => {},
  onEnd = () => {},
  row = null
}) => {
  const { handleSubmit, onSubmit, control, errors, isLoadingMutation } =
    useCountriesForm({ row, onEnd });
  return (
    <Form errors={errors} onSubmit={handleSubmit(onSubmit)}>
      <TextFieldController
        name="counNameSpa"
        label="* Nombre del país"
        control={control}
        rules={fieldRequired}
        disabled={isUpdate}
      />
      <TextFieldController
        name="counNameEng"
        label="* Nombre del país en inglés"
        control={control}
        rules={fieldRequired}
        disabled={isUpdate}
      />
      <DivWidth porcentage={50}>
        <TextFieldController
          name="countryAlpha2.abbreviation"
          label="* Abreviatura corta"
          control={control}
          rules={fieldRequired}
          disabled={isUpdate}
        />
      </DivWidth>
      <DivWidth porcentage={50}>
        <TextFieldController
          name="countryAlpha3.abbreviation"
          label="* Abreviatura larga"
          control={control}
          rules={fieldRequired}
          disabled={isUpdate}
        />
      </DivWidth>
      {isUpdate && (
        <DivWidth porcentage={50}>
          <SelectStatus control={control} name="counStatus" />
        </DivWidth>
      )}
      <ButtonsForm onCancel={onCancel} isLoading={isLoadingMutation} />
    </Form>
  );
};

export default CountriesForm;
