import GeneralLayout from '@Component/layout/GeneralLayout';
import useClientDetail from '@Hooks/generals/useClientDetail';
import { getNameClient } from '@Utils/client';
import React from 'react';
import ClientDetailContent from './ClientDetailContent';

const ClientDetail = () => {
  const props = useClientDetail();
  const { agent, isLoading, actions, prevLinks, sidebar } = props
  
  return (
    <GeneralLayout
      title={getNameClient(agent)}
      isLoading={isLoading}
      prevLinks={prevLinks}
      actions={actions}
      isHideTitle
    >
      <GeneralLayout.Sidebar sidebar={sidebar}>
        <ClientDetailContent {...props} />
      </GeneralLayout.Sidebar>
    </GeneralLayout>
  );
};

export default ClientDetail;
