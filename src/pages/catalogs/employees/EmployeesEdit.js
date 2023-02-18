import GeneralLayout from '@Component/layout/GeneralLayout';
import { UPDATE_EMPLOYEE } from '@Const/catalogs';
import { WIDTH } from '@Const/styles';
import useEmployeesEdit from '@Hooks/catalogs/useEmployeesEdit';
import React from 'react';
import EmployeesForm from './EmployeesForm';

const EmployeesEdit = () => {
  const { prevLinks, onCancel, isLoading, employee } = useEmployeesEdit();
  return (
    <GeneralLayout
      isLoading={isLoading}
      title={UPDATE_EMPLOYEE}
      prevLinks={prevLinks}
      maxWidth={WIDTH.form}
    >
      <EmployeesForm isUpdate onEnd={onCancel} row={employee} onCancel={onCancel} />
    </GeneralLayout>
  );
};

export default EmployeesEdit;
