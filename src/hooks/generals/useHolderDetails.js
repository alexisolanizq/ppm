import React from 'react';
import { LINK_SEARCH_HOLDER } from '@Const/links';
import LinkIconText from '@Component/common/link/LinkIconText';
import { AccountCircle } from '@mui/icons-material';
import {
  ASSOCIATED_AGENTS,
  BILLING_ENTITY,
  INVOICE_DELIVERY,
  MAIL_HEADER,
  RECIPIENT_LIST
} from '@Const/generals';
import { DIRECTORY } from '@Const/const';

const useHolderDetails = () => {};

export const prevLinksHolderDetails = [
  { link: LINK_SEARCH_HOLDER, nombre: 'Titulares' }
];

export const actionsHolderDetails = [
  <LinkIconText icon={AccountCircle} text={DIRECTORY} />,
  <LinkIconText
    icon={AccountCircle}
    text={BILLING_ENTITY}
    to="entidades-facturacion"
  />
];

export const sidebarHolderDetails = [
  { text: RECIPIENT_LIST, to: 'lista-destinatarios' },
  { text: MAIL_HEADER },
  { text: INVOICE_DELIVERY },
  { text: ASSOCIATED_AGENTS },
  { text: INVOICE_DELIVERY }
];

export default useHolderDetails;
