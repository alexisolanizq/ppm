import ButtonsForm from '@Component/common/button/ButtonsForm';
import Form from '@Component/common/form/Form';
import FormAddField from '@Component/common/form/FormAddField';
import SelectController from '@Component/common/select/SelectController';
import TextFieldController from '@Component/common/textField/TextFieldController';
import { fieldRequired } from '@Const/validations';
import useUserForm from '@Hooks/catalogs/useUserForm';
import React from 'react';

const UserForm = ({
  row,
  onCancel = () => {},
  onEnd = () => {},
  isUpdate = false
}) => {
  const {
    handleSubmit,
    onSubmit,
    areas,
    control,
    isLoading,
    levels,
    users,
    isLoadingMutation,
    handleAddSecondary,
    areasSecondary
  } = useUserForm({
    row,
    onEnd,
    isUpdate
  });
  return (
    <Form isLoading={isLoading} onSubmit={handleSubmit(onSubmit)}>
      <SelectController
        label="* Área principal"
        name="joaIdMain"
        rules={fieldRequired}
        control={control}
        options={areas}
        optionId="joaId"
        optionName="joaName"
      />

      <FormAddField onAdd={handleAddSecondary}>
        {areasSecondary.map((item, index) => (
          <SelectController
            key={`areasecundarioa-${item.id}`}
            label="* Área secundaria"
            name={`areaSecondary.${index}.jobArea.joaId`}
            rules={fieldRequired}
            control={control}
            options={areas}
            optionId="joaId"
            optionName="joaName"
          />
        ))}
      </FormAddField>
      
      <TextFieldController
        label="* Correo electrónico"
        control={control}
        name="usrEmail"
        disabled={isUpdate}
        rules={fieldRequired}
      />
      <SelectController
        label="* Nivel de permiso"
        name="level.levId"
        rules={fieldRequired}
        control={control}
        options={levels}
        optionId="levId"
        optionName="levName"
      />
      <SelectController
        label="* Corresponsable 1"
        name="coresponsibles.0.coresponsible.usrId"
        rules={fieldRequired}
        control={control}
        options={users}
        optionId="usrId"
        optionName="usrName"
      />
      <SelectController
        label="* Corresponsable 2"
        name="coresponsibles.1.coresponsible.usrId"
        rules={fieldRequired}
        control={control}
        options={users}
        optionId="usrId"
        optionName="usrName"
      />
      <SelectController
        label="* Corresponsable 3"
        name="coresponsibles.2.coresponsible.usrId"
        rules={fieldRequired}
        control={control}
        options={users}
        optionId="usrId"
        optionName="usrName"
      />
      <ButtonsForm isLoading={isLoadingMutation} onCancel={onCancel} />
    </Form>
  );
};

export default UserForm;
