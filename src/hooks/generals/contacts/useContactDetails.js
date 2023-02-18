import React from 'react';
import { LINK_SEARCH_CONTACT } from '@Const/links';
import { AssignmentInd } from '@mui/icons-material';
import { SET_AS_DEFAULT } from '@Const/const';
import IconText from '@Component/common/icon/IconText';

const useContactDetails = () => {};

export const labels = [
  { label: 'Gerente' },
  { label: 'Auxiliar' },
  { label: 'Admin' }
];

export const prevLinksContactDetails = [
  { link: LINK_SEARCH_CONTACT, nombre: 'Gonzalo Pérez Martínez' }
];

export const actionsContactDetails = [
  <IconText icon={AssignmentInd} text={SET_AS_DEFAULT} onClick={() => {}} />
];

export default useContactDetails;
