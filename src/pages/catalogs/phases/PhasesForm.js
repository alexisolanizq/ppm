import React from 'react';
import Form from '@Component/common/form/Form';
import { fieldRequired } from '@Const/validations';
import DivWidth from '@Component/common/div/DivWidth';
import ButtonsForm from '@Component/common/button/ButtonsForm';
import SelectStatus from '@Component/common/select/SelectStatus';
import usePhasesForm from '@Hooks/catalogs/usePhasesForm';
import { PHASE_ACHRONYM_FIELD, PHASE_NAME_FIELD } from '@Const/catalogs';
import TextFieldController from '@Component/common/textField/TextFieldController';

const PhasesForm = ({
  onEnd = () => {},
  onCancel = () => {},
  row = null,
  isUpdate = false
}) => {
  const { control, handleSubmit, onSubmit, isLoadingMutation, errors } =
    usePhasesForm({ row, onEnd, isUpdate });
  return (
    <Form errors={errors} onSubmit={handleSubmit(onSubmit)}>
      <DivWidth porcentage={80}>
        <TextFieldController
          name="prphName"
          label={PHASE_NAME_FIELD}
          control={control}
          rules={fieldRequired}
        />
      </DivWidth>

      <DivWidth porcentage={80}>
        <TextFieldController
          name="prphAcronym"
          label={PHASE_ACHRONYM_FIELD}
          control={control}
          rules={fieldRequired}
        />
      </DivWidth>

      {isUpdate && (
        <DivWidth porcentage={50}>
          <SelectStatus name="prphStatus" control={control} />
        </DivWidth>
      )}

      <ButtonsForm onCancel={onCancel} isLoading={isLoadingMutation} />
    </Form>
  );
};

export default PhasesForm;
