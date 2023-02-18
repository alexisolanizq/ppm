import GeneralLayout from '@Component/layout/GeneralLayout';
import { ADD_CONTACT } from '@Const/generals';
import useContactFormAddClient from '@Hooks/generals/contacts/useContactFormAddClient';
import React from 'react';
import ContactForm from './forms/ContactForm';

const ContactFormAddClient = () => {
  const { prevLinks, isLoading, onSubmit, isLoadingAdd,onCancel } = useContactFormAddClient();
  return (
    <GeneralLayout
      isLoading={isLoading}
      title={ADD_CONTACT}
      prevLinks={prevLinks}
    >
      <ContactForm onSubmit={onSubmit} isLoading={isLoadingAdd} onCancel={onCancel}/>
    </GeneralLayout>
  );
};

export default ContactFormAddClient;
