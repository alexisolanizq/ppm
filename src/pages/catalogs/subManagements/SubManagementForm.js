import React from 'react';
import Form from '@Component/common/form/Form';
import { fieldRequired } from '@Const/validations';
import ButtonsForm from '@Component/common/button/ButtonsForm';
import SelectStatus from '@Component/common/select/SelectStatus';
import useSubManagementForm from '@Hooks/catalogs/useSubManagementForm';
import TextFieldController from '@Component/common/textField/TextFieldController';

const SubManagementForm = ({
  isUpdate = false,
  onEnd,
  onCancel,
  row = null
}) => {
  const {
    errors,
    control,
    onSubmit,
    handleSubmit,
    isLoading,
    isLoadingMutation,
  } = useSubManagementForm({ row, isUpdate, onEnd });
  return (
    <Form
        isLoading={isLoading}
        errors={errors}
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextFieldController
          name="imsuName"
          control={control}
          label="* Nombre de la subdirección"
          rules={fieldRequired}
        />
        {isUpdate && <SelectStatus name="imsuStatus" control={control} />}
        <ButtonsForm isLoading={isLoadingMutation} onCancel={onCancel} />
      </Form>
  );
};

export default SubManagementForm;
