import ButtonsForm from '@Component/common/button/ButtonsForm';
import DivWidth from '@Component/common/div/DivWidth';
import Form from '@Component/common/form/Form';
import RadioGroupController from '@Component/common/radioGroup/RadioGroupController';
import SelectStatus from '@Component/common/select/SelectStatus';
import TextFieldController from '@Component/common/textField/TextFieldController';
import { TYPE_AREA } from '@Const/lists';
import { InputPropsMaxLength } from '@Const/validations';
import useAreasFormulario from '@Hooks/catalogs/useAreasFormulario';
import React from 'react';

const AreasFormulario = ({
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
  } = useAreasFormulario({ row, isUpdate, onEnd });
  return (
    <Form
      errors={errors}
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextFieldController
        name="joaName"
        label="* Nombre de área"
        control={control}
        inputProps={InputPropsMaxLength(20)}
        rules={fieldName}
      />
      <DivWidth porcentage={50}>
        <TextFieldController
          name="joaAbbreviation"
          label="* Abreviatura"
          control={control}
          rules={fieldAbreviation}
          inputProps={InputPropsMaxLength(10)}
        />
      </DivWidth>
      <RadioGroupController
        label="Tipo área:"
        options={TYPE_AREA}
        control={control}
        name="joaForeign"
        optionValue='value'
        isHorizontal
      />
      {isUpdate && (
        <DivWidth porcentage={50}>
          <SelectStatus control={control} name="joaStatus" />
        </DivWidth>
      )}
      <ButtonsForm onCancel={onCancel} isLoading={isLoadingMutation}/>
    </Form>
  );
};

export default AreasFormulario;
