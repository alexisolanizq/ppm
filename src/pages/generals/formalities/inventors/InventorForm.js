import React from 'react';
import Form from '@Component/common/form/Form';
import { INVENTORS_QUANTITY } from '@Const/lists';
import { fieldRequired } from '@Const/validations';
import useInventorForm from '@Hooks/generals/useInventorForm';
import ButtonsForm from '@Component/common/button/ButtonsForm';
import RadioGroupController from '@Component/common/radioGroup/RadioGroupController';
import InventorsComponent from '@Component/common/inventor/InventorsComponent';
import TextFieldController from '@Component/common/textField/TextFieldController';
import AutocompleteController from '@Component/common/autocomplete/AutocompleteController';

const InventorForm = ({
  procedureParam = null,
  isUpdate = false,
  onCancel = () => {},
  onEnd = () => {},
  row = null
}) => {
  const {
    watch,
    handleSubmit,
    onSubmit,
    control,
    errors,
    isLoadingMutation,
    onPreeProccess,
    entriesWithSuccess,
    entriesWithErrors,
    nationalities,
    isLoading,
    setEntriesWithSuccess,
    setEntriesWithErrors
  } = useInventorForm({ row, isUpdate, onEnd, procedureParam });

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      errors={errors}
      isLoading={isLoading}
    >
      {!isUpdate && (
        <RadioGroupController
          options={INVENTORS_QUANTITY}
          control={control}
          name="clientId"
          optionId="id"
          optionName="name"
        />
      )}

      {watch('clientId') === 2 ? (
        <>
          <TextFieldController
            name="multipleInventorsDesigners"
            label="* Inventores / diseñadores"
            control={control}
            multiline
            rows={3}
            key="multipleInventorsDesigners"
          />

          <InventorsComponent
            onClick={handleSubmit(onPreeProccess)}
            withSuccess={entriesWithSuccess}
            setEntriesWithSuccess={setEntriesWithSuccess}
            setEntriesWithErrors={setEntriesWithErrors}
            withErrors={entriesWithErrors}
          />
        </>
      ) : (
        <>
          <TextFieldController
            name="inveName"
            label="* Nombre del inventor"
            control={control}
            rules={fieldRequired}
            key="invName"
          />
          <TextFieldController
            name="inveAddress"
            label="Domicilio del inventor"
            control={control}
          />
          <AutocompleteController
            name="nationalityOpcgId"
            label="Nacionalidad"
            control={control}
            options={nationalities}
            optionId="idOptionCatGeneric"
            optionName="description"
            extraOptionName='value'
          />
        </>
      )}
      <ButtonsForm
        isLoading={isLoadingMutation}
        onCancel={onCancel}
        disabled={watch('clientId') === 2 && !entriesWithSuccess.length}
      />
    </Form>
  );
};

export default InventorForm;
