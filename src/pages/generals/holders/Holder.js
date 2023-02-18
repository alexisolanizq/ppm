import React from 'react';
import useHolders from '@Hooks/generals/useHolders';
import GeneralLayout from '@Component/layout/GeneralLayout';
import MailHeaderModal from '@Pages/generals/holders/modals/MailHeaderModal';
import RecipientListModal from '@Pages/generals/holders/modals/RecipientListModal';
import AssociatedAgentsModal from '@Pages/generals/holders/modals/AssociatedAgentsModal';

import {
  actionsHolderDetails,
  prevLinksHolderDetails,
  sidebarHolderDetails
} from '@Hooks/generals/useHolderDetails';
import HolderDetails from '@Pages/generals/holders/HolderDetails';

const Holder = () => {
  const {
    control,
    handleSubmit,
    associatedAgentsModalShow,
    handleAssociatedAgents,
    recipientListModalShow,
    handleRecipientList,
    handleMailHeader,
    mailHeaderModalShow
  } = useHolders();
  return (
    <GeneralLayout
      title="Juan José Jiménez Sánchez"
      prevLinks={prevLinksHolderDetails}
      actions={actionsHolderDetails}
      isHideTitle
    >
      <GeneralLayout.Sidebar sidebar={sidebarHolderDetails}>
        <HolderDetails />
      </GeneralLayout.Sidebar>

      <AssociatedAgentsModal
        control={control}
        associatedAgentsModalShow={associatedAgentsModalShow}
        handleAssociatedAgents={handleAssociatedAgents}
        handleSubmit={handleSubmit}
      />

      <RecipientListModal
        control={control}
        recipientListModalShow={recipientListModalShow}
        handleRecipientList={handleRecipientList}
        handleSubmit={handleSubmit}
      />

      <MailHeaderModal
        control={control}
        handleSubmit={handleSubmit}
        handleMailHeader={handleMailHeader}
        mailHeaderModalShow={mailHeaderModalShow}
      />
    </GeneralLayout>
  );
};

export default Holder;
