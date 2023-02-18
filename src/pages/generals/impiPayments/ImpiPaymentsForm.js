import React from 'react';
import useImpiPaymentsForm from '@Hooks/generals/useImpiPaymentsForm';
import { Controller } from 'react-hook-form';
import { PAYMENTS } from '@Const/lists';
import SelectController from '@Component/common/select/SelectController';
import DatePickerController from '@Component/common/datePicker/DatePickerController';
import RadioGroupController from '@Component/common/radioGroup/RadioGroupController';
import ButtonsForm from '@Component/common/button/ButtonsForm';
import Form from '@Component/common/form/Form';
import ImpiPaymentsArticles from './ImpiPaymentsArticles';
import ImpiPaymentsPanref from './ImpiPaymentsPanref';

const ImpiPaymentsForm = ({ row, onCancel, onEnd }) => {
  const {
    control,
    handleSubmit,
    onSubmit,
    fieldRequired,
    paymentTypes,
    isLoading
  } = useImpiPaymentsForm({ row, onEnd });

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-50 mb-4">
        <Controller
          name="procId"
          rules={fieldRequired}
          control={control}
          render={({ field: { onChange }, fieldState: { error } }) => (
            <ImpiPaymentsPanref onChange={onChange} error={error} />
          )}
        />
      </div>
      <Controller
        control={control}
        name="articles"
        rules={fieldRequired}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <ImpiPaymentsArticles
            onChange={onChange}
            value={value}
            error={error}
          />
        )}
      />
      <div className="w-50">
        <DatePickerController
          name="impaPaymentDate"
          label="Fecha de pago"
          rules={fieldRequired}
          control={control}
        />
        <SelectController
          name="paymentType"
          label="Tipo de pago"
          rules={fieldRequired}
          control={control}
          options={paymentTypes}
          optionId="idOptionCatGeneric"
          optionName="description"
        />
        <RadioGroupController
          name="impaPhysicalPayment"
          control={control}
          options={PAYMENTS}
          rules={fieldRequired}
        />
      </div>
      <ButtonsForm isLoading={isLoading} onCancel={onCancel} />
    </Form>
  );
};

export default ImpiPaymentsForm;
