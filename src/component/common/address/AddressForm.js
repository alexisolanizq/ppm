import { SIZES } from '@Const/styles';
import { fieldRequired, InputPropsMaxLength } from '@Const/validations';
import useAddressForm from '@Hooks/component/useAddressForm';
import React from 'react';
import ButtonsFormClick from '../button/ButtonsFormClick';
import DivWidth from '../div/DivWidth';
import Flex from '../flex/Flex';
import Form from '../form/Form';
import SelectController from '../select/SelectController';
import SwitchController from '../switch/SwitchController';
import TextFieldController from '../textField/TextFieldController';

const AddressForm = ({
  onSubmit = () => {},
  row = null,
  onCancel = () => {},
  isPrincipal = false
}) => {
  const {
    control,
    handleSubmit,
    colonys,
    countries,
    isLoading,
    rulesCodePostal,
    isLoadingPostalCode
  } = useAddressForm({
    row,
    isPrincipal
  });
  return (
    <Form isLoading={isLoading}>
      {!isPrincipal && (
        <SwitchController
          label="¿Dirección principal?"
          control={control}
          name="isDefault"
          width={300}
        />
      )}
      <SelectController
        control={control}
        label="*País"
        name="country.counId"
        rules={fieldRequired}
        options={countries}
        optionId="counId"
        optionName="counNameSpa"
      />
      <DivWidth porcentage="25">
        <TextFieldController
          label="Código postal"
          control={control}
          name="addCodePostal"
          rules={rulesCodePostal}
          inputProps={InputPropsMaxLength(5)}
          isLoading={isLoadingPostalCode}
        />
      </DivWidth>
      <TextFieldController
        label="*Calle"
        control={control}
        name="addStreet"
        rules={fieldRequired}
      />
      <Flex gap={SIZES.TWENTYFOUR}>
        <DivWidth porcentage={25}>
          <TextFieldController
            label="*Número exterior"
            control={control}
            name="addOutsideNumber"
            rules={fieldRequired}
          />
        </DivWidth>
        <DivWidth porcentage={25}>
          <TextFieldController
            label="Número interior"
            control={control}
            name="addInnerNumber"
          />
        </DivWidth>
      </Flex>
      {colonys.length > 0 ? (
        <SelectController
          control={control}
          label="*Colonia"
          name="addColony"
          rules={fieldRequired}
          options={colonys}
          optionId="pocoSettementName"
          optionName="pocoSettementName"
        />
      ) : (
        <TextFieldController
          label="*Colonia"
          control={control}
          name="addColony"
          rules={fieldRequired}
        />
      )}
      <TextFieldController
        label="*Ciudad"
        control={control}
        name="addCity"
        rules={fieldRequired}
      />
      <TextFieldController
        label="Municipio"
        control={control}
        name="addTownship"
      />
      <TextFieldController
        label="*Estado"
        control={control}
        name="addState"
        rules={fieldRequired}
      />
      <ButtonsFormClick
        onCancel={onCancel}
        onClick={(event) => {
          event.preventDefault();
          handleSubmit(onSubmit)(event);
        }}
      />
    </Form>
  );
};

export default AddressForm;
