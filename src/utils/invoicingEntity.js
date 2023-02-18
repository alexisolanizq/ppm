import { DB_TYPE_PERSON_ID_PHYSICS } from '@Const/db';

export const getNameEntity = ({
  typePerson,
  bienName,
  bienFirstName,
  bienLastName
}) => {
  if (typePerson?.opcgId !== DB_TYPE_PERSON_ID_PHYSICS) return bienName;

  return `${bienName} ${bienFirstName} ${bienLastName ?? ''}`;
};

export const getAddressEntity = ({
  bienStreet,
  bienOutsideNumber,
  bienInnerNumber,
  bienColony,
  bienCity,
  bienTownship,
  bienState,
  country,
  bienCodePostal
}) => `${bienStreet}
  ${bienOutsideNumber}
  ${bienInnerNumber ?? ''}
  ${bienColony}
  ${bienCity}
  ${bienTownship}
  ${bienState}
  ${country?.counNameSpa}
  C.P. ${bienCodePostal}`;
