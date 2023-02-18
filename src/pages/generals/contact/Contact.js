import React from 'react';
import { VIEW_CONTACT } from '@Const/generals';
import GeneralLayout from '@Component/layout/GeneralLayout';
import {
  labels,
  actionsContactDetails,
  prevLinksContactDetails
} from '@Hooks/generals/contacts/useContactDetails';
import ContactDetails from '@Pages/generals/contact/ContactDetails';

const Contact = () => (
  <GeneralLayout
    title={VIEW_CONTACT}
    prevLinks={prevLinksContactDetails}
    actions={actionsContactDetails}
    isHideTitle
  >
    <ContactDetails labels={labels} />
  </GeneralLayout>
);

export default Contact;
