import React from 'react';
import IconAdd from '../icon/IconAdd';

const FormAddField = ({ children, onAdd = () => {} }) => (
  <div className="formaddfield">
    {children}
    <IconAdd onClick={onAdd} />
  </div>
);

export default FormAddField;
