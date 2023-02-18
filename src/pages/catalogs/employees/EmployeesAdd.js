import GeneralLayout from '@Component/layout/GeneralLayout';
import { CREATE_EMPLOYEE } from '@Const/catalogs';
import { WIDTH } from '@Const/styles';
import useEmployeesAdd from '@Hooks/catalogs/useEmployeesAdd';
import React from 'react';
import EmployeesForm from './EmployeesForm';

const EmployeesAdd = () => {
  const { prevLinks, onCancel } = useEmployeesAdd();
  return (
    <GeneralLayout title={CREATE_EMPLOYEE} prevLinks={prevLinks} maxWidth={WIDTH.form}>
      <EmployeesForm onEnd={onCancel} onCancel={onCancel}/>
    </GeneralLayout>
  );
};

export default EmployeesAdd;
