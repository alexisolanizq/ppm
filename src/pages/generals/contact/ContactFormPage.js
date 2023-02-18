import React from 'react';
import GeneralLayout from '@Component/layout/GeneralLayout';
import { ADD_CONTACT } from '@Const/generals';
import ContactForm from '@Pages/generals/contact/forms/ContactForm';
import useContact from '@Hooks/generals/contacts/useContact';

const ContactFormPage = () => {

  const {prevLinks, onCancel} = useContact()

  return (
  <GeneralLayout
    title={ADD_CONTACT}
    prevLinks={prevLinks}
  >
    <ContactForm onCancel={onCancel} />
  </GeneralLayout>
)};

export default ContactFormPage;
