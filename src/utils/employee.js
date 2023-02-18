export const getTelephoneEmployee = (contactTelephoneEmployee) => {
  if (!contactTelephoneEmployee || contactTelephoneEmployee.length === 0)
    return 'S/T';
  return contactTelephoneEmployee[0].coteTelephone;
};

export const getFullNameEmployee = ({ empName, empFirstName, empLastName }) =>
  `${empName ?? ''} ${empFirstName ?? ''} ${empLastName ?? ''}`;
