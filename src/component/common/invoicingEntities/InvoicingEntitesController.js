import React from 'react';
import { Controller } from 'react-hook-form';
import InvoicingEntitiesComponent from './InvoicingEntitiesComponent';

const InvoicingEntitesController = ({
  name = '',
  control,
  rules = {},
  nameMain = '',
  addresses
}) => <Controller
    name={name}
    control={control}
    rules={rules}
    render={({ field: { value, onChange } }) => (
      <InvoicingEntitiesComponent
        value={value}
        onChange={onChange}
        nameMain={nameMain}
        addresses={addresses}
      />
    )}
  />;

export default InvoicingEntitesController;
