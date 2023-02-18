// eslint-disable-next-line import/prefer-default-export
export const getAdressText = ({
  addStreet,
  addColony,
  addCity,
  addState,
  addCodePostal
}) => `${addStreet || ''} ${addColony || ''} - ${addCity || ''}, 
  ${addState || ''} / ${addCodePostal || ''}`;
