import React from 'react';
import Form from '@Component/common/form/Form';
import { fieldRequired } from '@Const/validations';
import ButtonsForm from '@Component/common/button/ButtonsForm';
import SelectStatus from '@Component/common/select/SelectStatus';
import useManagementForm from '@Hooks/catalogs/useManagementForm';
import TextFieldController from '@Component/common/textField/TextFieldController';

const ManagementForm = ({ isUpdate = false, onEnd, onCancel, row = null }) => {
  const {
    errors,
    control,
    onSubmit,
    handleSubmit,
    isLoadingMutation
  } = useManagementForm({ row, isUpdate, onEnd });
  return (
    <Form
        errors={errors}
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextFieldController
          name="imadName"
          control={control}
          label="* Nombre de la dirección del IMPI"
          rules={fieldRequired}
        />
        {isUpdate && <SelectStatus name="imadStatus" control={control} />}
        <ButtonsForm isLoading={isLoadingMutation} onCancel={onCancel} />
      </Form>
  );
};

export default ManagementForm;
