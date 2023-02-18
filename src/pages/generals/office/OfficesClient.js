import GeneralLayout from '@Component/layout/GeneralLayout';
import { PAGE_TITLE_OFFICES } from '@Const/generals';
import useOfficesClient from '@Hooks/generals/useOfficesClient';
import React from 'react';
import OfficesList from './OfficesList';

const OfficesClient = () => {
  const { prevLinks, offices, isLoading, actionsToolbar } = useOfficesClient();

  return (
    <GeneralLayout
      isTitleFlex
      title={PAGE_TITLE_OFFICES}
      prevLinks={prevLinks}
      actions={actionsToolbar}
      isLoading={isLoading}
    >
      <OfficesList offices={offices} />
    </GeneralLayout>
  );
};

export default OfficesClient;
